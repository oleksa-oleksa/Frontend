import { Injectable } from '@angular/core';
import { TaskItem } from './task-item.dto';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getAllTasks(): TaskItem[] {
    throw new Error("Not implemented yet")
  }
}
