// 단일 연결 리스트 Node 제작 class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
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

  // head에 있는 데이터 삭제
  deleteFirst() {
    this.head = this.head.next;
    this.size--;
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
  deleteEnd() {
    if (this.size === 1) {
      this.head = null;
      this.size--;
    }
    let current = this.head;
    let previous;
    while (current.next === null) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    this.size--;
  }

  // 특정 위치에 노드 추가하기
  insertAt(data, index = 0) {
    // 만약 index 값이 size보다 크다면
    if (index > this.size)
      return console.log("총 노드보다 큰 값을 입력했습니다.");

    // 매개변수 index와 내가 센 idx가 같을 때 삽입하는 용도로 사용
    let idx = 0;
    // 특정 위치에 노드를 추가하려면 먼저
    // 그 전 노드와 삽입할 노드 데이터, 그리고 그 후 데이터가 필요하다.
    let current = this.head;
    let previous;
    let newNode = new Node(data);
    // 입력값까지 idx가 도달 할 수 있도록 반복문 진행
    while (idx < index) {
      previous = current;
      current = current.next;
      idx++;
    }
    // idx == index와 같아졌다면
    // 새로 생성한 newNode의 next를 current로 넣어준다
    newNode.next = current;
    // 그 전 노드의 next를 새로운 newNode로 설정한다
    previous.next = newNode;
    this.size++;
  }

  // 특정 위치에 있는 노드 제거하기
  deleteAt(index) {
    // 만약 index 값이 size보다 크다면
    if (index > this.size)
      return console.log("총 노드보다 큰 값을 입력했습니다.");

    // 매개변수 index와 내가 센 idx가 같을 때 삽입하는 용도로 사용
    let idx = 0;
    // 특정 위치에 노드를 제거하려면 먼저
    // 그 전과 그 후의 데이터가 필요하다.
    let current = this.head;
    let previous;
    // 입력값까지 idx가 도달 할 수 있도록 반복문 진행
    while (idx < index) {
      previous = current;
      current = current.next;
      idx++;
    }
    previous.next = current.next;
    this.size--;
  }

  // Node 개수 출력
  printNode() {
    return this.size;
  }

  // 인덱스를 통한 찾기
  find(index) {
    if (this.size === 0) return null;
    if (index > this.size) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.data;
  }

  // 특정 데이터를 가지고 있는 Node의 인덱스를 찾기
  findIndex(data) {
    // 인덱스를 찾는다
    // 만약 데이터가 없는 경우, -1을 출력하기
    // 노드가 없는 경우, -1을 출력한다.
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

const a = new LinkedList();
console.log(a);
a.pushEnd(1);
a.pushEnd(2);
a.pushEnd(3);
a.insertAt(4, 2);
console.log(a.printNode());
console.log(a.findIndex(4));
console.log(a.find(2));
a.deleteAt(2);
console.log(a.find(2));
