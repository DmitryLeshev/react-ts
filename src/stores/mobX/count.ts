import { makeAutoObservable } from "mobx";

class Count {
  value = 0;
  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.value = ++this.value;
  }

  decrement() {
    this.value = --this.value;
  }
}

export default new Count();
