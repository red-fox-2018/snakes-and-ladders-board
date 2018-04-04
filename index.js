function generateBoard(num) {
  var arrLuar = []
  var number = 1
  var mark = 0
  for(var i = 0; i < num; i++) {
    var arrDalam = []
    arrLuar.push(arrDalam)
  }
  for(var j = arrLuar.length-1; j >= 0; j--) {
    var temp = []
    if(mark % 2 === 0) {
      for(var k = 0; k < arrLuar.length; k++) {
        arrLuar[j].push(number++)
      }
    } else if(mark % 2 !== 0) {
      for(var l = 0; l < arrLuar.length; l++) {
        temp.push(number++)
      }
      for(var m = temp.length-1; m >= 0; m--) {
        arrLuar[j].push(temp[m])
      }
    }
    mark++
  }
  return arrLuar
}

console.log(generateBoard(10));
