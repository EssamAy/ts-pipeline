import { Pipe } from "../interfaces/pipe";

export class Pipeline<T> {

    private data: T;
    public constructor(data: T) {
        this.data = data;
        return this;
    }
    public through(pipes: Pipe<T>[]) {
        pipes.forEach(pipe => {
            this.data = pipe.handle(this.data)
        });
        return this;
    }

    thenReturn(): T {
        return this.data;
    }
}