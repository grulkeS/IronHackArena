
let player0 = new Player("Red Ninja",
  [new Char("Batman", skillArrBatman0),
  new Char("Ironman", skillArrIronman0),
  new Char("Superman", skillArrSuperman0)]);
let player1 = new Player("Blue Toast",
  [new Char("Batman", skillArrBatman1),
  new Char("Ironman", skillArrIronman1),
  new Char("Superman", skillArrSuperman1)]);
let game = new IronHackGame([player0, player1]);



game.updateDOM();

startButton = document.getElementById("startGameButton");

startButton.onclick = () => {
  if (document.getElementsByName("startGame")[0].innerHTML === "Start Game") {
    document.getElementsByName("startGame")[0].innerHTML = "Next Round";
    game.checkCharactersHealth();
  } else {
    if (game.turn === 0) {
      game.players[0].characters.forEach((character) => {
        character.recieveDamageAndTypeStateChanges();
      })
      game.players[1].characters.forEach((character) => {
        character.recieveDamageAndTypeStateChanges("offense");
      })
    } else {
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
    game.nextRound();
    game.checkCharactersHealth();

  }
  game.attackQueueVisualizer();
  /*console.log(game.players);
  game.state = "choosingSkills";
  
  game.updateDOM();*/
}
