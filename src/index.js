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

// ~~Alex reference 11:22 a.m. 10/22/2019:~~
// backgroundButton.addEventListener("click", () => {
//   const paragraph = document.querySelector(".newParagraph");

//   paragraph.classList.add("redBackground");
//   paragraph.classList.remove("newParagraph");
// })

stand.forEach(function(button) {
  button.addEventListener("click", () => {
    stand():
  })
});

double.forEach(function(button) {
  button.addEventListener("click", () => {
    double(card: Card):
  })
});
// const backgroundButton = document.querySelector(".addBackground");

button.forEach(function(button) {
  button.addEventListener("click", () => {
    const paragraph = document.createElement("p");

    paragraph.classList.add("newParagraph");

    paragraph.textContent = "My new paragraph!";

    document.body.append(paragraph);
  });
});


/*
generateCard(userHand.getCards()[0]);
generateCard(userHand.getCards()[1]);

console.log(singledDeckGame.getUserHand());

const playingCard = document.createElement("section");
playingCard.classList.add("playing-card");

const valueContainer = document.createElement("section");
valueContainer.classList.add("value-container");

const value = document.createElement("span");
value.classList.add("value");
value.textContent = userHand.getCards()[0].getValue();

const suit = document.createElement("span");
suit.classList.add("suit");
suit.textContent = userHand.getCards()[0].getSuit();

valueContainer.append(value);
valueContainer.append(suit);
playingCard.append(valueContainer);

const table = document.querySelector(".table")
table.append(playingCard); */