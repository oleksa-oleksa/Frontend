import { Injectable } from '@angular/core';
import { TaskItem } from './task-item.dto';
import { NewTask } from './new-task.dto';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private tasks: TaskItem[] = [
    new TaskItem("Call Katja"),
    new TaskItem("Go to the Superfit Gym"),
    new TaskItem("Visit those awesome playground with a child afterworks"),
    new TaskItem("Try a new pizza from a small restaurant")
  ]

  getAllTasks(): TaskItem[] {
    //throw new Error("Not implemented yet")
    return this.tasks;
  }

  addTask(newTask: NewTask) {
    this.tasks.push(new TaskItem(NewTask.title))

  }

  removeTask(existingTask: TaskItem) {
    
  }
}
