
class IronHackGame {
  constructor() {
    this.players = [
      new Player("Red Ninja"),
      new Player("Blue Toast")
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
    this.skillNumbers = document.getElementsByClassName("skills");
    this.avatarTarget = document.getElementsByClassName("avatar");
    this.skillsp0 = document.getElementsByClassName("p0skills");
    this.skillsp1 = document.getElementsByClassName("p1skills");
    this.avatarp0 = document.getElementsByClassName("p0avatar");
    this.avatarp1 = document.getElementsByClassName("p1avatar");
    this.addEventhandlerToAllSkills();
    this.addEventhandlerToAllAvatars();
  }
  updateDOM() {
    if (this.state === "start") {
      document.getElementsByClassName("gameArea")[0].style.opacity = 0.5;
    } else if (this.state === "choosingSkills") {
      this.selectedSkillsStyling();
    } else if (this.state === "skillChosen") {
      this.selectedSkillsStyling();
      /* document.getElementById("player0_batman_1").border = "5";
       for (let i = 0; i <= this.skillNumbers - 1; i++) {
         if (skillNumbers[i] !== document.getElementById("player0_batman_1")) {
           skillNumbers[i].style.opacity = 0.5;
         }
       }*/
    }
    else if (this.state === "avatarChosen") {
      //add sourceAvatar+SourceSkill zu Target AvatarBox
      this.selectedSkillsStyling();
    }
  }

  //document.getElementById("player" + this.turn + "Name").innerHTML = this.players[this.turn].playerName + " ist jetzt dran";
  /*changeGameButton(){
    document.getEle mentById("startGameButton").innerHTML="Next Round";
    document.getElementById("startGameButton").id="nextRound";
  }*/

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  selectedSkillsStyling() {
    //checks for stage and reacts on it with styling changes in regards to selection
    if (this.state === "choosingSkills") {
      document.getElementsByClassName("gameArea")[0].style.opacity = 1;
      for (let a = 0; a <= this.avatarTarget.length - 1; a++) {
        this.avatarTarget[a].style.opacity = 0.5;
      }
      for (let i = 0; i <= this.skillNumbers.length - 1; i++) {
        this.skillNumbers[i].style.opacity = 1;
      }
      if (this.turn === 0) {
        for (let i = 0; i <= this.skillsp1.length - 1; i++) {
          document.getElementsByClassName("p1skills")[i].style.opacity = 0.5;
        }
      } else {
        for (let i = 0; i <= this.skillsp0.length - 1; i++) {
          document.getElementsByClassName("p0skills")[i].style.opacity = 0.5;
        }
      }
    }
    else if (this.state === "skillChosen") {
      for (let s = 0; s <= this.skillNumbers.length - 1; s++) {
        this.skillNumbers[s].style.opacity = 0.5;
      }
      for (let i = 0; i <= this.players.length - 1; i++) {
        for (let j = 0; j <= this.players[i].characters.length - 1; j++) {
          if (this.players[i].characters[j].chosenSkill !== "") {
            document.getElementById("" + i + j + this.players[i].characters[j].chosenSkill).parentNode.style.opacity = 1;
            document.getElementById("" + i + j + this.players[i].characters[j].chosenSkill).border = "5";
          }
        }
      }
      console.log(this.skillNumbers);
      console.log(this.avatarTarget);
      console.log(this.turn);
      if (this.turn === 0) {
        for (let a = 0; a <= this.avatarp1.length - 1; a++) {
          this.avatarp1[a].style.opacity = 1;
        }
      } else {
        for (let a = 0; a <= this.avatarp0.length - 1; a++) {
          this.avatarp0[a].style.opacity = 1;
        }
      } this.state = "choosingAvatars";
    }
    else if(this.state === "avatarChosen"){
      this.state = "choosingSkills";
      for (let i = 0; i <= this.players.length - 1; i++) {
        for (let j = 0; j <= this.players[i].characters.length - 1; j++) {
          if (this.players[i].characters[j].chosenSkill !== "") {
            //document.getElementById("" + i + j + this.players[i].characters[j].chosenSkill).parentNode.style.opacity = 1;
            document.getElementById("" + i + j + this.players[i].characters[j].chosenSkill).border = "";
          }
        }
      }
      this.updateDOM();

    }
  }

  addEventhandlerToAllSkills() {
    for (let i = 0; i <= this.skillNumbers.length - 1; i++) {
      this.skillNumbers[i].onclick = (e) => {
        console.log(e);
        console.log(this.state);
        if (this.state === "choosingSkills") {
          let savedSkill = this.skillNumbers[i].getElementsByTagName("img")[0].getAttribute("id");
          console.log(savedSkill);
          console.log(savedSkill.split(""))
          if(this.players[savedSkill.split("")[0]].characters[savedSkill.split("")[1]].chosenSkill === ""){
          this.players[savedSkill.split("")[0]].characters[savedSkill.split("")[1]].chosenSkill = savedSkill.split("")[2];
          console.log(this.players);
          this.state = "skillChosen";
          this.updateDOM();
          } else{return;}
        }
      }
    }//this.choosingAvatar();
  }

  addEventhandlerToAllAvatars() {
    console.log(this.avatarTarget);
    for (let i = 0; i <= this.avatarTarget.length - 1; i++) {
      this.avatarTarget[i].onclick = (e) => {
        if (this.state === "choosingAvatars") {
          let savedAvatar = this.avatarTarget[i].getElementsByTagName("img")[0].getAttribute("id");
          console.log(savedAvatar);
          console.log(savedAvatar.split(""))
          this.players[savedAvatar.split("")[0]].chosenAvatar = savedAvatar.split("")[1];
          console.log(this.players);
          this.state = "avatarChosen";
          this.updateDOM();
        }
      }
    }
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


