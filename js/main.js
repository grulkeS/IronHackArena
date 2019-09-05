
let game = new IronHackGame();
game.updateDOM();
startButton = document.getElementById("startGameButton");

startButton.onclick = function (e) {
  game.state = "choosingSkills";
//  game.changeGameButton();
console.log(game.skillNumbers);
  game.choosingSkill();
  game.updateDOM(game.turn);

}
console.log(game.state)
/*function getActivePlayer () {
  game.players[game.turn];
  if(game.players[game.turn].status === "inactive"){
    game.players[game.turn].status = "active";
  }
  console.log(game.players[game.turn]);
}
console.log(game);
getActivePlayer();*/



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

/*if (this.spielZustand !== "Skill auswählen")return;
    this.spielZustand="Hero auswählen";*/


/*document.querySelectorAll(".player"+game.turn).forEach( char => {
  char.onclick = function() {
    // TODO: write some code here
    char.parentNode;
    console.log(char);
  };
});*/