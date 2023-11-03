// 이중 연결 리스트 Class Node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    // 이중 연결 리스트이기 때문에 이전 값도 추가되어야 한다.
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    // 처음 만들었을 경우, head는 null을 넣어야 한다.
    this.head = null;
    // 마지막도 null을 해준다.
    this.tail = null;
    // 연결 리스트의 크기를 보기 위해 삽입
    this.length = 0;
  }
  pushFirst(data) {
    let newNode = new Node(data);
    let current = this.head;
    // 노드가 0인 경우 노드만 추가하고, head와 tail로 지정
    if (!current) {
      this.length++;
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    // 현재 head의 prev를 newNode로 지정
    current.prev = newNode;
    // 새로운 노드의 next를 current로 변경
    newNode.next = current;
    // 헤드 변경
    this.head = newNode;
    // length 추가
    this.length++;
  }
  pushLast(data) {
    let newNode = new Node(data);
    // current는 tail로 지정 (뒤에서 부터 삽입하기 위해)
    let current = this.tail;
    // 노드가 0인 경우 노드만 추가하고, head와 tail로 지정
    if (!current) {
      this.length++;
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    // 현재 head의 next를 newNode로 지정
    current.next = newNode;
    // newNode의 prev를 current로 지정
    newNode.prev = current;
    // tail로 newNode 지정
    this.tail = newNode;
    this.length++;
  }
  popFirst() {
    if (this.length === 0) return console.log("Node가 없습니다.");
    this.head = this.head.next;
    this.length--;
  }
  popLast() {
    if (this.length === 0) return console.log("Node가 없습니다.");
    this.tail = this.tail.prev;
    this.length--;
  }

  pushAt(data, index) {
    if (index > this.length)
      return console.log("총 Node보다 큰 값을 입력했습니다.");
    let idx = 0;
    let current = this.head;
    let previous;
    let newNode = new Node(data);
    while (idx < index) {
      // 이전 것을 먼저 현재 것으로 지정한다.
      previous = current;
      // 다음 것을 지정한다.
      current = current.next;
      idx++;
    }
    newNode.next = current;
    newNode.prev = previous;
    previous.next = newNode;
    current.prev = newNode;
    this.length++;
  }
  popAt(data, index) {
    if (index > this.length)
      return console.log("총 Node보다 큰 값을 입력했습니다.");
    let idx = 0;
    let current = this.head;
    let previous;
    while (idx < index) {
      previous = current;
      current = current.next;
      idx++;
    }
    previous.next = current.next;
    current.next.prev = previous;
    this.length--;
  }
  printNode() {
    return this.length;
  }
  find(index) {
    if (this.size === 0) return null;
    if (index > this.size) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.data;
  }
  findindex(data) {
    if (this.size === 0) return -1;
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }
}
