import { extraData } from './task/task';

export type fieldError = { field: string, message: string };

export interface Task extends unexposedTask {
   // todo: change argument type
    validateChange(change: any): boolean;
    clone(): Task;
    accept(visitor: TaskVisitor): any;

    update(): void;
    addField(fieldName: string, fieldValue: any, fieldType?: string): void;
    deleteField(fieldName: string): void;
}

export interface unexposedTask {
    readonly status: string;
    readonly errorList: readonly fieldError[]; 
    readonly statusList: string[];
    readonly id: number;
    readonly description: string;
    readonly extraData: readonly extraData[];
    clone(): unexposedTask;
    accept(visitor: TaskVisitor): any;
}

export interface TaskVisitor {

}

export interface Codec<T, K> {
    decode(data: T): K;
    encode(data: K): T;
}