
import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoState } from './state/todo.state';
import { AddTodo, RemoveTodo, ToggleTodo, Todo } from './state/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'todo';
  @Select(TodoState.getTodos) todos$!: Observable<Todo[]>;

  newTodo: Todo = { id: 0, title: '', completed: false };

  constructor(private store: Store) {}

  ngOnInit(): void {}

  addTodo() {
    this.store.dispatch(new AddTodo({...this.newTodo, id: 0}));
    this.newTodo = { id: 0, title: '', completed: false };
  }

  removeTodo(id: number) {
    this.store.dispatch(new RemoveTodo(id));
  }

  toggleTodo(todo: Todo) {
    this.store.dispatch(new ToggleTodo({
      id: todo.id,
      completed: !todo.completed
    }));
  }
}
