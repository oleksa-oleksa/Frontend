import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {
    
  }

  tasks: Task[] = [
    new Task("Call Katja"),
    new Task("Go to the Superfit Gym"),
    new Task("Visit those awesome playground with a child afterworks"),
    new Task("Try a new pizza from a small restaurant")
  ]

  add(newTask: string){
    //alert(newTask)
    this.tasks.push(new Task(newTask))
  }

  remove(existingTask: Task) {
    var userConfirmed = confirm(`Are you sure you want to remove: \n ${existingTask.title}`)

    if (userConfirmed) {
    this.tasks = this.tasks.filter(task => task != existingTask);
    }
  }
}


class Task {
  constructor(public title: string) {

  }
  public isDone = false;

  toggleIsDone() {
    //alert(`The task: "`+ task + '"is done')
    this.isDone = !this.isDone;
  }
}


