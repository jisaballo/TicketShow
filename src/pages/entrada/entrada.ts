import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RedditDataProvider } from '../../providers/reddit-data/reddit-data';

/**
 * Generated class for the EntradaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-entrada',
  templateUrl: 'entrada.html',
})
export class EntradaPage {

  concierto_id : any;
  entrada_id : any;
  entrada : any;
  concierto : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public redditService: RedditDataProvider) {
    this.concierto_id = navParams.get('concierto_id');
    this.entrada_id = navParams.get('entrada_id');

    this.entrada = null;
	  this.redditService.getConciertos().then(
		  data => {
        this.entrada = data.conciertos[this.concierto_id].entradas[this.entrada_id];
        this.concierto = data.conciertos[this.concierto_id];
		  },err => console.log(err));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntradaPage');
  }

}
