
const {default: { singleDeckGame}} = require("blackjack-dealer-logic");
  
  singleDeckGame.deal();
  
  getCoins(singleDeckGame.getUserChips());
  
  const userHand = singleDeckGame.getUserHand();
  const money = singleDeckGame.getUserChips();
  
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
const stand = document.getElementById("stand");
stand.addEventListener("click", () =>{
  singleDeckGame.standUser();
  console.log("sucess")

})
function getCoins(money){

}
