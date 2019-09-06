
class IronHackGame {
  constructor() {
    this.players = [
      new Player("Hans"),
      new Player("Wurst")
    ];
    this.turn = 0;
    this.state = "start";
    document.getElementById("player0Name").innerHTML = this.players[0].playerName;
    document.getElementById("player1Name").innerHTML = this.players[1].playerName;
    //this.choosingSkill=this.choosingSkill.bind(this);

    //document.getElementById("player"+this.turn+"Name").innerHTML=this.players[this.turn].playerName+ " ist jetzt dran";
    //document.getElementById("player" + this.turn + "Chars").id = ("player" + this.turn + "CharsActive");
    console.log(this.turn);

    console.log(this.state);
  }
  updateDOM(turn) {
    if (this.state === "start") {
      document.getElementsByClassName("gameArea")[0].style.opacity = 0.5;
    }
    else if (this.state === "choosingSkills") {
      document.getElementsByClassName("gameArea")[0].style.opacity = 1;
      for (let i = 0; i <= this.skillNumbers.length - 1; i++) {
        this.skillNumbers[i].style.opacity = 1;
      }


    }


    //document.getElementById("player" + this.turn + "Name").innerHTML = this.players[this.turn].playerName + " ist jetzt dran";
    this.skillNumbers = document.getElementsByClassName("skills");
    this.avatarTarget = document.getElementsByClassName("avatar");
    this.skillsp0 = document.getElementsByClassName("p" + this.turn + "skills");
    this.skillsp1 = document.getElementsByClassName("p" + this.turn + "skills");
    this.avatarp0 = document.getElementsByClassName("p" + this.turn + "avatar");
    this.avatarp1 = document.getElementsByClassName("p" + this.turn + "avatar");
  }

  /*changeGameButton(){
    document.getEle mentById("startGameButton").innerHTML="Next Round";
    document.getElementById("startGameButton").id="nextRound";
  }*/
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  choosingSkill() {
    for (let i = 0; i <= this.skillNumbers.length - 1; i++) {
      this.skillNumbers[i].onclick = (e) => {
        //console.log(e);
        //console.log(this.state);
        if (this.state === "choosingSkills") {
          if (Char.chosenSkill === "") {
            Char.chosenSkill = this.skillNumbers[i].getElementsByTagName("img")[0];
            //console.log(Char.chosenSkill);
            this.state = "choosingAvatars";
            Char.chosenSkill.border = "5";
            this.updateDOM();
          } else { Char.chosenSkill = ""; }
          //console.log(this.state);
        }

      }

    }
  }
  choosingAvatar() {
    for (let i = 0; i <= avatarTarget.length; i++) {
      if (game.state === "choosingAvatars") {
        if (chosenTarget === "") {
          chosenTarget = avatarTarget[i].getElementsByTagName("img")[0];
          console.log(chosenTarget);
          game.state = "choosingSkills";
        } else { chosenTarget = ""; }
      }
    }
    return chosenAvatar;
  }
  /*whoStartsFirst() {

    this.turn = 0;

  }*/

  whoIsNext() {
    if (this.turn === this.players.length - 1) {
      this.turn = 0;
    } else {
      this.turn++;
    }
  }
}

class Player {
  constructor(spielerName) {
    this.playerName = spielerName;
    this.characters = [
      new Char("Captain SuperDoom"),
      new Char("Hero 74"),
      new Char("HugMe")
    ];
    this.status = "inactive";
    this.resources = {
      red: 1,
      yellow: 1,
      blue: 1,
      white: 1,
      neutral: function () {
        return this.red + this.yellow + this.blue + this.white;
      }
    }
    this.resources.neutral();
    console.log(this.resources.neutral());
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  randomResourceGenerator() {
    let arrResources = ["red", "blue", "yellow", "white"];
    let randomIndex = getRandomInt(0, arrResouces.length);
    switch (arrResources[randomIndex]) {
      case "red":
        this.resources.red += 1;
        break;
      case "blue":
        this.resources.blue += 1;
        break;
      case "yellow":
        this.resources.yellow += 1;
        break;
      case "white":
        this.resources.white += 1;
        break;
    }
  }
  randomResourceReducer() {
    let arrResources = ["red", "blue", "yellow", "white"];
    let randomIndex = getRandomInt(0, arrResouces.length);
    switch (arrResources[randomIndex]) {
      case "red":
        this.resources.red -= 1;
        break;
      case "blue":
        this.resources.blue -= 1;
        break;
      case "yellow":
        this.resources.yellow -= 1;
        break;
      case "white":
        this.resources.white -= 1;
        break;
    }
  }

}

//resources hier


class Char {
  constructor(name) {
    this.charName = name;
    this.health = 100;
    this.chosenSkill = "";
    this.skills = [
      { type: "damage", value: 10 },
      { type: "healSomeOne", value: 10 },
      { type: "damageOverTime", value: [5, 1] },
      { type: "invul", value: true }
    ];
  }
}


