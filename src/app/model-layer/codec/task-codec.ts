import { TaskAPI } from 'src/app/data-access-layer/dto/task.dto';
import { Codec, Task } from '../interfaces';
import { StandardTask } from '../task';
import { EncodeVisitor } from '../visitor/encode-visitor';

export class TaskCodec implements Codec<TaskAPI, Task> {
    path = '';

    decode(data: TaskAPI): Task {
        if (this.validateEncodedData(data)) {
            const {data: {main: {status, description}, extra}, metaData: {id, statusList}} = data;
            const optionalData = {
                id,
                statusList,
                extraData: extra,
            }

            return new StandardTask(description, status, optionalData);
        }

        throw new Error('Can not create task with this data');
    }

    //@ts-ignore
    encode(task: Task): TaskAPI {
        return task.accept(new EncodeVisitor());
    }

    private validateEncodedData(data: TaskAPI): boolean {
        // stub
        return true;
    }
}