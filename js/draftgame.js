
/*
/*JavaScript portion will be next:

Locate the element first to use it within your app. Think about using document.getElementById, document.getElementsByClassName or something similar to locate your target elements. Try this in your console to make sure your selection works.
After finding the elements, start writing logic to listen for click events on those elements

You will also need a variable to keep track of moves - this will be used to indicate whether or not to draw an X or an O.
*/

// document.getElementById(id).attribute=new value

//create score variable, store as object? will update as game is played

//VARIABLES







// var play = 1

window.onload=start;


var playerX = 'x'; // turn = 0
var playerO = 'o'; // turn = 1

var turn = 0; //toggles between 0 and 1 for switching turns
var boardCheck; // function to check value in each cell


var oMoves = [];
var xMoves = [];
var winningCombos = [0, 1, 2], [3, 4, 5], [6,7,8], 
					[0, 3, 6], [1, 4, 7], [2, 5, 8], 
					[0,4,8], [2, 4, 6];



var turn = 'X';
var score = {
	'X': 0,
	'O': 0
};

var gridValue = 0;






//1. need to keep track of whose turn it is - create a function



function startGame() {
	var select = document.getElementById("board");
	document.turn = "X";

}

function nextMove (square) {
	square.innerText = document.turn;
	switchTurn();
}

function switchTurn() {
	if (document.turn == "X") {
		document.turn == "O";
	}
	else {
		document.turn = "X";
	}
};




var a1; // value within each cell
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;

var checkWin; // function that checks the board for a winning combo
var xWin = false; // true of X wins
var oWin = false; // true if ) wins
var winAlert; // function that declares the winner and restarts game

var newGame;
var clearBoard;


var score = {
	X: 0,
	O: 0
};


//Places an X in the box when clicked.

var newGame = function () {
	var click = document.querySelectorAll(".square");


	document.addEventListener('click', function(e) {

		if (turn === 0) {
			td.innerHTML("playerX");
			boardCheck(); // checks value in each cell
			checkWin(); // checks board for winning combo
			turn = 1; //toggles to player o's turn
		} else {

		}
	});

};

var click = document.querySelector('square');


element.addEventListener("click", function() {
	.
	.style.background: "blue";
});

//add event listener
//element.addEventListener (event, function); 
//e.g. document.addEventListener("click", functionname);

// Player 1 will click on a cell and it will indicate "x"
//Score will be tallied
//Player 2 will cick on a cell and it will indicate "o"
//Score will be tallied
//note that player 2 selection cannot be the same as player one (i.e. can't put o on an x)
//
//Play continues, score continues to be evaluated
//Score tracker will check for three clicks in a row by a given player
//if 3 x's/o's diagonally, vertically, or horizontally, that player wins
//alert indicates who won


//when a user clicks on a blank square, it should indicate that player's symbol
//this can be triggered by listening for a click event on the appropriate div
//give each div a id based on its position

// the .one() handler can be attached to events to only let them happen once - helpful so only one squared can be played per game
// the .text(textString) method will place a string isnside the selected element. You can use this insude the .click() function to place an X in a box when clicked
// the .html() method gets the value of a script inside the selected element. this cant detect the contents of each square in order to detect a win
// the 'this' keyword can be used to refer to the element which has just been selected. e.g. if a square is clicked, place an 'X' in this square



//Places an X or O in the box when clicked. Toggles

var newGame = function() {
	('td').addEventListener('click', function(event) {
		if (turn == 0) {
			this.textContent('X');
			checkWin();
			turn == 1;
			oMove();//write oMove function
			//boardCheck();haven't written this yet
			checkWin();
		}
	});
};
//FUNCTION TO DETECT A WIN OR A TIE


var checkWin = function () {
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
};

//Declares who won
var winAlert = function () {
	if (xWin == true) {
		alert ("X wins!");
	}
	else if (oWIn == true) {
		alert ("O wins!");
	}
};







