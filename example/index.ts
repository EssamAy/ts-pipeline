import { Pipeline } from "../"
import { Pipe } from "../";

export class RemoveBadWords implements Pipe<string> {
    constructor() {}
    handle(data: string): string {
        data +="bb";
        return data;
    }
}

export class ReplaceLinkTags implements Pipe<string> {
    constructor() {}
    handle(data: string): string{
        data +="ll";
        return data;
    }
}

export class RemoveScriptTags implements Pipe<string> {
    constructor() {}
    handle(data: string): string{
        data +="ss";
        return data;
    }
}

test();
function test() {
    let content = "some string here";

    content = new Pipeline<string>(content)
        .through([
            new RemoveBadWords(),
            new ReplaceLinkTags(),
            new RemoveScriptTags()
        ])
        .thenReturn();
    console.log('data', content);
}