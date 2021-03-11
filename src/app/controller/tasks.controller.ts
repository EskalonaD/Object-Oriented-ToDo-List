import { unexposedTask, Task } from '../model-layer';
import { extraData } from '../model-layer/task/task';
import { TasksModel, updatedTaskData } from '../model-layer/tasks.model';

export class TasksController {
    constructor (private tasksModel: TasksModel) {}

    addTask(task: updatedTaskData) {}
    updateTask(Task: unexposedTask, taskData: updatedTaskData) {}
    deleteTask(task: unexposedTask) {}
    addField(task: unexposedTask, taskData: extraData) {}
    deleteField(task: unexposedTask, fieldName: string) {}
    completeTask(task: unexposedTask) {}
    changeDescription(task: unexposedTask, description: string) {}

}
