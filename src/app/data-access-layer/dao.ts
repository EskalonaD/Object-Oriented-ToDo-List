import { taskMocks } from '../mock/tasks';

export class DAO {

    async fetchData(path: string): Promise<any> {
        return taskMocks;
    }

    getTasks(): Promise<any> {
        return this.fetchData('');
    }
}
