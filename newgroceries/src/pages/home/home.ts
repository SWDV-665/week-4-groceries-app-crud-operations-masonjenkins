import { Component } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';
import { GroceriesProvider } from '../../providers/groceries/groceries';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loadItems() {
    return this.groceriesDataService.getItems()
  }

  constructor(public alertCtrl: AlertController, public toastCtrl: ToastController, public groceriesDataService: GroceriesProvider, public dialogDataService: InputDialogServiceProvider) {}

  removeItem(item, index) {
    this.toastCtrl.create({
      message: 'Removing item "' + item.name + '"', 
      duration: 2500
    }).present()

    this.groceriesDataService.removeItem(index)
  }

  addItem() {
    this.dialogDataService.showPrompt()
  }

  editItem(item, index) {
    this.dialogDataService.showPrompt(item, index) 
  }

}
