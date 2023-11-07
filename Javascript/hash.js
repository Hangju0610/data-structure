class MyHashTable {
  // 길이를 명시하는 이유는 나중에 특정 상황에서 길이를 늘리고자 함
  // 해시 충돌에 대응하기 위함
  table = new Array(100);
  // load factor 설정을 위해 아이템의 개수를 측정할 수 있는 변수 생성

  setItem(key, value) {
    const idx = hashStringToInt(key);
    this.table[idx] = value;
  }

  getItem(key) {
    const idx = hashStringToInt(key);
    return this.table[idx];
  }
}

const hashStringToInt = function (string, tableSize) {
  let hash = 17;
  for (let i = 0; i < string.length; i++) {
    hash = (13 * hash * string.charCodeAt(i)) % tableSize;
  }
  return hash;
};
