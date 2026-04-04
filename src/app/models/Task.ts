
export class Task{

  task_name: string;
  task_description: string;
  task_date: string


  constructor(task_name: string, task_description: string, task_date: string) {
    this.task_name = task_name;
    this.task_description = task_description;
    this.task_date = task_date;
  }
}
