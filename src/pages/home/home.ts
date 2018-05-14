import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import {AdMobFree, AdMobFreeBannerConfig} from   "@ionic-native/admob-free"


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  	constructor(private platform: Platform,public navCtrl: NavController, private adMob: AdMobFree) {
  		platform.ready().then(() => {
    		if (this.platform.is('cordova')) this.showBannerAd();
    	});
  	}

  	async showBannerAd() {
	  	const bannerConfig: AdMobFreeBannerConfig ={
	  		//id: '',
	  		isTesting: true,
	  		autoShow: true,
	  	}
	  	this.adMob.banner.config(bannerConfig);

	  	try {
	  		const result = await this.adMob.banner.prepare();
	  		console.log(result);
	  	} 
	  	catch (e) {
	  		console.error(e)
	  	}
 	}

}
