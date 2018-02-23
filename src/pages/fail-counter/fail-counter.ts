import { Component, Input } from "@angular/core";

@Component({
    selector: 'fail-counter',
    template: `
    <span item-start>{{name}}</span>
    <div class="input-controls">
        <input type="checkbox" [checked]="isSerious">
        <input type="checkbox" [checked]="isDangerous">
        <button (click)="decrement();">-</button>
        <span class="side-margins" [ngClass]="{'greyed-out': counter === 0 }">{{counter}}</span>
        <button (click)="increment();">+</button>
    </div>
    `
})
export class FailCounter {
    @Input()
    public counter: number = 0
    @Input()
    public name: string
    @Input()
    public isSerious: boolean
    @Input()
    public isDangerous: boolean

    constructor() { }

    public increment() { this.counter++; }
    public decrement() { 
        if(this.counter === 0) {
            return;
        }
        this.counter--; 
    }
}