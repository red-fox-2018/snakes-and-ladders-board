function generateBoard(num) {
    var result = []
    for(let row=num;row>0;row--){
        var nestedArr = []
        if(row%2==0){
            var start = row*num
            var end = start - num
            for(let col=start;col>end;col--){
                nestedArr.push(col)
            }
        }
        else if (row % 2 == 1 ) {
            var start = row*num          
            var end = start - num
            for (let col = end+1; col <= start; col++) {
                nestedArr.push(col)
            }
        }
        result.push(nestedArr)
    }
    return result
}
console.log(generateBoard(10))
console.log('==============================================')
console.log(generateBoard(15))
console.log('===============================================')
console.log(generateBoard(8))