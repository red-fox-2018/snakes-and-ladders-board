function generateBoard(num) {
    let board = [];
    let total = num * num;

    for (let i = 0; i < num; i++) {
        let temp = [];
        total -= num;
        if (num % 2 === 0) {
            if (i % 2 === 0) {
                for (let j = num; j > 0; j--) {
                    temp.push(j + total);
                }
            } else {
                for (let j = 1; j <= num; j++) {
                    temp.push(j + total);
                }
            }
        } else {
            if (i % 2 !== 0) {
                for (let j = num; j > 0; j--) {
                    temp.push(j + total);
                }
            } else {
                for (let j = 1; j <= num; j++) {
                    temp.push(j + total);
                }
            }
        }

        board.push(temp);
    }

    return board;
}

console.log(generateBoard(8));
console.log()
console.log(generateBoard(10));
console.log()
console.log(generateBoard(15));