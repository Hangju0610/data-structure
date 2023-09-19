// Array를 통한 Stack 구현
const stack = [];

stack.push('dog');
stack.push('cat');
stack.push('horse');

console.log(stack); // [ 'dog', 'cat', 'horse' ]
const a = stack.pop();
console.log(a); // hores
console.log(stack); // [ 'dog', 'cat' ]

// peek - stack에 쌓인 제일 마지막 요소를 보여주는 메서드
stack[stack.length - 1]; // 'cat'

// Class를 통한 Stack 구현

class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }

  pop() {
    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }

  peek() {
    return this.storage[this.size];
  }
}

const classStack = new Stack();
classStack.push('hi');
classStack.push('hello');
classStack.push('안녕');

const b = classStack.pop();
console.log(b); // '안녕'
const c = classStack.peek();
console.log(c); // 'hello'

