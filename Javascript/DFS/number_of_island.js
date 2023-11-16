function numIslands(grid) {
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  // 세로 길이
  const m = grid.length;
  // 가로 길이
  const n = grid[0].length;
  let count = 0;
  function DFS3(r, c) {
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] != "1") return;
    console.log(r, c);
    console.log(grid[r][c]);
    grid[r][c] = "0";
    console.log(grid[r][c]);
    for (let i = 0; i < 4; i++) {
      DFS3(r + dx[i], c + dy[i]);
    }
  }
  for (let j = 0; j < m; j++) {
    for (let k = 0; k < n; k++) {
      if (grid[j][k] != "1") continue;
      count++;
      DFS3(j, k);
    }
  }
  return count;
}
let a = numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
]);
console.log(a);
