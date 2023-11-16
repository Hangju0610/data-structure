"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var queue_1 = require("./queue");
function BFS(graph, start, visited) {
    var queue = new queue_1.Queue();
    queue.enQueue(start);
    visited[start] = true;
    while (queue.size()) {
        var v = queue.deQueue();
        console.log(v);
        for (var _i = 0, _a = graph[v]; _i < _a.length; _i++) {
            var node = _a[_i];
            if (!visited[node]) {
                queue.enQueue(node);
                visited[node] = true;
            }
        }
    }
}
var graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
var visited = Array(6).fill(false);
BFS(graph, 0, visited);
