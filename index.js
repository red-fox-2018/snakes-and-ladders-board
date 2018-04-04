function generateBoard(dimensi){
  let result = []
  let steps = Math.pow(dimensi,2)
  if (dimensi % 2 === 0) {
    for (var i = 0; i < dimensi; i++) {
      result.push([])
      if (i % 2 === 0) {
        for (var j = 0; j < dimensi; j++) {
          result[i].push(steps)
          steps--
        }
      } else {
          steps = steps - dimensi + 1
          for (var k = 0; k < dimensi; k++) {
            result[i].push(steps)
            steps++
          }
          steps -= dimensi + 1
        }
      }
    } else {
    for (var i = 0; i < dimensi; i++) {
      result.push([])
      if (i % 2 !== 0) {
        for (var j = 0; j < dimensi; j++) {
          result[i].push(steps)
          steps--
        }
      } else {
          steps = steps - dimensi + 1
          for (var k = 0; k < dimensi; k++) {
            result[i].push(steps)
            steps++
          }
          steps -= dimensi + 1
        }
      }
    }
    return result
  }
console.log(generateBoard(15));
