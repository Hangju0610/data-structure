export class Queue {
  private store;
  private front: number;
  private rear: number;

  constructor() {
    this.store = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    if (this.store[this.rear] === undefined) {
      return null;
    } else {
      return this.rear - this.front + 1;
    }
  }
  enQueue(value) {
    if (this.size() === null) {
      this.store["0"] = value;
    } else {
      this.rear += 1;
      this.store[this.rear] = value;
    }
  }

  deQueue() {
    let temp;
    if (this.front === this.rear) {
      temp = this.store[this.front];
      delete this.store[this.front];
      this.front = 0;
      this.rear = 0;
      return temp;
    } else {
      temp = this.store[this.front];
      delete this.store[this.front];
      this.front++;
      return temp;
    }
  }
}
