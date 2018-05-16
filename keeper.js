var p1Button = document.querySelector("#P1");
var p2Button = document.getElementById("P2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var resetButton = document.querySelector("#Reset");
var messageDisplay = document.querySelector("#message");
var winningScoreDisplay = document.querySelector("p span");
var p1NameDisplay = document.querySelector(".p1Name");
var p2NameDisplay = document.querySelector(".p2Name");
var p1Score = 0;
var p2Score = 0;
var winningScore = 0;
var gameOver = false;


p1Button.addEventListener("click", function() {
	if (!gameOver){
	p1Score++;
	if (p1Score === winningScore){
		p1Display.classList.add("winner");
		p1NameDisplay.classList.add("name");
		messageDisplay.textContent = "P1 is Winner!!!";
		gameOver = true;
	}
	p1Display.textContent = p1Score;
}
});

p2Button.addEventListener("click", function() {
	if (!gameOver){
	p2Score++;
	if (p2Score === winningScore){
		p2Display.classList.add("winner");
		p2NameDisplay.classList.add("name");
		messageDisplay.textContent = "P2 is Winner!!!";
		gameOver = true;
	}
	p2Display.textContent = p2Score;
}
});

numInput.addEventListener("change", function() {
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();
});

resetButton.addEventListener("click", function() {
reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	p1NameDisplay.classList.remove("name");
	p2NameDisplay.classList.remove("name");
	messageDisplay.textContent = "";
	gameOver = false;
}
