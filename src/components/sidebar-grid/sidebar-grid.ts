import { Component } from '@angular/core';
import { IFormPage } from '../../sheared/interfaces';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the SidebarGridComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sidebar-grid',
  templateUrl: 'sidebar-grid.html'
})
export class SidebarGridComponent {

  public formPage: IFormPage;

  constructor(navParams: NavParams) {
    this.formPage = navParams.get('options');
  }

}
