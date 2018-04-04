function snakeLadders(num) {
  var board = []
  var count = num * num
  for (let row = 0; row < num; row++) {
    board[row] = []
    for (let col = 0; col < num; col++) {
      board[row].push(count)
      count--
    }
  }
  if (num % 2 === 0) {
    for (let i = 0; i < board.length; i++) {
      if (i % 2 !== 0) {
        board[i].reverse()
      }
    }
  } else {
    for (let i = 0; i < board.length; i++) {
      if (i % 2 === 0) {
        board[i].reverse()
      }
    }
  }
  return board;
}
console.log(snakeLadders(10));
