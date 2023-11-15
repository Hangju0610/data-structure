function dfs(graph, start, visited) {
  // 스택 생성
  const stack = [];
  // 스택에 초기값을 push 진행
  stack.push(start);

  while (stack.length) {
    // 스택에 pop을 진행한다.
    let v = stack.pop();
    // 방문한 적이 없는 노드라면
    if (!visited[v]) {
      console.log(v);
      // visited를 true로 변경
      visited[v] = true;

      // 반복문 진행하여 push 진행
      for (let node of graph[v]) {
        if (!visited[node]) {
          stack.push(node);
        }
      }
    }
  }
}
const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
const visited = Array(7).fill(false);

dfs(graph, 0, visited);
// 0 4 3 2 5 1
