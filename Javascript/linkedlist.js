// 단일 연결 리스트 Node 제작 class
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // head에 데이터 입력
  pushFirst(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  // 마지막에 데이터 입력
  pushEnd(data) {
    let newNode = new Node(data);
    // 노드가 없을 경우 첫 노드로 입력
    if (!this.head) {
      this.head = newNode;
      this.size++;
      return;
    }
    // 마지막을 찾기 위해 반복문 지정
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = newNode;
    this.size++;
  }
  // 특정 위치에 노드 추가하기
  insert(data, index = 0) {}
  // Node 개수 출력
  printNode() {
    return this.size;
  }
  // 특정 데이터를 가지고 있는 Node의 인덱스를 찾기
  findIndex(data) {
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

  // 인덱스를 찾는다
  // 만약 데이터가 없는 경우, -1을 출력하기
  // 노드가 없는 경우, -1을 출력한다.
}

const a = new LinkedList();
console.log(a);
a.pushFirst(3);
a.pushFirst(2);
a.pushEnd(1);
a.pushFirst(4);
console.log(a.printNode());
console.log(a.findIndex(1));
