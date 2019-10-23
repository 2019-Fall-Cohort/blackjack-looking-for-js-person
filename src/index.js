const {default: { singleDeckGame, Result }} = require("blackjack-dealer-logic");
  
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

const currScore = document.getElementById("score");
currScore.addEventListener("click",()=>{
  const score = document.createElement("h3");
  score.classList.add("currentScore");
  score.textContent = singleDeckGame.evaluateUser();
  document.body.append(score);

} )

const restart = document.getElementById("clear");
restart.addEventListener("click", ()=>{
  const table = document.querySelector(".table");
  table.innerHTML = "";
  const playCard= document.querySelector(".playing-card");
  playCard.innerHTML = "";
  const values = document.querySelector(".value");
  const suit = document.querySelector(".suit");
  values.innerHTML= "";
  suit.innerHTML= "";


})

const userChips = document.getElementById("")
  

  