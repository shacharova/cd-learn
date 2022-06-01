import { NgModule, Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'notPure', pure: false })
export class NotPurePipe implements PipeTransform {
    private static counter: number = 0;

    transform(value: any) {
        const counter = ++NotPurePipe.counter;
        const result = `${value} ${counter}`;
        console.log(result);
        return result;
    }
}

@NgModule({
    declarations: [NotPurePipe],
    imports: [],
    exports: [NotPurePipe]
})
export class NotPurePipeModule { }