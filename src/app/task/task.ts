import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task implements OnInit{

  taskList :Task[]=[];

  constructor(private taskService : TaskService, private taskForm: FormGroup) {}
  ngOnInit(): void {
    this.taskForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      date: new FormControl('', [Validators.required])
    })
  }

  add() {
    this.taskService.addTask({
      task_name : this.taskForm.get('name')?.value,
      task_description :this.taskForm.get('description')?.value,
      task_date : this.taskForm.get('date')?.value,
    })
  }
  tasksList(){
    this.taskService.getTasks();
  }


}
