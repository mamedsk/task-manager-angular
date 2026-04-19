import { Routes } from '@angular/router';
import { TaskForm } from './task-form/task-form';
import { TaskDetails } from './task-details/task-details';
import { TaskList } from './task-list/task-list';

export const routes: Routes = [
  {
    path:"",
    component:TaskList
  },
  {
    path:"add-task",
    component: TaskForm
  },
  {
    path: "task-details/:id",
    component: TaskDetails
  }
];
