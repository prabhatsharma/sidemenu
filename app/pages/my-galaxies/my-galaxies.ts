import {Page, NavController, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/my-galaxies/my-galaxies.html'
})
export class MyGalaxiesPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(private nav: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [
      {title: 'Galaxy 1', note: 'Health Galaxy', icon: this.icons[0] },
      {title: 'Galaxy 2', note: 'Job galaxy', icon: this.icons[1] },
      {title: 'Galaxy 4', note: 'All College students', icon: this.icons[3] },
    ];
  }
}
