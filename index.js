function snakeLadder(dimension){
    var array=[]
    var num=dimension*dimension
    for(var i=0; i<dimension; i++){
      array.push([])
      for(var j=0; j<dimension; j++){
        array[i].push(num--)    
      }
    }
    for(var k=0; k<array.length; k++){
      if(dimension%2===0){
        if(k%2!==0){
        array[k].reverse()
        }
      }
      else{
        if(k%2===0){
          array[k].reverse()
        }
      }
      
    }
    return array
  }
  console.log(snakeLadder(10))