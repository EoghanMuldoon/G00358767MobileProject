import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  movies: any[]=[];
  Title: String;
  constructor(public navCtrl: NavController, public http: HttpClient) {

  }

  

  ChangeString()
  {
    this.getFilmInfo().subscribe((data)=>{
      this.movies=data.Search;
      console.log(this.movies);
    });
    
  }

  getFilmInfo():Observable<any>{
    return this.http.get('http://www.omdbapi.com/?apikey=cd01256&s='+this.Title);
  }

  OpenGpsPage(){
    this.navCtrl.push("GpsPage");
  }
}
