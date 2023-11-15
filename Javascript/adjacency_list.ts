// 정점의 개수
let max: number = 5;
// 인접 리스트를 객체로 만들기 위한 준비
let adjList = {};

// 정점의 갯수만큼 인접리스트에 키-값을 만든다. 값은 빈 배열로 생성한다.
for (let i = 0; i < max; i++) {
  adjList[i] = [];
}
// 정점간 간선 정보에 따라서, Loop을 사용해 위에 빈 배열을 만들었던 것에 값을 넣어준다.
// 이때 push로 넣으면 된다.