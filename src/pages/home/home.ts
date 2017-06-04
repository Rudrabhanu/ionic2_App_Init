import { Component } from '@angular/core';
import { NavController,ToastController ,ActionSheetController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private toastCtrl:ToastController, private actionSheet:ActionSheetController ) {

  }
  showAlert = ()=>{
      let toastObj = this.toastCtrl.create({
        message:'Hi Toast',        
        position:'bottom',
        showCloseButton: true,
        closeButtonText: 'Ok'
      });
      toastObj.present();
  }
  showActionSheet = () =>{
    let actionSheet = this.actionSheet.create({
      title:'Sample Action sheet',
      buttons:[
        {
            text:'Cancel',
            role:'cancel',
            handler:()=>{
               console.log("Cancel action Performed");
            }
        },
        {
          text:'Delete',
          role:'destructive',
          handler:()=>{
            console.log("Delete action performed")
          }
        }
      ]
    });
    actionSheet.present();
  }
  navigateAboutPage = ()=>{
    console.log("clicked");
    this.navCtrl.push(AboutPage);
  }
}
