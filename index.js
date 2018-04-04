function generateBoard(num) {
  var terbesar = num * num;
  var terkecil = terbesar - (num - 1);
  var arrHasil = [];
  for (var i = num; i > 0; i--) {
    debugger;
    var arr = [];
    if (i % 2 == 0) {
      for (var k = terbesar; k >= terkecil; k--) {
        arr.push(k)
      }
      terbesar -= num;
      terkecil -= num;
      arrHasil.push(arr)
    }else  if (i % 2 !== 0) {
      for (var j = terkecil; j <= terbesar; j++) {
        arr.push(j)
      }
      terbesar -= num;
      terkecil -= num;
      arrHasil.push(arr)
    }
  }
  return arrHasil
}

console.log(generateBoard(15))
