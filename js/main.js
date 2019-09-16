
let batman = new Char("Batman", skillArrBatman);
let ironman = new Char("Ironman", skillArrIronman);
let superman = new Char("Superman", skillArrSuperman);
let player0 = new Player("Red Ninja", [batman, ironman, superman]);
let player1 = new Player("Blue Toas", [batman, ironman, superman]);
let game = new IronHackGame([player0,player1]);



game.updateDOM();
startButton = document.getElementById("startGameButton");
startButton.onclick = () => {
  if (document.getElementsByName("startGame")[0].innerHTML === "Start Game") {
    document.getElementsByName("startGame")[0].innerHTML = "Next Round"
  } else {
    if(game.turn === 0){
      game.players[0].characters.forEach((character) => {
        character.recieveDamageAndTypeStateChanges();
      })
      game.players[1].characters.forEach((character) => {
        character.recieveDamageAndTypeStateChanges("offense");
      })
    }else{
      game.players[1].characters.forEach((character) => {
        character.recieveDamageAndTypeStateChanges();
      })
      game.players[0].characters.forEach((character) => {
        character.recieveDamageAndTypeStateChanges("offense");
      })
    }
    for (let i = 0; i <= game.players[game.turn].characters.length - 1; i++) {
      if (game.players[game.turn].characters[i].chosenSkill !== "") {
        game.players[game.turn].characters[i].chosenSkill = "";
      }
    }
    document.getElementsByName("startGame")[0].onclick = game.nextRound();
  }
  console.log(game.players);
  game.state = "choosingSkills";
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