import { NgModule } from '@angular/core';
import { PageHeaderComponent } from './page-header/page-header';
import { IonicModule } from 'ionic-angular';
@NgModule({
  declarations: [PageHeaderComponent],
  imports: [IonicModule.forRoot(PageHeaderComponent)],
  exports: [PageHeaderComponent]
})
export class ComponentsModule {}
