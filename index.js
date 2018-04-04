function generateBoard(num){
  let board = []
  let value = 1
  let rows=0
  for(let i = 0; i < num; i++){
    board.push([])
  }
  for(let i = board.length-1 ; i >=0; i--){
    for(let j = 0; j < num; j++){
      board[i].push(value)
      value++
    }

    if(rows % 2 !== 0){
      board[i].reverse()
    }
    rows++
  }
  return board
}
console.log(generateBoard(10));
console.log(generateBoard(15));
console.log(generateBoard(8));
