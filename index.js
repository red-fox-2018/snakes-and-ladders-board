function ladderBoard(num) {
result=[]

  for (var i = num-1; i >= 0 ; i--) {
    debugger;
    let row = []
    if(i%2!==0){
      for (var j = num ; j > 0 ; j--) {
        debugger;
        row.push((num*i)+j)
      }
    }else {
      for (var j = 1; j < num ; j++) {
        debugger;
        row.push((num*i)+j)
      }
    }
    result.push(row)
  }
return result
}

console.log(ladderBoard(8))
console.log('===================================');
console.log(ladderBoard(7))
