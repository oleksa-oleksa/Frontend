import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { NewTask } from './new-task.dto';
import { TaskItem } from './task-item.dto';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  constructor(private route: ActivatedRoute) {}

  taskService = new TaskService();
  tasks = this.taskService.getAllTasks()
  //newTaskTitle: string = "";
  newTask: NewTask = new NewTask();
  //date: Date = new Date()

  ngOnInit(): void {
    var strDate = this.route.snapshot.params['date'];
    this.newTask = new NewTask(this.newTask.title, new Date(strDate))
  }

  add(taskNgForm: NgForm){
    //alert(newTask)

    if(taskNgForm.touched == false) {
      return;
    }
    
    if(taskNgForm.valid == false) {
      return;
    }
    
    //this.newTaskTitle = "";
    this.taskService.addTask(this.newTask)
    taskNgForm.reset({date: this.newTask.date})
  }

  remove(existingTask: TaskItem) {
    var userConfirmed = confirm(`Are you sure you want to remove: \n ${existingTask.title}`)

    if (userConfirmed) {
      this.taskService.removeTask(existingTask)
    }
  }
}



