import { DAOContext } from '../data-access.interface';
import { Task } from '../../model-layer';

type extraData = {
    fieldName: string;
    fieldValue: any;
    
    fieldType?: string;
}

export interface TaskAPI {
    metadata: {
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

