# ts-pipeline

Inspired by laravel pipelines, using ts-pipeline you can pass an object between several classes in a fluid way to perform any type of task and finally return the resulting value once all the “tasks” have been executed.


# Installation

`$ npm i @essamay/ts-pipeline`


# Example
in your main file

```
import { Pipeline } from  '@essamay/ts-pipeline';
import { RemoveBadWords } from  './filters/RemoveBadWords';
import { ReplaceLinkTags } from  './filters/ReplaceLinkTags';
import { RemoveScriptTags } from  './filters/RemoveScriptTags';
...
...
let  content = "some string here";
content = new  Pipeline<string>(content)
	.through([
		new  RemoveBadWords(),
		new  ReplaceLinkTags(),
		new  RemoveScriptTags()
	])
	.thenReturn();
console.log('data', content);
...
...
```
then you will need to declare the classes (pipes) that should implements the Pipe interface
example `./filters/RemoveBadWords.ts`

```
import { Pipe } from  '@essamay/ts-pipeline';
export  class  RemoveBadWords implements  Pipe<string> {
	constructor() {}

	handle(data: string): string {
		// your code here
		return data;
	}
}
```