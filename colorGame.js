var numofSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){

	//mode buttons event listener
	for (var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ?  numofSquares = 3 : numofSquares = 6;
			reset();
		});

	}
	//square colors and event listener

	for (var i = 0; i < squares.length; i++){
		// add initial colors to squares
		squares[i].addEventListener("click", function(){

			//grab color of cliked square
			var clickedColor = this.style.backgroundColor;

			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}

		});

	}

	reset();

}


function reset(){

	colors = generateRandomColors(numofSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for (var i = 0; i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
 		}
	}


	h1.style.backgroundColor = "steelblue";

}

resetButton.addEventListener("click", function(){
	reset();
})


function changeColors(color){

	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}

	//change each color to
}


function pickColor(){
	var random = Math.floor(Math.random()*colors.length)
	return colors[random]
}


function generateRandomColors(num){
	//make an array
	var arr = []

	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor())
	}

	return arr;

}


function randomColor(){
	//pick a "red" from 0-255
	var red = Math.floor(Math.random() * 256)
	//pick a "green" from 0-255
	var green = Math.floor(Math.random()*256)
	//pick a "blue" from 0-255
	var blue = Math.floor(Math.random()*256)

	return "rgb(" + red + ", " + green + ", " + blue + ")"
}
