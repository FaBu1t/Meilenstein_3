import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DataPersistServiceService } from '../data-persist-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private dataService:DataPersistServiceService, private modalController:ModalController, private alertController:AlertController) {}

  getTasks(){
    return this.dataService.getTasks().filter((task) =>{
      return task.finished;
    })
  }

  async removeTask(task){
    const alert = await this.alertController.create({
      header: 'Wirklich löschen?',
      message: 'Bitte bestätigen...',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'JA, BITTE!',
          handler: () => {
            this.dataService.removeTask(task);
          }
        }
      ]
    });

    await alert.present();
  }
}
