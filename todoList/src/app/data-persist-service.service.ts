import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPersistServiceService {
  tasks:any = [
    {
      'name':'Müll entsorgen',
      'finished':false
    }
]


  constructor() { 
    // Localstorage already has Content
    if(localStorage.getItem('tasks')){
        // Load Content from LocalStorage
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }else{
      // LocalStorage is empty
      console.log(this.tasks);
    }
  }

  getTasks() {
    return this.tasks;
  }

  addTask(name:String){
    this.tasks.push({
      'name':name,
      'finished': false
    })
    this.persist();
    console.log("TESTSS");
  }

  finishTask(task){
    task.finished = true;
    this.persist;
  }

  persist(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
}
