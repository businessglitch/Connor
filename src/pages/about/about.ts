import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SOUNDS_LIST} from '../../mocks/sounds/sounds';
import {Sound} from '../../models/sounds/sounds.interface';
//import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	soundsList:Sound[] = SOUNDS_LIST;
	audio: any;
  constructor(public navCtrl: NavController) {
  	
  }

  playSound(sound) {
  	if(this.audio) this.audio.pause();
  	this.audio = new Audio();
	this.audio.src = sound.path;
	this.audio.load();
	this.audio.play();
  }
}
