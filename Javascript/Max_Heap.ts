class MaxHeap {
  private heap: number[];
  constructor() {
    this.heap = [];
  }
  push(value: number) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    const root = this.heap[0];
    // 마지막 노드를 pop 한 것을 root로 올리기 위해 저장.
    // 타입 단언 사용
    const lastNode: number = this.heap.pop() as number;

    if (this.heap.length !== 0) {
      this.heap[0] = lastNode;
      this.heapifyDown();
    }

    return root;
  }
  // 최상단 노드 확인
  findRoot(): number | null {
    if (this.heap.length === 0) return null;
    return this.heap[0];
  }

  show(): number[] {
    return this.heap;
  }
  size(): number {
    return this.heap.length;
  }

  heapifyUp(): void {
    // 8번째라면, 8번째로 투입, 그러나 인덱스는 7이기에 마이너스
    let index = this.heap.length - 1;
    while (index > 0) {
      // index = 7 이라면 3.5,
      // index = 8 이라면 4이므로
      // index - 1을 해준다.
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] >= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }
  heapifyDown(): void {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let smallest = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      // 왼쪽 자식 노드가 부모 노드보다 클 경우
      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] > this.heap[smallest]
      ) {
        smallest = leftChildIndex;
      }
      // 오른쪽 자식 노드가 부모 노드보다 클 경우
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] > this.heap[smallest]
      ) {
        smallest = rightChildIndex;
      }
      // 두 조건을 모두 통과한 경우
      // smallest가 index와 동일한 상태이므로
      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}

const makeHeap = new MaxHeap();
makeHeap.push(1);
makeHeap.push(9);
makeHeap.push(13);
makeHeap.push(8);
makeHeap.push(5);
console.log(makeHeap.show());
