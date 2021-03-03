import { DAOContext } from '../data-access.interface';
import { Task } from '../../model-layer';

type extraData = {
    fieldName: string;
    fieldValue: any;
    
    fieldType?: string;
}

export interface TaskAPI {
    metaData: {
        statusList: string[];
        id: number;
    },
    data: {
        main: {

            status: string;
            description: string;
        },
        extra: extraData[];
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