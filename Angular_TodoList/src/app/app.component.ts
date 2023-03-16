import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_TodoList';
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
    var userConfirmed = confirm(`Are you sure you want to remove: \n ${existingTask}`)

    if (userConfirmed) {
      this.tasks = this.tasks.filter(task => task != existingTask);
    }
  }

  markAsDone(task: Task) {
    //alert(`The task: "`+ task + '"is done')
    task.isDone = true;
  }
}


class Task {
  constructor(public title: string) {

  }
  public isDone = false;
}