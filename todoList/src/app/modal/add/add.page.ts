import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataPersistServiceService } from 'src/app/data-persist-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  name:String= '';

  constructor(private dataService:DataPersistServiceService, private modalController:ModalController) { }

  addTask(){
    if(this.name != ''){
      this.dataService.addTask(this.name);
    }
    this.dismissModal();
  }

  dismissModal(){
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
