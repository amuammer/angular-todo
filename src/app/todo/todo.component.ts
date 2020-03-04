import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  apiAdress = "http://localhost:3000/tasks";
  taskTitle = "";
  tasks = [  ];

  constructor(private http : HttpClient) {
    http.get(this.apiAdress).subscribe((data: any) => {
    this.tasks = data;
    });
  }

   add() {
     if (this.taskTitle) {
      this.http.post(this.apiAdress, {title: this.taskTitle, isDone: false })
      .subscribe((data: any) => {
        this.tasks.push(data);
        this.taskTitle = "";
        });
     } else {
       alert("Empty!");
     }
    }

    check(id, index) {
      const oldValue = this.tasks[index];
      this.http.put(this.apiAdress+`/${id}`, {title: oldValue.title, isDone: !oldValue.isDone })
      .subscribe((data: any) => {
        this.tasks[index] = data;
    });
  }

    delete(id, index) {
      this.http.delete(this.apiAdress+`/${id}`)
      .subscribe((data: any) => {
        // if deleted successfully
          this.tasks.splice(index,1);
        });
    }

  ngOnInit(): void {

  }

}
