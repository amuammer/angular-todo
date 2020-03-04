import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  taskTitle = "";
  tasks = [  ];
   add() {
     if (this.taskTitle) {
     this.tasks.push( { id: this.tasks.length,  title: this.taskTitle, isDone: false });
     this.taskTitle = "";
     } else {
       alert("Empty!");
     }
    }
    check(id) {
      this.tasks[id].isDone = !this.tasks[id].isDone;
    }
    delete(id) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== id;
      })
    }

  constructor() { }

  ngOnInit(): void {
  }

}
