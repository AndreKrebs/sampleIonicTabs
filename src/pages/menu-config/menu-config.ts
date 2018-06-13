import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfigurationPage } from '../configuration/configuration';
import { UserProfilePage } from '../user-profile/user-profile';
import { AboutAppPage } from '../about-app/about-app';

/**
 * Generated class for the MenuConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-config',
  templateUrl: 'menu-config.html',
})
export class MenuConfigPage {

  rootPage = ConfigurationPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  menuPagemProfile() {
    this.navCtrl.push(UserProfilePage);
  }

  menuPageAbout() {
    this.navCtrl.push(AboutAppPage);
  }

}
