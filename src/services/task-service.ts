import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  private tasksSignal  = signal([
    {
      id: 1,
      title: "Learn something",
      description: "Start from scratch",
      completed : false,
      createdAt: new Date(Date.now()),
    },
    {
      id: 2,
      title: "Learn Java",
      description: "DS and algorithms ",
      completed : true,
      createdAt: new Date(Date.now()),
    }
  ])

  tasks = this.tasksSignal.asReadonly();

  getTask(id:number){
    return this.tasks()
      .find(task => task.id == id);
  }
  addTask(task:Task): number {
    //here be careful and dont forget to use brackets because tasks is a signal too
    const taskNumber = this.tasks().length;
    const newTask = {
      id : taskNumber+1,
      title : task.title,
      description:task.description,
      createdAt : task.createdAt,
      completed: task.completed
    }
    this.tasksSignal.update(tasks =>[
      ...tasks,
      newTask
    ]);
    return newTask.id;
  }
}

export interface Task{
  id: number;
  title: string;
  description: string ;
  completed : boolean;
  createdAt: Date;
}
