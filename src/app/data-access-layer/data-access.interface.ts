export interface DAOContext<T, K> {
    decode(data: T): K;
    encode(data: K): T;
}