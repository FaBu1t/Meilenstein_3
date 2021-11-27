import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DataPersistServiceService } from '../data-persist-service.service';
import { AddPage } from '../modal/add/add.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  name:String ='';
  constructor(private dataService:DataPersistServiceService, private modalController:ModalController, private alertController:AlertController)
  {
    
  }

  async addTask()
  {
    const modal = await this.modalController.create({
      component: AddPage
    });
    return await modal.present();
    console.log(this.name);
  }

  getTasks(){
    return this.dataService.getTasks().filter((task) =>{
      return !task.finished;
    })
  }

  finishTask(task){
    this.dataService.finishTask(task);
  }

  removeTask(task){
    this.dataService.finishTask(task);
  }
}
