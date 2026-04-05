import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskOperation } from './task/task';

@Component({
  selector: 'app-root',
  imports: [TaskOperation],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('taskManager');
}
