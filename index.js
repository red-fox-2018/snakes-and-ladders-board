function generateBoard(side) {
  let output = [];
  let start = 1;

  for (let row = side-1; row >= 0; row--) {
    output[row] = [];
    // if (side % 2 === 0) {
      if ((row % 2 === 1 && side % 2 === 0) || (side % 2 === 1 && row % 2 === 0)) {
        for (col = 0; col < side; col++) {
          output[row][col] = start
          start++
        }
      }else {
        for (col = side-1; col >= 0; col--) {
          output[row][col] = start;
          start++
        }
      }
  }
  return output;
}

console.log(generateBoard(5));
console.log("========")
console.log(generateBoard(10));


