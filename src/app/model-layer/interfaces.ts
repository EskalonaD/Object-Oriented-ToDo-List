export interface Task {
    description: string;
    status: string;
    id: number;
    errorList: { field: string, message: string }[];
    // todo: change argument type
    validateChange(change: any): boolean;
    getExtraData(): Array<{
        fieldName: string;
        fieldValue: any;
        fieldType?: string;
    }>;
    clone(): Task;
    accept(visitor: TaskVisitor): any;
}

export interface TaskVisitor {

}

export interface Codec<T, K> {
    decode(data: T): K;
    encode(data: K): T;
}