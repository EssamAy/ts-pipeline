import { Pipe } from "../interfaces/pipe";
export declare class Pipeline<T> {
    private data;
    constructor(data: T);
    through(pipes: Pipe<T>[]): this;
    thenReturn(): T;
}
