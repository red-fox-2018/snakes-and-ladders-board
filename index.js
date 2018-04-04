function generateBoard(num) {
  var result = [];
  var angka = num * num;
  var mulai = 1;



  for (var i = num - 1; i >= 0; i--) {
    var arr = [];
    if (i % 2 === 0) {
      for (var j = 1; j <= num; j++) {
        arr.push(j + (num * i));
      }
    } else {
      for (var k = num; k > 0; k--) {
        arr.push(k + (num * i));
      }
    }
    result.push(arr);

  }

  return result;
}

console.log(generateBoard(10));
