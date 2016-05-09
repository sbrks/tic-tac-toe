window.onload = start;
var board = document.getElementsByTagName("td");
var turnMessage = document.querySelector(".turnMessage");
var counter = 1;
var winCounter = 0;
var OMoves = [];
var XMoves = [];
var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

function start () {
	addXOListener();
	addResetListener();
	document.querySelector(".turnMessage").textContent = "Let's Play! It is X's turn.";
}

function addXOListener(){
  for (var i = board.length - 1; i >= 0; i--) {
    board[i].addEventListener("click", addXorO);
  }
}



function addXorO(event){
  if (event.target.innerHTML.length === 0){
    if (counter % 2 === 0) {
      OMoves.push(parseInt(event.target.getAttribute("data-num")));
      event.target.innerHTML = "O";
      event.target.setAttribute("class","O");
      counter ++;
      checkForWin(OMoves, "O");
      document.querySelector(".turnMessage").textContent = "It is X's turn";
    }
    else {
      XMoves.push(parseInt(event.target.getAttribute("data-num")));
      event.target.innerHTML = "X";
      event.target.setAttribute("class","X");
      counter++;
      checkForWin(XMoves, "X");
      document.querySelector(".turnMessage").textContent = "It is O's turn";

    }
  // if the counter is greater than or equal to 10, the game is a draw!
  if (counter >= 10){
    //turnMessage.innerHTML = "Game Over!";
    confirm("It's a draw!");
    document.querySelector(".turnMessage").textContent = "It's a draw!";
    if(conf){
      resetBoard();
    }
  }
 }
}

/*
function checkWin () {
		if  ((a1==a2 && a1==a3 && (a1=="x"))|| //first row
		(b1==b2 && b2==b3 && (b1=="x")) || //second row
		(c1==c2 && c2==c3 && (c1=="x")) || //third row
		(a1==b1 && a1==c1 && (a1=="x")) || //first column
		(a2==b2 && a2==c2 && (a2=="x")) || //second column
		(a3==b3 && a3==c3 && (a3=="x")) || //third column
		(a1==b2 && a1==c3 && (a1=="x")) || //first diag
		(a3==b2 && a3==c1 && (a3=="x")) //second diag
		) {
		xWin = true;
		winAlert(); //Alert that x is winner
		winCounter++;
	} else { //Check if O won
	if  ((a1==a2 && a1==a3 && (a1=="o"))|| //first row
		(b1==b2 && b2==b3 && (b1=="o")) || //second row
		(c1==c2 && c2==c3 && (c1=="o")) || //third row
		(a1==b1 && a1==c1 && (a1=="o")) || //first column
		(a2==b2 && a2==c2 && (a2=="o")) || //second column
		(a3==b3 && a3==c3 && (a3=="o")) || //third column
		(a1==b2 && a1==c3 && (a1=="o")) || //first diag
		(a3==b2 && a3==c1 && (a3=="o")) //second diag
		) {
		oWin = true;
		winAlert(); //alert that o is winner 
		winCounter++;

	} else { //Checks for tie if all cells are filled
		if  (((a1=="x") || (a1=="o")) && 
			((b1=="x") || (b1=="x")) &&
			((c1=="x") || (c1=="o")) &&
			((a2=="x") || (a2=="o")) &&
			((b2=="x") || (b2=="o")) &&
			((c2=="x") || (c2=="o")) &&
			((a3=="x") || (a3=="o")) &&
			((b3=="x") || (b3=="o")) &&
			((c3=="x") || (c3=="o"))) {
				alert("It's a tie!");
		}
	}
}
}

*/

function addResetListener () {
	var resetButton = document.getElementById("reset");
	resetButton.addEventListener("click", resetBoard);

}


function checkForWin(movesArray, name){
  // loop over the first array of winning combinations
  for (i = 0; i < winningCombinations.length; i++) {
    // reset the winCounter each time!
    winCounter = 0;
    // loop over each individual array
    for (var j = 0; j < winningCombinations[i].length; j++) {
      // if the number in winning combo array is === a number in moves array, add to winCounter
      if(movesArray.indexOf(winningCombinations[i][j]) !== -1){
        winCounter++;
      }
      // if winCounter === 3 that means all 3 moves are winning combos and game is over!
      if(winCounter === 3){
        alert("Game over. Player " + name + " wins!");
        resetBoard();
      }
    }
  }
}


function resetBoard () {
	for (var i = board.length - 1; i >= 0; i--) {
	board[i].innerHTML="";
    board[i].setAttribute("class","clear");
  }
  OMoves = [];
  XMoves = [];
  winCounter=0;
  counter = 1;
  turnMessage.innerHTML = "It is X's turn";
}



