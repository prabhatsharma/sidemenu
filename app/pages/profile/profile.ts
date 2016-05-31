import {Page} from 'ionic-angular';
import {AuthService} from '../../services/auth/auth';


@Page({
  templateUrl: 'build/pages/profile/profile.html'
})
export class ProfilePage {
  constructor(private auth: AuthService) {

  }
}
