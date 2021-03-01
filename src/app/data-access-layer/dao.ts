import { taskMocks } from '../mock/tasks';
import { TaskDAOContext } from './contexts/task-dao.context';
import { DAOContext } from './data-access.interface';

export class DAO {

    //should it really be prop? async problem... mb not a singleton?
    private context!: DAOContext<any, any>;

    private async getData<T>(): Promise<T> {
        const data = await this.fetchData(this.context.path);
        const decodedData = this.context.decode(data);

        return decodedData;
    }

    async fetchData(path: string): Promise<any> {
        return taskMocks;
    }

    getTasks(): any {
        this.context = new TaskDAOContext();
        return this.getData<any>();
    }
}
