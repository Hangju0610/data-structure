import { Queue } from "./queue";

function BFS(graph: number[][], start: number, visited: boolean[]) {
  const queue = new Queue();
  queue.enQueue(start);
  visited[start] = true;

  while (queue.size()) {
    const v = queue.deQueue();
    console.log(v);

    for (const node of graph[v]) {
      if (!visited[node]) {
        queue.enQueue(node);
        visited[node] = true;
      }
    }
  }
}
const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
const visited = Array(6).fill(false);
BFS(graph, 0, visited);
