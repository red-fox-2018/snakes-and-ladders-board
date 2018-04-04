function generateBoard(num) {

  if (num % 2 == 0) {

    return genap(num);

  } else {

    return ganjil(num);

  }

}

function ganjil(num) {

  let total = num * num
  const board = []
  let row = []

  for (var i = Math.ceil(num/2); i > 0; i--) {

    for (var k = (total-num)+1; k <= total; k++) {

      row.push(k)

      if (row.length == num) {

        board.push(row)
        row = []
        total = k - num
        break
      }

    }

    for (var j = total; j > total-num; j--) {

      row.push(j)

      if (row.length == num) {

        board.push(row)
        row = []
        total -= num
        break

      }

    }

  }

  return board.slice(0,num);

}

function genap(num) {

  let total = num * num
  const board = []
  let row = []

  for (var i = num/2; i > 0; i--) {

    for (var j = total; j > 0; j--) {

      row.push(j)

      if (row.length == num) {

        board.push(row)
        row = []
        break

      }

    }

    for (var k = total-(num*2)+1; k < total; k++) {

      row.push(k)

      if (row.length == num) {

        board.push(row)
        row = []
        total = k - num
        break

      }

    }

  }

  return board;

}

console.log(generateBoard(15));
