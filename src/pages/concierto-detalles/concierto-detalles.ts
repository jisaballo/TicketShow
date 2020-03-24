import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RedditDataProvider } from '../../providers/reddit-data/reddit-data';

import { EntradaPage } from '../entrada/entrada';
/**
 * Generated class for the ConciertoDetallesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-concierto-detalles',
  templateUrl: 'concierto-detalles.html',
})
export class ConciertoDetallesPage {

  id : any;
  concierto : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public redditService: RedditDataProvider) {
    this.id = navParams.get('id');

    this.concierto = null;
	  this.redditService.getConciertos().then(
		  data => {
        this.concierto = data.conciertos[this.id];
		  },err => console.log(err));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConciertoDetallesPage');
  }

  entrada(entrada_id){
    this.navCtrl.push(EntradaPage , {
      concierto_id: this.id,
      entrada_id: entrada_id
    });
  }

}
