export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export class AddTodo {
    static readonly type = '[TODO] Add';
    constructor(public payload: Todo) {}
}
  
export class RemoveTodo {
    static readonly type = '[TODO] Remove';
    constructor(public payload: number) {}
}
  
export class ToggleTodo {
    static readonly type = '[TODO] Toggle';
    constructor(public payload: { id: number, completed: boolean }) {}
}
