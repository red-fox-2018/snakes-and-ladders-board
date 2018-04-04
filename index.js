function generateBoard(board){
    let total = board*board
    let result = []
    for(let i=0;i<board;i++){
        let tampung = []
        if(i%2==0 && board%2==0){
            let end = total-(board*i)
            let start = end-board+1
            for(let l=end;l>=start;l--){
                tampung.push(l)
            }
        }else{
            let end = total-(board*i)
            let start = end-board+1
            for(let m=start;m<=end;m++){
                tampung.push(m)
            }
        }
        result.push(tampung)  
    }
    return result
}

console.log(generateBoard(8))