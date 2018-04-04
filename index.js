function generateBoard(board) {

    let result = []

    for (let i=board; i>=1; i--) {

        let temp = []

        if (i % 2 ==0) {
        for (let j=board; j>=1; j--) {

            temp.push((i*board)-board+j)
        }

        result.push(temp)
       } else {
        for (let j=1; j<=board; j++) {

            temp.push((i*board)-board+j)
        }

        result.push(temp)
       }
    } 

    console.log(result);
}

generateBoard(15)