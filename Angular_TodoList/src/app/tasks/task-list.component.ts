import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { NewTask } from './new-task.dto';
import { TaskItem } from './task-irem.dto';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  constructor(private route: ActivatedRoute) {}

  //newTaskTitle: string = "";
  newTask: NewTask = new NewTask();
  //date: Date = new Date()

  ngOnInit(): void {
    var strDate = this.route.snapshot.params['date'];
    this.newTask = new NewTask(this.newTask.title, new Date(strDate))
  }

  tasks: TaskItem[] = [
    new TaskItem("Call Katja"),
    new TaskItem("Go to the Superfit Gym"),
    new TaskItem("Visit those awesome playground with a child afterworks"),
    new TaskItem("Try a new pizza from a small restaurant")
  ]

  add(taskNgForm: NgForm){
    //alert(newTask)

    if(taskNgForm.touched == false) {
      return;
    }
    
    if(taskNgForm.valid == false) {
      return;
    }
    
    this.tasks.push(new TaskItem(this.newTask.title));
    //this.newTaskTitle = "";
    taskNgForm.reset({date: this.newTask.date})
  }

  remove(existingTask: TaskItem) {
    var userConfirmed = confirm(`Are you sure you want to remove: \n ${existingTask.title}`)

    if (userConfirmed) {
    this.tasks = this.tasks.filter(task => task != existingTask);
    }
  }
}



