import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  taskList : Task[]=[];

  addTask(taskRequest : Task){
    this.taskList.push(new Task(taskRequest.task_name,taskRequest.task_description,taskRequest.task_date))
  }

  getTasks(){
    return this.taskList;
  }
}
