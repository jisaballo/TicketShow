import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RedditDataProvider } from '../../providers/reddit-data/reddit-data';

import { ConciertoDetallesPage } from '../concierto-detalles/concierto-detalles';

/**
 * Generated class for the ConciertosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-conciertos',
  templateUrl: 'conciertos.html',
})
export class ConciertosPage {

  conciertos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public redditService: RedditDataProvider) {
    this.conciertos = null;
	  this.doRefresh(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConciertosPage');
  }

  doRefresh(refresher) {
    this.redditService.getConciertos().then(
		  data => {
        this.conciertos = data.conciertos;
        if (refresher != 0)
          refresher.complete();
		  },err => console.log(err));
  }

  concierto_detalles(concierto_id){
    this.navCtrl.push(ConciertoDetallesPage , {
      id: concierto_id
    });
  }

}
