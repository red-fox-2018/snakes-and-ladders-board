function generateBoard(angka){
  var board = []
  var number = angka*angka
  for(let i=0; i<angka; i++){
    var arrBaris = []

    for(let j=0; j<angka; j++){
      arrBaris.push(number)
      number--
    }
    // console.log('baris ke:',i)
    // genap
    if(i%2 !== 1){
      // console.log('ini yang genap',arrBaris)
      board.push(arrBaris)
    }
    else {
      // console.log('ini yang ganjillll',arrBaris)
      let arrBarisReverse = []
      for(let k=arrBaris.length-1; k>=0; k--){
        arrBarisReverse.push(arrBaris[k])
      }
      // console.log(arrBarisReverse)
      board.push(arrBarisReverse)
    }

  }
  return board
}

console.log(generateBoard(10))
console.log('')
console.log(generateBoard(15))
console.log('')
console.log(generateBoard(8))
