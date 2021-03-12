import { Observable } from 'rxjs';
import { unexposedTask, Task } from '../model-layer';
import { extraData } from '../model-layer/task/task';
import { TasksModel, updatedTaskData } from '../model-layer/tasks.model';


type ModelSingleton<T> = { getModel(): T}

export class TasksController {
    private constructor (private tasksModel: TasksModel) {}

    private static instance: TasksController;
    static getController(model: ModelSingleton<TasksModel>): TasksController {
        if(TasksController.instance) return TasksController.instance;
        return new TasksController(model.getModel());
    }
    
    addTask(task: updatedTaskData) {}
    updateTask(Task: unexposedTask, taskData: updatedTaskData) {}
    deleteTask(task: unexposedTask) {}
    addField(task: unexposedTask, taskData: extraData) {}
    deleteField(task: unexposedTask, fieldName: string) {}
    completeTask(task: unexposedTask) {}
    changeDescription(task: unexposedTask, description: string) {}
    getTasks(): Observable<unexposedTask[]> {
        return this.tasksModel.getTasks();
    }

}
