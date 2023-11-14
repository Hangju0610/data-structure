class MinHeap {
  public heap: number[];
  constructor() {
    this.heap = [];
  }

  // 부모 인덱스, 자식 인덱스 구하는 메소드
  getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }
  getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }
  getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }

  swap(idx_1: number, idx_2: number): number[] {
    [this.heap[idx_1], this.heap[idx_2]] = [this.heap[idx_2], this.heap[idx_1]];
    return this.heap;
  }
  size(): number {
    return this.heap.length;
  }

  // 최소 값 추출 메서드
  pop(): number | null {
    // 배열에 아무것도 없다면 null을 return 진행
    if (this.heap.length === 0) return null;
    // 최소값 확인
    const root: number = this.heap[0];
    // 마지막 값 추출
    const lastNode: number = this.heap.pop() as number;
    // pop 진행 후 배열 길이가 1 이상이라면
    if (this.heap.length !== 0) {
      // 마지막 노드를 최상단 노드로 이동
      this.heap[0] = lastNode;
      // Down 정렬 진행
      this.bubbleDown();
    }
    // root 값 반환 진행
    return root;
  }

  // 값 넣는 인덱스
  push(value: number): void {
    this.heap.push(value);
    this.bubbleUp();
  }

  //Down 정렬 진행
  bubbleDown(): void {
    let index = 0;
    const lastIndex = this.size() - 1;

    while (true) {
      let smallest = index;
      let leftChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);
      if (
        (leftChildIndex < lastIndex &&
          this.heap[leftChildIndex] < this.heap[smallest]) ||
        (rightChildIndex < lastIndex &&
          this.heap[rightChildIndex] < this.heap[smallest])
      ) {
        if (
          this.heap[rightChildIndex] < this.heap[leftChildIndex] &&
          rightChildIndex < lastIndex
        ) {
          this.swap(rightChildIndex, smallest);
          smallest = rightChildIndex;
        } else {
          this.swap(leftChildIndex, smallest);
          smallest = leftChildIndex;
        }
      }
    }
  }

  // up 정렬 진행
  bubbleUp(): void {
    let childIndex = this.size() - 1;
    let parentIndex = this.getParentIndex(childIndex);
    while (this.heap[childIndex] < this.heap[parentIndex]) {
      this.swap(childIndex, parentIndex);
      childIndex = parentIndex;
      parentIndex = this.getParentIndex(childIndex);
    }
  }
}
