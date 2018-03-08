import { Component, ViewChild, Renderer } from '@angular/core';
import { NavParams, Platform } from 'ionic-angular';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {
  public text: string
  public selectedMode: string = 'handwriting';
  @ViewChild('myCanvas') canvas: any;

  canvasElement: any;
  lastX: number;
  lastY: number;

  currentColour: string = '#000';
  brushSize: number = 5;

  constructor(public platform: Platform, public renderer: Renderer, navParams: NavParams) {
    this.text = navParams.get('options').pageOptions.sections[0].text;
  }

  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;

    this.renderer.setElementAttribute(this.canvasElement, 'width', '506');
    this.renderer.setElementAttribute(this.canvasElement, 'height', '813');
  }

  ionViewDidLoad() {
  }

  isTextAreaSelected(flag: boolean) {
    this.selectedMode = flag ? 'textarea' : 'handwriting';
  }

  handleStart(ev) {
    var rect = ev.target.getBoundingClientRect();

    this.lastX = ev.touches[0].pageX - rect.left;
    this.lastY = ev.touches[0].pageY - rect.top;
  }

  handleMove(ev) {
    var rect = ev.target.getBoundingClientRect();
    
    let ctx = this.canvasElement.getContext('2d');
    let currentX = ev.touches[0].pageX - rect.left;
    let currentY = ev.touches[0].pageY - rect.top;

    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.moveTo(this.lastX, this.lastY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();
    ctx.strokeStyle = this.currentColour;
    ctx.lineWidth = this.brushSize;
    ctx.stroke();

    this.lastX = currentX;
    this.lastY = currentY;
  }

}
