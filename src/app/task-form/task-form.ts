import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task, TaskService } from '../../services/task-service';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
})
export class TaskForm implements OnInit {
  taskForm!: FormGroup;
  //taskService = inject(TaskService);
  constructor(private fb: FormBuilder,private taskService:TaskService) {}

  ngOnInit() {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      completed: [false, Validators.required],
      date: [new Date(Date.now()), Validators.required],
    });
  }

  addTask() {
    const task : Task = this.taskForm.value;
    const taskId = this.taskService.addTask(task)
    if (taskId!=null) console.log('added successfully');
    else console.log('error');

  }
}
