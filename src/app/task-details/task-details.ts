import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../services/task-service';
import { DatePipe, Location } from '@angular/common';

@Component({
  selector: 'app-task-details',
  imports: [DatePipe],
  templateUrl: './task-details.html',
  styleUrl: './task-details.scss',
})
export class TaskDetails implements OnInit {
  route = inject(Router);
  task = signal<Task |null>(null);
  location= inject(Location);
  ngOnInit(): void {
    //using history as the old method not preferred anymore
    //im using this method i think it is not necessary to call the server
    // every time u want to display the details of the task while you have it
    // already so we want to reduce the number of call
    const data= history.state?.task
    if (data!=null) this.task.set(data);
    //console.log(this.task()); to display the result just for checking
  }

  goBack() {
    console.log('hello');
    this.location.back();
  }
}
