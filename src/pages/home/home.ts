import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HTTP } from '@ionic-native/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchTerm: string = "fox";
  titles: any;
  searching: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.http.get('https://api.justwatch.com/titles/de_DE/popular')
      .subscribe(data => {
        console.log('running test');
        console.log(data);
      })
  }

  search() {
    // console.log('search: ', this.searchTerm);
    // this.titles = [];
    // this.searching = true;
    // this.http.get('https://api.justwatch.com/titles/de_DE/popular', {
    //   content_types: ['movie'],
    //   page: 1,
    //   page_size: 20,
    //   query: this.searchTerm
    // }).then(titles => {
    //   this.titles = titles.json().items;
    //   this.searching = false;
    // })
    // this.http.post('https://api.justwatch.com/titles/de_DE/popular', {
    //   content_types: ['show', 'movie'],
    //   page: 1,
    //   page_size: 20,
    //   query: this.searchTerm,
    // })
    // .subscribe(titles => {
    //   this.titles = titles.json().items;
    //   this.searching = false;
    // });
  }

  b() {

  }

}
