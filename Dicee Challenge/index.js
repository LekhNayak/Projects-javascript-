// Generate random numbers for both dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

// Create the image file names
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// Update the image sources
document.querySelectorAll("img")[0].src = randomImageSource1;
document.querySelectorAll("img")[1].src = randomImageSource2;

// Determine the winner and update the heading text
var resultText;
if (randomNumber1 > randomNumber2) {
  resultText = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  resultText = "Player 2 Wins!";
} else {
  resultText = "Draw!";
}

document.querySelector("h1").innerHTML = resultText;
