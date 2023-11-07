class MyHashTable {
  // 길이를 명시하는 이유는 나중에 특정 상황에서 길이를 늘리고자 함
  // 해시 충돌에 대응하기 위함
  table = new Array(71);

  numItems = 0;
  // load factor 설정을 위해 아이템의 개수를 측정할 수 있는 변수 생성

  resize() {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hashStringToInt(key, newTable.length);
          if (newTable[idx]) {
            newTable[idx].push([key, value]);
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  }

  setItem(key, value) {
    this.numItems++;

    const loadFactor = this.numItems / this.table.length;
    if (loadFactor >= 0.7) {
      this.resize();
    }
    const idx = hashStringToInt(key, this.table.length);
    // 체이닝을 통해서 충돌 회피
    // 해당하는 bucket에 이미 있을 경우
    if (this.table[idx]) {
      // 배열 형태로 밀어주기 진행
      this.table[idx].push([key, value]);
    } else {
      // 없다면 배열 형태로 생성 진행
      this.table[idx] = [[key, value]];
    }
  }

  getItem(key) {
    const idx = hashStringToInt(key, this.table.length);
    if (!this.table[idx]) return null;

    // find 메서드를 사용하기 때문에 O(N)의 시간 복잡도가 걸린다.
    return this.table[idx].find((v) => v[0] === key)[1];
  }
}

const hashStringToInt = function (string, tableSize) {
  let hash = 17;
  for (let i = 0; i < string.length; i++) {
    hash = (13 * hash * string.charCodeAt(i)) % tableSize;
  }
  return hash;
};
