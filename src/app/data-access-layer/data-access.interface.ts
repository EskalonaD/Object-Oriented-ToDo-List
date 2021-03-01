export interface DAOContext<T, K> {
    path: string;
    decode(data: T): K;
    encode(data: K): T;
}