import { DAOContext } from '../data-access.interface';

export class TaskDAOContext implements DAOContext<any, any> {
    path = '';
    decode(data:any) {
        throw new Error('Not implemented yet');
    }

    encode(data: any) {
        throw new Error('Not implemented yet');
    }
}