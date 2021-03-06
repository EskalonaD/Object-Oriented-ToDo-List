import { DAO } from 'src/app/data-access-layer';
import { Task } from '../interfaces';

enum BaseStatusList {
    completed = 'completed',
    incomplete = 'incomplete',
}

export type extraData = {
    fieldName: string;
    fieldValue: any;
    fieldType?: string;
}

// todo: think about inner state that will store errors 

export class StandardTask implements Task {
    constructor(
        private _description: string,
        private _status: string,
        extra?: {
            id?: number,
            statusList?: string[],
            extraData?: Array<{
                fieldName: string,
                fieldValue: any,
                fieldType?: string,
            }>,
        }
    ) {
        this._id = extra?.id ?? NaN;
        this._extraFields = extra?.extraData ?? [];
        this._statusList = extra?.statusList ?? Object.values(BaseStatusList);
    }

    private _id: number;
    private _extraFields: extraData[];
    private _statusList: string[];


    get description(): string {
        return this._description;
    }

    get id(): number {
        return this._id;
    }

    get status(): string {
        return this._status;
    }

    getExtraData(): extraData[] {
        return this._extraFields;
    }

    // todo: implement
    //@ts-ignore
    validateChange(change): boolean { }

    errorList: { field: 'string', message: string }[] = []

    private validateFieldValue(value: any, prop: string, type?: string): boolean {
        return value !== '';
    }


    private validateStatus(value: string): boolean {
        return this._statusList.includes(value) || value.toLowerCase() === BaseStatusList.completed;
    }



    private validateDescription(value: string): boolean {
        return value !== '';
    }



    //todo: implement patterns
    //@ts-ignore
    clone(): Task { }
    accept() { }



}
