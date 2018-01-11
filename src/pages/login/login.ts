import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage }  from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	private user:any={email:'',password:''};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  public login(){
  	if((this.user.email !== null && this.user.email !== '' && this.user.email !== '') &&
  		(this.user.password !== null && this.user.password !== '' && this.user.password !== '')){
  			this.navCtrl.setRoot(HomePage);
  			this.navCtrl.push(HomePage);
  		}
  }

}
