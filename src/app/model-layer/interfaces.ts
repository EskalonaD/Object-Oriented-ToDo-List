export interface Task {
    getDescription(): string;
    getStatus(): string;
    setStatus(status: string): void; 
    completeTask(): void;
    updateTask(prop: string, value: any): void;
    getExtraData(): {[key: string]: any};
    clone(): Task;
    accept(visitor: TaskVisitor): any;
}

export interface TaskVisitor {

}