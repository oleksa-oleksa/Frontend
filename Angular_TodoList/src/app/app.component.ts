import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_TodoList';
  tasks = [
    "Call Katja",
    "Go to the Superfit Gym",
    "Visit those awesome playground with a child afterworks",
    "Try a new pizza from a small restaurant"
  ]
}
