import { from, Observable, of, Subscription } from 'rxjs';
import {tap, switchMap} from 'rxjs/operators'
import { DAO } from '../data-access-layer';
import { TaskAPI } from '../data-access-layer/dto/task.dto';
import { TaskCodec } from './codec/task-codec';
import { unexposedTask, Task } from './interfaces';
import { extraData } from './task/task';

export interface updatedTaskData {
    description?: string;
    status?: string;
    extra?: Array<extraData>
}


export interface TasksModelForView {
    getTasks: () => Observable<unexposedTask[]>;
}

export class TasksModel implements TasksModelForView {

    // seems like aggregation, but actually its composition
    private constructor(private codec: TaskCodec, private dao: DAO) { }
    isLoading!: boolean;


    // singleton realization
    static getModel(): TasksModel {
        if(TasksModel.instance) return TasksModel.instance;
        return new TasksModel(new TaskCodec, new DAO);
    }

    private static instance: TasksModel;

    getTasks(): Observable<Task[]> {
        const tasks = this.dao.getAll();
        return from(tasks);
    }

    updateTask(task: Task, data: updatedTaskData): void {
        this.isLoading = true;
        const updateSubscription = of(null).pipe(
            switchMap(() => this.dao.update(this.mergeTaskUpdates(task, data))),
        ).subscribe()
        
        updateSubscription.add(() => this.isLoading = false);

        this.timeoutUnsubscribe(updateSubscription);

    }

    changeTaskDescription(task: Task, description: string): void {

    }

    completeTask(task: Task): void {

    }

    addTask(data: Partial<TaskAPI>) {

    }

    deleteTask(task: Task) {

    }

    setTaskStatus(task: Task, status: string): void {

    }

    private mergeTaskUpdates(task: Task, data: updatedTaskData): TaskAPI {
        const { description, status, extra } = data;
        const encodedTask = this.codec.encode(task);

        if(description) encodedTask.data.main.description = description;
        if(status) encodedTask.data.main.status = status;
        if(extra) encodedTask.data.extra = this.mergeExtraData(encodedTask.data.extra, extra);

        return encodedTask;
    }

    private mergeExtraData(taskExtra: extraData[], data: extraData[]): extraData[] {
        const temp: extraData[] = [];
        data.forEach(el => {
            const fieldIndex = taskExtra.findIndex(item => el.fieldName === item.fieldName);
            if(~fieldIndex) taskExtra[fieldIndex] = el;
            else temp.push(el);
        });
        
        return taskExtra.concat(temp);
    }

    private timeoutUnsubscribe(sub: Subscription): void {
        const timeConstrain = 7000;

        setTimeout(() => {
            if(!sub.closed) {
                sub.unsubscribe();
                this.isLoading = false;
                console.log('Request was aborted. Reason: time exceeded');
            }
        }, timeConstrain);
    }
}