function generateBoard(input){
  var arrResult = [];
  var counter   = input*input;

  for(var i = 1; i <= input; i++){
    var arrTmp = [];
    if(input%2 === 0) {
      if(i%2 !== 0){
        for(var j = 1; j <= input; j++){
          arrTmp.push(counter);
          counter--;
        }
        counter = (counter+1) - input;
      } else {
        for(var j = 1; j <= input; j++){
          arrTmp.push(counter);
          counter++;
        }
        counter = (counter-1) - input;
      }
      arrResult.push(arrTmp);
    } else {
      if(i%2 !== 0){
        counter = (counter+1) - input;
        for(var j = 1; j <= input; j++){
          arrTmp.push(counter);
          counter++;
        }
      } else {
        counter = (counter-1) - input;
        for(var j = 1; j <= input; j++){
          arrTmp.push(counter);
          counter--;
        }
      }
      arrResult.push(arrTmp);
    }
  }
  return arrResult;
}

console.log(generateBoard(10));
