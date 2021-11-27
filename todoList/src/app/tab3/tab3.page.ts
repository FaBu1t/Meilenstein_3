import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataPersistServiceService } from '../data-persist-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertController:AlertController, private dataService:DataPersistServiceService) {}


  async deleteAllTasks()
  {
    const alert = await this.alertController.create({
        header: 'Möchtest du Wirklich alle Aufgaben löschen?',
        message: 'Diese Aktion kann nicht rückgängig gemacht werden!',
        buttons: [
          {
            text: 'Abbrechen',
            role: 'cancel',
            cssClass: 'secondary'
          }, 
          {
            text: 'Einverstanden',
            handler: () => {
              this.dataService.removeAll();
            }
          }
        ]
      });
      
    await alert.present();
  }
}
