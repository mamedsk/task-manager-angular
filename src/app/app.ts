import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Task],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('taskManager');
}
