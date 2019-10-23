// const {
//   default: { singleDeckGame } } = require("blackjack-dealer-logic");

// const buttons = document.querySelectorAll(".button");
// const hit = document.querySelectorAll(".hit");
// const stand = document.querySelectorAll(".stand");
// const double = document.querySelectorAll(".double");

// hit.forEach(function(button) {
//   button.addEventListener("click", () => {
//     hitDealer()
//   })
// })

let enterName = document.getElementById('prompt');
enterName.onclick = function() {
  let userResponse = prompt('Type in your name, chief.');
  let displayContainer = document.getElementById('promptResponse');
  displayContainer.innerHTML = 'Welcome to the swankiest blackjack table in Cbus, ' + userResponse;
}


// stand.forEach(function(button) {
//   button.addEventListener("click", () => {
//     stand()
//   })
// })

// double.forEach(function(button) {
//   button.addEventListener("click", () => {
//     double(card : Card)
//   })
// });
