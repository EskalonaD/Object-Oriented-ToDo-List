import { Observable } from 'rxjs';
import { TasksController } from '../controller/tasks.controller';
import { unexposedTask } from '../model-layer';
import { TasksModel } from '../model-layer/tasks.model';

export class TasksView {
    // composition due to possibility of incorrect work of aggregation using angular
    constructor() {
        this.controller = TasksController.getController(TasksModel);
        this.tasks = this.controller.getTasks();
    }

    tasks: Observable<unexposedTask[]>;
    
    private controller: TasksController;

    completeTask() {}
    setDescription() {}
    updateTask() {}
    deleteTask() {}
}
