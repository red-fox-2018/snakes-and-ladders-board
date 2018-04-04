function sortingArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}
function generateBoard(side) {
  let num = side*side;
  let output = [];
  if (side % 2 === 0) {
    for (let row = 0; row < side; row++) {
      output[row] = [];
      for (let col = 0; col < side; col++) {
        output[row].push(num);
        num--;
      }
      if(row % 2 === 1) sortingArray(output[row])
    }
  }else {
    for (let row = 0; row < side; row++) {
      output[row] = [];
      for (let col = 0; col < side; col++) {
        output[row].push(num);
        num--;
      }
      if(row % 2 === 0) sortingArray(output[row])
    }
  }
  return output;
}

console.log(generateBoard(15));


