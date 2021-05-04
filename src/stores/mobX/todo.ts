import { makeAutoObservable } from "mobx";

class Todo {
  todos = [
    { id: 1, title: "title 1", completed: false },
    { id: 2, title: "title 2", completed: false },
    { id: 3, title: "title 3", completed: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: any) {
    this.todos.push(todo);
  }

  removeTodo(todo: any) {
    this.todos = this.todos.filter((t) => t !== todo);
  }

  completedTodo(todo: any) {
    todo.completed = !todo.completed;
  }
}

export default new Todo();
