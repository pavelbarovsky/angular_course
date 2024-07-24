import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Todo } from './models/todo.model';
import { AddTodo, RemoveTodo, ToggleTodo } from './models/todo.model';
import { Injectable } from '@angular/core';

interface TodoStateModel {
  todos: Todo[];
  nextId: number;
}

@State<TodoStateModel>({
  name: 'todos',
  defaults: {
    todos: [],
    nextId: 0
  }
})

@Injectable()
export class TodoState {
  
  @Selector()
  static getTodos(state: TodoStateModel) {
    return state.todos;
  }

  @Action(AddTodo)
  add(ctx: StateContext<TodoStateModel>, action: AddTodo) {
    const state = ctx.getState();
    const newTodo = { ...action.payload, id: state.nextId };
    ctx.patchState({
      todos: [...state.todos, newTodo],
      nextId: state.nextId + 1
    });
  }

  @Action(RemoveTodo)
  remove(ctx: StateContext<TodoStateModel>, action: RemoveTodo) {
    const state = ctx.getState();
    const updatedTodos = [];
    for (let todo of state.todos) {
      if (todo.id !== action.payload) {
        updatedTodos.push(todo);
      }
    }
    ctx.patchState({ todos: updatedTodos });
  }  

  @Action(ToggleTodo)
  toggle(ctx: StateContext<TodoStateModel>, action: ToggleTodo) {
    const state = ctx.getState();
    const todos = state.todos.map(todo => {
      if (todo.id === action.payload.id) {
        return { ...todo, completed: action.payload.completed };
      }
      return todo;
    });
    ctx.patchState({ todos });
  }
  
}
