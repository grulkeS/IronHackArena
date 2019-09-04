
let game = new IronHackGame();
game.whoIsNext();

/*function getActivePlayer () {
  game.players[game.turn];
  if(game.players[game.turn].status === "inactive"){
    game.players[game.turn].status = "active";
  }
  console.log(game.players[game.turn]);
}
console.log(game);
getActivePlayer();*/

/*document.addEventListener("DOMContentLoaded", function(event) { 
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });*/
  
  // Add all the divs to the HTML
  // document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  /*document.querySelectorAll('.back').forEach( card => {
    card.onclick = function() {
      // TODO: write some code here
      card.parentNode.childNodes[0].className="front";
      card.parentNode.childNodes[1].className="back";
      memoryGame.pickedCards.push(card);
     
      memoryGame.checkIfPair();
      console.log('Card clicked: ', card);
    };
  });*/
/*
  document.querySelectorAll('.front').forEach( card => {
    card.onclick = function() {
      // TODO: write some code here
      card.parentNode.childNodes[0].className="back";
      card.parentNode.childNodes[1].className="front";
      console.log('Card clicked: ', card);
    };
  });*/
  
  let skillNumbers = document.getElementsByClassName('skills');
  let chosenSkill = "";
for(let i=0; i < skillNumbers.length; i++){
  skillNumbers[i].onclick = function(e){
    chosenSkill = skillNumbers[i].getElementsByTagName("img")[0];
    console.log(chosenSkill);
  }
}

  /*document.querySelectorAll(".player"+game.turn).forEach( char => {
    char.onclick = function() {
      // TODO: write some code here
      char.parentNode;
      console.log(char);
    };
  });*/