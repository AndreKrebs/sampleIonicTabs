import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuConfigPage } from './menu-config';

@NgModule({
  declarations: [
    MenuConfigPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuConfigPage),
  ],
})
export class MenuConfigPageModule {}
