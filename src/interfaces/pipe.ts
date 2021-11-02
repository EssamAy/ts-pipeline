export interface Pipe<T> {
    handle(data: T): T;
}