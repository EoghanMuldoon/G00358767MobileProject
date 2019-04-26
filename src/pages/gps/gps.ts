import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the GpsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gps',
  templateUrl: 'gps.html',
})
export class GpsPage {

  lat:number;
  long:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private storage: Storage) {
  }

  getGeolocation(){
    this.geolocation.getCurrentPosition().then((data) => {
      this.lat = data.coords.latitude;
      this.long = data.coords.longitude; 
     }).catch((error) => {
       console.log(error);
     });
  }

  saveToStorage(){
     this.storage.set("lat",this.lat);
     this.storage.set("long",this.long);
     //this.checkStorageIsWorking();

  }

  // this was only to check if the value was being saved
 /* checkStorageIsWorking(){
    this.storage.get("lat").then((data) => {
    if (data == null) {
    console.log("Not found");
    } else {
    console.log("lat = " + data);
    }}).catch((err) => {
    console.log("Error = " + err);})

    this.storage.get("long").then((data) => {
      if (data == null) {
      console.log("Not found");
      } else {
      console.log("lat = " + data);
      }}).catch((err) => {
      console.log("Error = " + err);})
  }*/

  returnToLast(){
    this.navCtrl.pop();
  }

}
