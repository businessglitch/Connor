import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AdMobFree, AdMobFreeBannerConfig} from   "@ionic-native/admob-free"


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  	constructor(public navCtrl: NavController, private adMob: AdMobFree) {
  		 this.showBannerAd();
  	}

  	async showBannerAd() {
	  
	  	try {
	  		const bannerConfig: AdMobFreeBannerConfig = {
		  		id: 'ca-app-pub-1159899900107606~4293921350',
		  		isTesting: true,
		  		autoShow: true,
	  		}
	  		this.adMob.banner.config(bannerConfig);
	  		const result = await this.adMob.banner.prepare();
	  		console.log(result);
	  	} 
	  	catch (e) {
	  		console.error(e)
	  	}
 	}

}
