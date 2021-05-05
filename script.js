

const Player = (mark) => {
    let _mark = mark;
    
    return _mark;
}

const gameController = (() => {

    let playerX = Player("X");
    console.log(playerX);

    let playerO = Player("O");
    console.log(playerO);

    const cells = Array.from(document.querySelectorAll(".cell"));
    const board = document.getElementById("#board");
    const resetBoard = document.querySelector("#reset");
    const showResults = document.querySelector(".results");
    const playerXCard = document.getElementById("playerX");
    const playerOCard = document.getElementById("playerO");
    let boardArray = ['', '', '','','','','','',''];
    let circleTurn ;
    startGame();

    function startGame(){
        window.addEventListener("load", (event) => {
            playerXCard.classList.add("currentPlay");
        })
        circleTurn = true;
        cells.forEach(cell => {
            if(cell.textContent ===""){
                cell.addEventListener("click", handleClick, { once: true})
            }
        });
    }

    function handleClick (event){
        console.log("clicked")
        const cell = event.target
        const index = cells.indexOf(cell);
        const currentTurn = circleTurn ? playerX : playerO;

        //highlight DOM elememt
        if(currentTurn === playerX){
            playerXCard.style.borderColor = "red";
            playerXCard.classList.add("currentPlay");
            playerOCard.classList.remove("currentPlay");


        }else{
            playerOCard.style.borderColor = "red";
            playerOCard.classList.add("currentPlay");
            playerXCard.classList.remove("currentPlay");

        }
        placeMark(cell, currentTurn);
        boardArray[index] = cell.textContent;
        checkWin();
        swapTurns()
    }


    function placeMark(cell, currentTurn){
        cell.textContent = currentTurn;
    }
    function swapTurns(){
        circleTurn = !circleTurn;
    }

    function checkWin(){

        if ((boardArray[0] !== "") && (boardArray[0] == boardArray[1]) && boardArray[0] == boardArray[2]){
            let winner = boardArray[0];
            displayWinningResult(winner);
        }if ((boardArray[3] !=="") && (boardArray[3] == boardArray[4]) && boardArray[3] == boardArray[5]){
            let winner = boardArray[3];
            displayWinningResult(winner);
        }if ((boardArray[6] !=="") && (boardArray[6] == boardArray[7]) && boardArray[6] == boardArray[8]){
            let winner = boardArray[6];
            displayWinningResult(winner);
        }if ((boardArray[0] !=="") && (boardArray[0] == boardArray[3]) && boardArray[0] == boardArray[6]){
            let winner = boardArray[0];
            displayWinningResult(winner);
        }if ((boardArray[1] !=="") && (boardArray[1] == boardArray[4]) && boardArray[1] == boardArray[7]){
            let winner = boardArray[1];
            displayWinningResult(winner);
        }if ((boardArray[2] !=="") && (boardArray[2] == boardArray[5]) && boardArray[2] == boardArray[8]){
            let winner = boardArray[2];
            displayWinningResult(winner);
        }if ((boardArray[0] !=="") && (boardArray[0] == boardArray[4]) && boardArray[0] == boardArray[8]){ 
            displayWinningResult(winner);
        }if ((boardArray[2] !=="") && (boardArray[2] == boardArray[4]) && boardArray[2] == boardArray[6]){
            let winner = boardArray[2];
            displayWinningResult(winner);
        }else if (!boardArray.includes("")){
            tieResults();
        }

    }

    function displayWinningResult(winner){
        showResults.textContent = `${winner} WINS`;

    }
    function tieResults() {
        showResults.textContent = "It's a TIE";
        playerXCard.classList.remove("currentPlay");
        playerOCard.classList.remove("currentPlay");
    }

    resetBoard.addEventListener("click", event => {
        console.log("clicked")
        cells.forEach(cell =>{
            cell.textContent = "";
        })
        boardArray = ['', '', '','','','','','',''];
        showResults.style.display = "none";
        playerXCard.classList.add("currentPlay");
        playerOCard.classList.remove("currentPlay");
        event.preventDefault();
    });
})();






