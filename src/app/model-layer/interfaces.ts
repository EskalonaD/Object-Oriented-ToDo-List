export interface Task {
    description: string;
    status: string;
    id: number;
    completeTask(): void;
    updateTask(prop: string, value: any, type?: string): void;
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