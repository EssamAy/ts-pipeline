import { Pipe } from "../";
export declare class RemoveBadWords implements Pipe<string> {
    constructor();
    handle(data: string): string;
}
export declare class ReplaceLinkTags implements Pipe<string> {
    constructor();
    handle(data: string): string;
}
export declare class RemoveScriptTags implements Pipe<string> {
    constructor();
    handle(data: string): string;
}
