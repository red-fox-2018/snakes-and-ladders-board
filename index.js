const Table = require('cli-table');

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

    // cli table
    let colwidth = [];
    for (let i = 0; i < num; i++) {
        colwidth.push(5);
    }

    let table = new Table({
        colWidths: colwidth
    });

    for (let j = 0; j < board.length; j++) {
        table.push(
            board[j]
        );
    }

    console.log(table.toString());
}

generateBoard(8);
console.log()
generateBoard(10);
console.log()
generateBoard(15);