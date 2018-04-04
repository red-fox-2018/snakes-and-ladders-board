
/*

@ Iswanul Umam - Red Fox
*/

let reverse = function (row) {
  let result = [];
  for (let i = row.length - 1; i >= 0; i--) {
    result.push(row[i]);
  }
  return result;
}

function generate(row) {
  let totalNumber = row * row;
  let board = [];
  // number
  for (let i = 0; i < row; i++) {
    if (i % 2 == 0) {
      let evenRow = [];
      for (let j = 0; j < row; j++) {
        evenRow.push(totalNumber);
        totalNumber--;
      }
      if (row % 2 == 0) {
        board.push(evenRow);
      } else {
        board.push(reverse(evenRow));
      }
    } else {
      let oddRow = [];
      for (let j = 0; j < row; j++) {
        oddRow.push(totalNumber);
        totalNumber--;
      }
      if (row % 2 == 0) {
        board.push(reverse(oddRow));
      } else {
        board.push(oddRow);
      }
    }
  }

  return board;
}


console.log(generate(8));
console.log(generate(10));
console.log(generate(15));