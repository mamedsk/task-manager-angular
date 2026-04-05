import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task-service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../models/Task';

@Component({
  selector: 'app-task',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class TaskOperation implements OnInit {
  taskList: Task[] = [];
  taskForm !: FormGroup;

  constructor(
    private taskService: TaskService,

  ) {}
  ngOnInit(): void {
    this.tasksList();
    this.taskForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      date: new FormControl('', [Validators.required]),
    });
  }

  add() {
    this.taskService.addTask({
      task_name: this.taskForm.get('name')?.value,
      task_description: this.taskForm.get('description')?.value,
      task_date: this.taskForm.get('date')?.value,
    });
  }
  tasksList() {
    this.taskList= this.taskService.getTasks();
  }

}
