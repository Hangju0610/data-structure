function Matrix(v) {
  // 자바스크립트에는 2차원 배열을 만들 때 a[0][0] 이런식으로는 만들 수 없다.
  // 따라서 2차원 배열을 만들 경우 이렇게 만들어야 한다.
  const a = Array.from(Array(10), () => new Array(10).fill(0));
  const visited = Array.from(Array(10).fill(0));
  a[1][2] = 1;
  a[1][3] = 1;
  a[3][4] = 1;
  a[2][1] = 1;
  a[3][1] = 1;
  a[4][1] = 1;
  console.log(visited);
  console.log(a);
}

Matrix(3);
