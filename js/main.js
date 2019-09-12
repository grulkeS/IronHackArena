
let game = new IronHackGame();
game.updateDOM();

startButton = document.getElementById("startGameButton");

startButton.onclick = () => {
  //console.log(document.getElementsByName("startGame")[0].innerHTML);
  if (document.getElementsByName("startGame")[0].innerHTML === "Start Game") {
    document.getElementsByName("startGame")[0].innerHTML = "Next Round"
  } else {
    for (i = 0; i <= game.players[game.turn].characters.length - 1; i++) {
      //game.players[game.turn].characters[i].chosenSkill = "";
      if (game.players[game.turn].characters[i].chosenSkill !== "") {
        game.players[game.turn].characters[i].chosenSkill = "";
      }
    }
    document.getElementsByName("startGame")[0].onclick = game.nextRound();
  }
  game.state = "choosingSkills";
  //  game.changeGameButton();  
  game.updateDOM();
}
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