/*jshint esversion:6*/

//==========solution 1==========
function generateBoardSnackLadder(num) {
  let result = [];
  let total;
  for (let i = num; i > 0; i--) {
    result.push([]);
    if (i % 2 === 0) {
      for (let j = num; j > 0; j--) {
        total = (i - 1) * num;
        result[num - i].push(j + total);
      }
    } else {
      for (let k = 1; k <= num; k++) {
        total = (i - 1) * num;
        result[num - i].push(k + total);
      }
    }
  }
  return result;
}


//==========solution 2==========
function generateBoardSnackLadder(num) {
  let result = [];
  for (let i = num - 1; i >= 0; i--) {
    let row = [];
    if (i % 2 === 0) {
      for (let j = 1; j <= num; j++) {
        row.push((i * num) + j);
      }
    } else {
      for (let j = num; j >= 1; j--) {
        row.push((i * num) + j);
      }
    }
    result.push(row);
  }
  return result;
}


console.log(generateBoardSnackLadder(10));
