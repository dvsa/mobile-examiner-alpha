import { Component, } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { IFormPage } from '../../sheared/interfaces';

@Component({
  selector: 'page-table',
  templateUrl: 'table.html'
})
export class TablePage {
  public formPage: IFormPage;

  constructor(navParams: NavParams) {
    this.formPage = navParams.get('options');
  }
}
