import { extraData } from './task/task';

export type fieldError = { field: string, message: string };

export interface Task extends exportedTask {
   // todo: change argument type
    validateChange(change: any): boolean;
    clone(): Task;
    accept(visitor: TaskVisitor): any;

    status:string;
    description: string;
    addField(fieldName: string, fieldValue: any, fieldType?: string): void
}

export interface exportedTask {
    readonly status: string;
    readonly errorList: readonly fieldError[]; 
    readonly statusList: string[];
    readonly id: number;
    readonly description: string;
    readonly extraData: readonly extraData[];
    clone(): exportedTask;
}

export interface TaskVisitor {

}

export interface Codec<T, K> {
    decode(data: T): K;
    encode(data: K): T;
}