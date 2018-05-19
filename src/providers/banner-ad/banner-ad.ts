import { Injectable } from '@angular/core';
import {AdMobFree, AdMobFreeBannerConfig} from   "@ionic-native/admob-free"
/*
  Generated class for the BannerAdProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BannerAdProvider {

  constructor(private adMob: AdMobFree) {
    console.log('Hello BannerAdProvider Provider');
  }

  async showBannerAd() {
	  
	  	try {
	  		const bannerConfig: AdMobFreeBannerConfig = {
		  		id: 'ca-app-pub-1159899900107606/8625840613',
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
