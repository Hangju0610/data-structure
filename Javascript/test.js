class minHeap {
  constructor(value) {
    this.heap = value;
  }

  first() {
    return this.heap[0];
  }

  show() {
    return this.heap;
  }

  pop() {
    if (this.heap.length === 0) return null;
    // 첫번째 노드 확인
    const root = this.heap[0];
    // 마지막 노드 pop
    const lastNode = this.heap.pop();

    if (this.heap.length !== 1) {
      this.heap[0] = lastNode;
      this.bubbleDown();
    }
    return root;
  }
  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    // index 확인
    let index = this.heap.length - 1;
    while (true) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }
  bubbleDown() {
    let index = 0;
    let length = this.heap.length;
    // 반복문 돌리기
    while (true) {
      let smallest = index;
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      // 왼쪽 자식이 부모 노드보다 작은 경우
      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[smallest]
      ) {
        [this.heap[leftChildIndex], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[leftChildIndex],
        ];
        smallest = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[smallest]
      ) {
        [this.heap[rightChildIndex], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[rightChildIndex],
        ];
        smallest = rightChildIndex;
      }
      if (smallest === index) break;
      index = smallest;
    }
  }

  size() {
    return this.heap.length;
  }
}

function solution(scoville, K) {
  scoville.sort((a, b) => a - b);
  const heap = new minHeap(scoville);
  let index = 0;
  while (K > heap.first() || heap.size() > 1) {
    index++;
    heap.push(heap.pop() + heap.pop() * 2);
    console.log(heap.show());
  }
  return index >= K ? index : -1;
}

solution([1, 2, 3, 9, 10, 12], 7);
