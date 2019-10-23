
const {default: { singleDeckGame}} = require("blackjack-dealer-logic");
  
  singleDeckGame.deal();
  
  
  const userHand = singleDeckGame.getUserHand();
  
  
  generateCard(userHand.getCards()[0]);
  generateCard(userHand.getCards()[1]);

  
  function generateCard(card) {
    const playingCard = document.createElement("section");
    playingCard.classList.add("playing-card");
  
    const valueContainer = document.createElement("section");
    valueContainer.classList.add("value-container");
  
    const value = document.createElement("span");
    value.classList.add("value");
    value.textContent = card.getValue();
  
    const suit = document.createElement("span");
    suit.classList.add("suit");
    suit.textContent = card.getSuit();
  
    valueContainer.append(value);
    valueContainer.append(suit);
    playingCard.append(valueContainer);
  
    const table = document.querySelector(".table");
    table.append(playingCard);

  }
const hitButton = document.getElementById("hitButton");
hitButton.addEventListener("click", () =>{
  singleDeckGame.hitUser();
  const table = document.querySelector(".table");
  table.innerHTML = "";
  singleDeckGame.getUserHand().getCards().forEach( (card) =>{
    generateCard(card);
  })
})
const {
  default: { singleDeckGame } } = require("blackjack-dealer-logic");

const buttons = document.querySelectorAll(".button");
const hit = document.querySelectorAll(".hit");
const stand = document.querySelectorAll(".stand");
const double = document.querySelectorAll(".double");

hit.forEach(function(button) {
  button.addEventListener("click", () => {
    hitDealer()
  })
});

let enterName = document.getElementById('prompt');
enterName.onclick = function() {
  let userResponse = prompt('Type in your name, chief.');
  let displayContainer = document.getElementById('promptResponse');
  displayContainer.innerHTML = 'Welcome to the swankiest blackjack table in Cbus, ' + userResponse;
}



// ~~Alex reference 11:22 a.m. 10/22/2019:~~
// backgroundButton.addEventListener("click", () => {
//   const paragraph = document.querySelector(".newParagraph");

//   paragraph.classList.add("redBackground");
//   paragraph.classList.remove("newParagraph");
// })

// stand.forEach(function(button) {
//   button.addEventListener("click", () => {
//     stand()
//   })
// });

// double.forEach(function(button) {
//   button.addEventListener("click", () => {
//     double(card : Card)
//   })
// });
// const backgroundButton = document.querySelector(".addBackground");

button.forEach(function(button) {
  button.addEventListener("click", () => {
    const paragraph = document.createElement("p");

    paragraph.classList.add("newParagraph");

    paragraph.textContent = "My new paragraph!";

    document.body.append(paragraph);
  });
});

