let gameActive = true;
let currentPlayer = "x";
let gameState = ["", "", "", "", "", "", "", "", "",];
const winningConditions =[
    [0, 1, 2]
    [3, 4, 5]
    [6, 7, 8]
    [0, 3, 6]
    [1, 4, 7]
    [2, 5, 8]
    [0, 4, 8]
    [2, 4, 6]
];
const statusDisplay =document.getElementById('status');

const winningMessage = function(){
    return currentPlayer +"'s Wins!";
}
const drawMessage =function(){
    return "Draw!";
}
const CurrentPlayerTurn = function(){
    return "It's" + currentPlayer +"'s turn";
}

document.querySelectorAll('.cell').forEach(function(cell) {
    cell.addEventListener('click', CellClick);
});
document.querySelector('.restart').addEventListener('click', RestartGame);

function CellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex =parseInt(clickedCell.getAttribute('data-cell-index'));
  if(gamesState[clickedCellIndex]  !=="" || !gameActive){
    return;
  } 
  CellPlayed(clickedCell, clickedCellIndex);
  ResultValidation(); 
}

function CellPlayed(clickedCell,clickedCellIndex){
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

statusDisplay.innerHTML = CurrentPlayerTurn();

function PlayerChange() {
    if(currentPlayer === "X"){
        currentPlayer = "O";
}else{
    currentPlayer = "X";
}
statusDisplay.innerHTML = CurrentPlayerTurn();
}
function ResultValidation() {
    let roundWon = false;
    for(let i =0;i <=7; i++) {
        const winCondition =winningConditions[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];
    if (a === '' || b === '' || c === ''){
        continue;
    }
    if (a === b && b === c) {

        roundWon = true;
        break;
    }
 }
}