
const startGame = document.getElementById('start');
startGame.addEventListener ('click', StartNewGame)



function StartNewGame (){
    const wincon = [ '123', '456', '789', '147', '258', '369', '159', '357'];
    const board = ['','','','','','','','',''];
    const winner = "";
    for (x = 1; x <= 9; x++){
        if ( x % 2 == 1){
            getP1Entry(board);
        }
        else if ( x % 2 == 0){
            getP2Entry(board);
        }
        checkwin(board, wincon, winner);
        console.log(winner);
        if (winner != '') {
            console.log(winner);
            break;}
    }
}



function getP1Entry(board){
    let p1Entry = parseInt(prompt('Location (X):'));
    board[p1Entry-1] = 'X';
    console.log(board);
}

function getP2Entry(board){
    let p2Entry = parseInt(prompt('Location (O):'));
    board[p2Entry-1] = 'O';
    console.log(board);
}

function checkwin(board,wincon, winner){
    console.log(winner);
    let p1Picks = '';
    let p2Picks = '';
    for (y = 0; y < 9; y++){
        if (board[y] == 'X')
            p1Picks = p1Picks.concat(y+1)
        else if (board[y] == 'O')
            p2Picks = p2Picks.concat(y+1)
    }
    console.log(p1Picks)
    console.log(p2Picks)
    wincon.forEach(combo => {
        let cntr1 = 0;
        [...combo].forEach(letter => {
            if (p1Picks.includes(letter)){
                cntr1 ++;
                // console.log(combo + " " + letter + " " + cntr1)
                if (cntr1 == 3){
                    winnner = 'Player 1';
                    console.log("Player 1 won");
                }
            }
        })

        let cntr2 = 0;
        [...combo].forEach(letter => {
            if (p2Picks.includes(letter)){
                cntr2 ++;
                // console.log(combo + " " + letter + " " + cntr2)
                if (cntr2 == 3){
                    winnner = 'Player 2';
                    console.log("Player 2 won");
                }
            }
        })
   });
}


   