export class Sort {
  private arr: number[];
  constructor(arr: number[]) {
    this.arr = arr;
  }

  bubbleSort(): number[] {
    const startTime = Date.now();
    // 최대값을 구하는 알고리즘을 arr 크기 - 1 만큼 반복한다.
    const iters = this.arr.length - 1;
    for (let i = 0; i < iters; i++) {
      // 이미 구한 최대값은 범위에서 제외한다.
      // 예를 들어 1회차에서는 1~4번 반복
      let wall = iters - i;
      //
      for (let j = 0; j < wall; j++) {
        if (this.arr[j] > this.arr[j + 1]) {
          [this.arr[j], this.arr[j + 1]] = [this.arr[j + 1], this.arr[j]];
        }
      }
    }
    const endTime = Date.now();
    console.log(endTime - startTime, "ms");
    return this.arr;
  }

  selectionSort(): number[] {
    const startTime = Date.now();
    const iters = this.arr.length - 1;
    for (let i = 0; i < iters; i++) {
      let minimum = i;
      for (let j = minimum; j < this.arr.length; j++) {
        if (this.arr[j] < this.arr[minimum]) {
          minimum = j;
        }
      }
      if (minimum != i) {
        [this.arr[minimum], this.arr[i]] = [this.arr[i], this.arr[minimum]];
      }
    }
    const endTime = Date.now();
    console.log(endTime - startTime, "ms");
    return this.arr;
  }

  insertionSort1(): number[] {
    const startTime = Date.now();
    // 0번째 요소는 이미 정렬되어 있으니, 1번째 ~ Array.length - 1 번째를 정렬하면 된다.
    for (let cur = 1; cur < this.arr.length; cur++) {
      // 비교 지점이 cur-1 ~ 0(=cur - cur)까지 내려간다.
      for (let delta = 1; delta < cur + 1; delta++) {
        let cmp = cur - delta;
        if (this.arr[cmp] > this.arr[cmp + 1]) {
          [this.arr[cmp], this.arr[cmp + 1]] = [
            this.arr[cmp + 1],
            this.arr[cmp],
          ];
        } else {
          break;
        }
      }
    }
    const endTime = Date.now();
    console.log(endTime - startTime, "ms");
    return this.arr;
  }

  insertionSort2(): number[] {
    const startTime = Date.now();

    for (let idx = 1; idx < this.arr.length; idx++) {
      let val = this.arr[idx];
      let cmp = idx - 1;
      while (this.arr[cmp] > val && cmp >= 0) {
        this.arr[cmp + 1] = this.arr[cmp];
        cmp -= 1;
      }
      this.arr[cmp + 1] = val;
    }
    const endTime = Date.now();
    console.log(endTime - startTime, "ms");
    return this.arr;
  }

  quicksort(start: number, end: number): number[] {
    const startTime = Date.now();
    const answer = this.quicksortMethod(this.arr, start, end);
    const endTime = Date.now();
    console.log(endTime - startTime, "ms");
    return answer as number[];
  }

  private partition(part: number[], start: number, end: number): number {
    let pivot = part[end];
    let i = start - 1;
    for (let j = start; j < end; j++) {
      if (part[j] <= pivot) {
        i += 1;
        [part[i], part[j]] = [part[j], part[i]];
      }
    }
    [part[i + 1], part[end]] = [part[end], part[i + 1]];
    return i + 1;
  }

  private quicksortMethod(
    arr: number[],
    start: number,
    end: number
  ): number[] | null {
    if (start >= end) {
      return null;
    }
    let p = this.partition(arr, start, end);
    this.quicksortMethod(arr, start, p - 1);
    this.quicksortMethod(arr, p + 1, end);
    return arr;
  }
}

const newArray = randomArray(10000, 10000);
// const bubble = new Sort(newArray);
// const select = new Sort(newArray);
// const insert1 = new Sort(newArray);
// const insert2 = new Sort(newArray);
const quick = new Sort(newArray);
// insert2.insertionSort2();
// insert1.insertionSort1();
// bubble.bubbleSort();
// select.selectionSort();
const quickResult = quick.quicksort(0, 10000);

/**
 * 랜덤 Array 함수
 * @param {number} idxSize Array의 크기 지정
 * @param {number} range Array에 들어갈 내용의 범위 지정
 * @returns {number[]} 배열 반환
 */
function randomArray(idxSize: number, range: number): number[] {
  const indexs: number[] = new Array();
  for (let i = 0; i < idxSize; i++) {
    let temp = Math.round(Math.random() * range);
    indexs.push(temp);
  }
  return indexs;
}
