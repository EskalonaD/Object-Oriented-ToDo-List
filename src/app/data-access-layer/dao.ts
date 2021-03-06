import { taskMocks } from '../../mock/tasks';

export class DAO {

    async fetchData(path: string): Promise<any> {
        return taskMocks;
    }

    async    getAll(): Promise<any> {
        return this.fetchData('');
    }

 //@ts-ignore
async create(...args) {}

 //@ts-ignore
async read(...args) {}

 //@ts-ignore
 async delete(...args) {}

 //@ts-ignore
 update(...args): PromiseLike<any>


}
