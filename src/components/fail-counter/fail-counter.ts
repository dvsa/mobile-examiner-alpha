import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'fail-counter',
    template: `
    <span item-start>{{name}}</span>
    <div class="input-controls">
        <input type="checkbox" [checked]="isSerious" (change)="inputChecked($event, false);">
        <input type="checkbox" [checked]="isDangerous" (change)="inputChecked($event, true);">
        <button (click)="decrement();">-</button>
        <span class="side-margins" [ngClass]="{'greyed-out': counter === 0 }">{{counter}}</span>
        <button (click)="increment();">+</button>
    </div>
    `
})
export class FailCounter {
    @Input() public name: string;
    
    @Input() public counter: number;
    @Output() counterChange = new EventEmitter<number>();

    @Input() public isSerious: boolean;
    @Output() isSeriousChange = new EventEmitter<boolean>();
    
    @Input() public isDangerous: boolean;
    @Output() isDangerousChange = new EventEmitter<boolean>();

    constructor() { }

    public increment() { 
        this.counter++; 
        this.counterChange.emit(this.counter);
    }

    public decrement() { 
        if(this.counter === 0) {
            return;
        }
        this.counter--;
        this.counterChange.emit(this.counter); 
    }

    public inputChecked(event: any, isDangerous: boolean) {
        if (isDangerous) {
            this.isDangerous = event.target.checked;
            this.isDangerousChange.emit(this.isDangerous);
        }else {
            this.isSerious = event.target.checked;
            this.isSeriousChange.emit(this.isSerious);
        }
    }
}