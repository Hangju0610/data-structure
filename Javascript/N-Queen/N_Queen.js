function NQueen(n) {
    // 통과한 개수
    let count = 0;
    // 답을 넣기 위한 기능
    let answer = [];
    // DFS 구현
    const dfs = function (board, row) {
        // row의 인덱스가 n-1까지 도달한 경우
        if (row === n - 1) {
            count++;
            // 스프레드 문법을 쓴 이유는
            // board 자체를 넣는 경우에는, board 내부의 주소 값이 계속 변하기 때문에 답안이 틀려진다.
            answer.push([...board]);
        }
        else {
            // col을 n-1개까지 반복하면서 대입한다.
            for (let i = 0; i < n; i++) {
                board[row + 1] = i;
                // 만약 isValid 함수가 True라면 DFS를 다시 진행
                if (isValid(board, row + 1))
                    dfs(board, row + 1);
            }
        }
    };
    // Backtracking 메서드
    const isValid = function (board, row) {
        for (let i = 0; i < row; i++) {
            if (
            // 열이 같은 경우 탈락
            board[i] === board[row] ||
                // 대각선인 경우 탈락
                Math.abs(board[i] - board[row]) === Math.abs(i - row)) {
                return false;
            }
        }
        return true;
    };
    for (let i = 0; i < n; i++) {
        // 새로운 board 생성
        const board = new Array(n).fill(-1);
        // 첫번째 row의 column을 선택
        board[0] = i;
        dfs(board, 0);
    }
    return { count, answer };
}
let { count, answer } = NQueen(4);
console.log(count, answer);
