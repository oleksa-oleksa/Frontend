import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  constructor(private route: ActivatedRoute) {}

  newTaskTitle: string = "";
  date: Date = new Date()

  ngOnInit(): void {
    var date: Date = new Date(this.route.snapshot.params['date']);
  }

  tasks: Task[] = [
    new Task("Call Katja"),
    new Task("Go to the Superfit Gym"),
    new Task("Visit those awesome playground with a child afterworks"),
    new Task("Try a new pizza from a small restaurant")
  ]

  add(taskNgForm: NgForm){
    //alert(newTask)

    if(taskNgForm.touched == false) {
      return;
    }
    
    if(taskNgForm.valid == false) {
      return;
    }
    
    this.tasks.push(new Task(this.newTaskTitle));
    //this.newTaskTitle = "";
    taskNgForm.reset({date: this.date})
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


