const a = [0, 1, 2];
const b = [0, 1, 2];

b[2] = 3;
console.log(b);
if (a == b) {
  console.log("a와 b는 같습니다.");
} else {
  console.log("a와 b의 주소값이 다릅니다.");
}
