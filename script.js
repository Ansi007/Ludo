let diceImages = [
  "Images/Dice/dice-1.png",
  "Images/Dice/dice-2.png",
  "Images/Dice/dice-3.png",
  "Images/Dice/dice-4.png",
  "Images/Dice/dice-5.png",
  "Images/Dice/dice-6.png",
];

let dice = document.getElementsByClassName("diceimg");
for (let i = 0; i < dice.length; i++) {
  dice[i].addEventListener("click", rollDice);
}

let x = 0;
let sixCount = 0;
function rollDice() {
  let rolledDice = document.getElementById("currDice");
  rolledDice.style.animation = "shake 0.1s";
  randomNumber = Math.floor(Math.random() * 6);
  let randomImage = diceImages[randomNumber];
  rolledDice.src = randomImage;
}
