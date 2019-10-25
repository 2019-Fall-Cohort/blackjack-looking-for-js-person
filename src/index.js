
const {default: { singleDeckGame}} = require("blackjack-dealer-logic");
  
  singleDeckGame.deal();
  
  
  const userHand = singleDeckGame.getUserHand();
  
  getChips();
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
}
)

let enterName = document.getElementById('prompt');
enterName.onclick = function() {
  let userResponse = prompt('Type in your name, chief.');
  let displayContainer = document.getElementById('promptResponse');
  displayContainer.innerHTML = 'Welcome to the swankiest blackjack table in Cbus, ' + userResponse;
}

let restartGame = document.getElementById('restart');
restartGame.addEventListener('click', () => {
  document.location.reload();
  alert('Game will be reset.');
  // singleDeckGame.resetPlayers();
  // generateCard(userHand.getCards()[0]);
  // generateCard(userHand.getCards()[1]);
  // singleDeckGame.resetPlayers();
})

function getChips(){
  const userAmount = singleDeckGame.getUserChips();
  const change = document.createElement("h3");
  change.innerText = userAmount;
  document.body.append(change);

}
