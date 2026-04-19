import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  imports: [DatePipe, RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  taskService = inject(TaskService);
}
