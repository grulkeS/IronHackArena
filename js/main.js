
let batman = new Char("Batman", skillArrBatman);
let ironman = new Char("Ironman", skillArrIronman);
let superman = new Char("Superman", skillArrSuperman);
let player0 = new Player("Red Ninja",
  [new Char("Batman", skillArrBatman),
  new Char("Ironman", skillArrIronman),
  new Char("Superman", skillArrSuperman)]);
let player1 = new Player("Blue Toast",
  [new Char("Batman", skillArrBatman),
  new Char("Ironman", skillArrIronman),
  new Char("Superman", skillArrSuperman)]);
let game = new IronHackGame([player0, player1]);



game.updateDOM();
startButton = document.getElementById("startGameButton");
startButton.onclick = () => {
  if (document.getElementsByName("startGame")[0].innerHTML === "Start Game") {
    document.getElementsByName("startGame")[0].innerHTML = "Next Round"
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
    document.getElementsByName("startGame")[0].onclick = game.checkCharactersHealth();
  }
  /*console.log(game.players);
  game.state = "choosingSkills";
  game.attackQueueVisualizer();
  game.updateDOM();*/
}
