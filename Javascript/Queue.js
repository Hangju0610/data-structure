// array를 통한 예시

const queue = [];

//enqueue - 순서대로 넣고
queue.push('seahorse');
queue.push('dolphin');
queue.push('whale shark');
queue; // ['seahorse','dolphin','whale shark']

//dequeue - 첫번째부터 꺼냄
const a = queue.shift(); //'seahorse'
queue; // ['dolphin','whale']

//class를 통한 구현
class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.storage[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
}

const queue2 = new Queue();

queue2.enqueue('seahorse');
queue2.enqueue('dolphin');
queue2.enqueue('whale shark');
queue2; // Queue { storage: { '0' : 'seahorse' , '1' : 'dolphin', '2' : 'whale shark' }, head: 0, tail: 3 }

queue2.dequeue(); //'seahorse'

queue2; // Queue { storage: { '1' : 'dolphin', '2' : 'whale shark' }, head: 1, tail: 3 }
