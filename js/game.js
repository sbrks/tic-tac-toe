window.onload = start;
var board = document.getElementsByTagName("td");
var turnText = document.querySelector("#playerTurn");
var counter = 1;
var winCounter = 0;
var OMoves = [];
var XMoves = [];

var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

/*
var turn = 0;
var playerX = 'X';
var playerO = 'O';
var oWin = false;
var xWin = false;
var checkWin;
var a1; // value within each cell
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;
*/


function start(){
  addXandOListener();
  addResetListener();
}

function addXandOListener(){
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
      turnText.innerHTML = "It is X's turn";
      counter++;
      checkForWin(OMoves, "O");
    }
    else {
      XMoves.push(parseInt(event.target.getAttribute("data-num")));
      event.target.innerHTML = "X";
      event.target.setAttribute("class","X");
      turnText.innerHTML = "It is O's turn";
      counter++;
      checkForWin(XMoves, "X");
    }
  // if the counter is greater than or equal to 10, the game is a draw!
  if (counter >= 10){
    turnText.innerHTML = "Game Over!";
    var conf = confirm("It's a draw, do you want to play again?");
    if(conf){
      resetBoard();
    }
  }
 }
}

/*
window.onload=start;
var boxes = document.getElementsByTagName("td"); //will get an array of all the empty boxes
var resetButton = document.getElementById('reset'); //will get reset button
var oMoves = [];
var xMoves = [];
var winCounter = 0;
var turnText = document.querySelector('#message');
var turn = 0;
var playerX = 'X';
var playerO = 'O';
var oWin = false;
var xWin = false;
var checkWin;
var a1; // value within each cell
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;

*/

// START GAME
function start () {
	xoListener();
	resetListener();
}

//X & O game play listener
function xoListener () {
	for (var i = board.length - 1; i >= 0; i--){
		board[i].addEventListener("click", addXorO);
	}
}

//Add X or O when clicked
function addXorO() {
	if (turn === 0) {
		board.innerHTML='X';
		//check board
		checkWin(); // check win
		turn++;//toggles to other player's turn
		turnText.innerHTML = "It is O's turn!";
	} else {
		td.innerHTML('playerO');
		checkWin();
		turn--;
	}

}

//Checks board for winner
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

//DECLARES WINNER
var winAlert = function () {
	if (xWin === true) {
		alert ("X wins!");
		!xWin; 
	}
	else if (oWin === true) {
		alert ("O wins!");
		!oWin;
	}
};


// RESET BUTTON

function resetListener () {
	var resetButton = document.getElementById('reset');
	resetButton.addEventListener('click', resetBoard);
}

function resetBoard () {
	for (var i=board.length - 1; i >= 0; i--) {
		board[i].innerHTML=" ";
		board[i].setAttribute("class", "clear");
	}
	oMoves = [];
	xMoves = [];
	winCounter=0;
	counter = 1;
	turn = 0;
	turnText.innerHTML = "It is X's turn";

}

//turn message
function turnText () {
	if (turn=0) {
		return ("It is X's turn");
			}
	else {
		return ("It is O's turn");
	}
}

