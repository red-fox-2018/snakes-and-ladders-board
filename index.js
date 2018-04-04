function generateBoard(row) {
  let totalLadder = Math.pow(row, 2);
  let board = [];
  for (var i = 0; i < row; i++) {
    board[i] = [];
    for (var j = 0; j < row; j++) {
      board[i][j] = totalLadder;
      totalLadder--;
    }
  }
  let firstNumOfLastBoard = board[board.length - 1][0];
  let startFrom = 0;
  if (firstNumOfLastBoard === 1) {
    startFrom = board.length - 2;
  } else {
    startFrom = board.length - 1;
  }
  for (var i = startFrom; i >= 0; i -= 2) {
    board[i] = reverseRow(board[i]);
  }
  return board;
}

function reverseRow(array) {
  let reversedArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversedArr.push(array[i]);
  }
  return reversedArr;
}

console.log(generateBoard(15));
