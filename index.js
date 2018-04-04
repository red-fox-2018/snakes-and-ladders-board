var generateBoard = function(num){
    let Board = [];
    let newBoard = [];
    var total = num*num;
    for(var i=0;i<num;i++){
        Board.push([]);
        var max = total - (num*i)
        var min = (max-num)+1;
        if(i%2 === 0 && num%2 ===0){
            for(let j=max;j>=min;j--){
                Board[i].push(j);
            }
        }
        else{
            console.log('masuk')
            for(let j=min;j<=max;j++){
                Board[i].push(j);
            }
        }
    }
    return Board;
}

var SnakeLeddersBoard = function(num){
    let Field = generateBoard(num);
    return Field;
}
console.log(SnakeLeddersBoard(6))