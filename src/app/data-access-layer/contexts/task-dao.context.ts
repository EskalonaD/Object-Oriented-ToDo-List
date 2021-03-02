import { DAOContext } from '../data-access.interface';
import { Task } from '../../model-layer';

interface TaskAPI {
    id: number;
    status: string;
    statusList: string[];
    description: string;
    customData: {
        [key: string]: any;
    }
}

export class TaskDAOContext implements DAOContext<TaskAPI, Task> {
    path = '';

    //@ts-ignore
    decode(data: TaskAPI): Task {
        throw new Error('Not implemented yet');
    }

    //@ts-ignore
    encode(data: Task): TaskAPI {
        throw new Error('Not implemented yet');
    }
}