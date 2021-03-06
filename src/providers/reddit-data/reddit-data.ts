import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RedditDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RedditDataProvider {

  conciertos: any;
  about: any;

  constructor(public http: Http) {
    console.log('Hello RedditDataProvider Provider');
  }

  getConciertos(){
    if(this.conciertos){
  		return Promise.resolve(this.conciertos);
  	}
    return new Promise (resolve => this.http.get('http://apiconciertos.azurewebsites.net/api/conciertos').map(res => res.json()).subscribe(data => {
      this.conciertos = data[0];
  		resolve(this.conciertos);
  	}));
  }

  getAbout(){
    if(this.about){
  		return Promise.resolve(this.about);
  	}
    return new Promise (resolve => this.http.get('assets/data/integrantes.json').map(res => res.json()).subscribe(data => {
      this.about = data;
  		resolve(this.about);
  	}));
  }

}
