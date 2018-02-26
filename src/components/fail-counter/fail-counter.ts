import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FaultsScorecardProvider } from "../../providers/faults-scorecard/faults-scorecard";

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

    constructor(private falutsScorecardProvider: FaultsScorecardProvider) { }

    public increment() {
        this.counter++;
        this.counterChange.emit(this.counter);
        this.falutsScorecardProvider.addDrivingFault();
    }

    public decrement() {
        if (this.counter === 0) {
            return;
        }
        this.counter--;
        this.counterChange.emit(this.counter);
        this.falutsScorecardProvider.removeDrivingFault();
    }

    public inputChecked(event: any, isDangerous: boolean) {
        if (isDangerous) {
            this.isDangerous = event.target.checked;
            if (this.isDangerous) {
                this.falutsScorecardProvider.addDangerous();
            } else {
                this.falutsScorecardProvider.removeDangerous();
            }
            this.isDangerousChange.emit(this.isDangerous);
        } else {
            this.isSerious = event.target.checked;
            if (this.isSerious) {
                this.falutsScorecardProvider.addSerious();
            } else {
                this.falutsScorecardProvider.removeSerious();
            }
            this.isSeriousChange.emit(this.isSerious);
        }
    }
}