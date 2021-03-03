import { Task } from './interfaces';

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

    set description(value: string) {
        if (this.validateDescription(value)) {
            this._description = value;
        } else {
            throw new Error('Task can not be empty.');
        }
    }

    get id(): number {
        return this._id;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        value = value.toLowerCase();
        
        if (this.validateStatus(value)) {
            this._status = value;
        } else {
            throw new Error('This value can not be status.');
        }
    }

    completeTask(): void {
        this._status = 'completed';
    }


    // template method. validation method can be changed in descendant classes
    updateTask(fieldName: string, value: any, type?: string): void {
        const field = this._extraFields.find(el => el.fieldName === fieldName);

        if (field) {
            if (this.validateFieldValue(value, field.fieldName, field.fieldType)) {
            field.fieldValue = value;
            }else {
                throw new Error('This value can not be assigned to this field');
            }
        } else {
            const newField: extraData = {
                fieldName,
                fieldValue: value,
                ...type && { fieldType: type },
            };

            this._extraFields.push(newField);
        }

    }

    getExtraData(): extraData[] {
        return this._extraFields;
    }

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
    clone() { }
    accept() { }



}
