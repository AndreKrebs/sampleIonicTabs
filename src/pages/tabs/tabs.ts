import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
// import { ConfigurationPage } from '../configuration/configuration';
import { MenuConfigPage } from '../menu-config/menu-config';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = FeedPage;
  tab5Root = MenuConfigPage;

  constructor() {

  }
}
