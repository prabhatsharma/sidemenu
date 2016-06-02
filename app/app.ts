import {ViewChild} from '@angular/core';
import {provide, Type} from '@angular/core';
import {Http} from '@angular/http'
import {App, Platform, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {AuthService} from './services/auth/auth';
import {AllGalaxiesPage} from './pages/all-galaxies/all-galaxies';
import {MyGalaxiesPage} from './pages/my-galaxies/my-galaxies';
import {ProfilePage} from './pages/profile/profile';
import {ListPage} from './pages/list/list';



@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [
    provide(AuthHttp, {
      useFactory: (http) => {
        return new AuthHttp(new AuthConfig({ noJwtError: true }), http);
      },
      deps: [Http]
    }),
    AuthService
  ]
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ProfilePage;
  pages: Array<{ title: string, component: any }>

  constructor(private platform: Platform, private auth: AuthService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'All Galaxies', component: AllGalaxiesPage },
      { title: 'My Galaxies', component: MyGalaxiesPage },
      // { title: 'List', component: ListPage },
      { title: 'Profile', component: ProfilePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      
      // When the app starts up, there might be a valid
      // token in local storage. If there is, we should
      // schedule an initial token refresh for when the
      // token expires
      this.auth.startupTokenRefresh();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
