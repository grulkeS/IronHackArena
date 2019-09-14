
class IronHackGame {
  constructor() {
    this.players = [
      new Player("Red Ninja"),
      new Player("Blue Toast")
    ];
    this.turn = 0;
    this.state = "start";
    this.fightSequence = [];
    this.fightSequenceElement = [];
    document.getElementById("player0Name").innerHTML = this.players[0].playerName;
    document.getElementById("player1Name").innerHTML = this.players[1].playerName;
    document.getElementById("00_health").value = this.players[0].characters[0].health;
    document.getElementById("01_health").value = this.players[0].characters[1].health;
    document.getElementById("02_health").value = this.players[0].characters[2].health;
    document.getElementById("10_health").value = this.players[1].characters[0].health;
    document.getElementById("11_health").value = this.players[1].characters[1].health;
    document.getElementById("12_health").value = this.players[1].characters[2].health;
    this.skillDescriptions = [
      "Batman punches with the force of all his anger and desperation! Deals 20 damage to its target.",
      "Batman throws his Batwing and stuns for one turn!",
      "Batman calls Robin, together they punch even harder! Deals 30 damage to its target.",
      "Batman uses his grapple to get out of a fight, becomes unattackable for one turn and removes all debuffs!",
      "Ironman shoots Highenergybeam from his Hand! Dealing 15 damage to its target",
      "Ironman calls his suits to protect someone on the team. Applies 15 damage reduction to an ally for 1 turn!",
      "Ironman flies really fast and punches the enemy! Deals 35 damage to his target.",
      "Ironman calls his thickest indestructable armored suit, becomes invulnerable for one turn and removes all debuffs!",
      "Superman flies towards the enemie and throws a punch. Wow what a punch! Deals 25 damage to its target.",
      "Superman uses his laserbeams from his eyes, leaving initial 15 damage and the target burns for 2 turns, 5 damage each turn!",
      "Superman blows his superhuman breath on every enemy! Deals 10 damage to all enemies.",
      "Superman flies to the sun and becomes invulnerable for one turn, removes all debuffs!",
      "Batman punches with the force of all his anger and desperation! Deals 20 damage to its target.",
      "Batman throws his Batwing and stuns for one turn!",
      "Batman calls Robin, together they punch even harder! Deals 30 damage to its target.",
      "Batman uses his grapple to get out of a fight, becomes unattackable for one turn and removes all debuffs!",
      "Ironman shoots Highenergybeam from his Hand! Dealing 15 damage to its target",
      "Ironman calls his suits to protect someone on the team. Applies 15 damage reduction to an ally for 1 turn!",
      "Ironman flies really fast and punches the enemy! Deals 35 damage to his target.",
      "Ironman calls his thickest indestructable armored suit, becomes invulnerable for one turn and removes all debuffs!",
      "Superman flies towards the enemie and throws a punch. Wow what a punch! Deals 25 damage to its target.",
      "Superman uses his laserbeams from his eyes, leaving initial 15 damage and the target burns for 2 turns, 5 damage each turn!",
      "Superman blows his superhuman breath on every enemy! Deals 10 damage to all enemies.",
      "Superman flies to the sun and becomes invulnerable for one turn, removes all debuffs!"
    ];
    this.avatarDescription = [
      "Batman has a dark past, has a cave of gadgets and fights crime!",
      "Ironman, also known as Tony Stark, is a genius engineer fighting with futuretech armored Suits and gets all the ladies!",
      "Superman, disguises himself as human in the form of Clark Kent, he comes from another planet and has superhuman skills thanks to our yellow Sun!",
      "Batman has a dark past, has a cave of gadgets and fights crime!",
      "Ironman, also known as Tony Stark, is a genius engineer fighting with futuretech armored Suits and gets all the ladies!",
      "Superman, disguises himself as human in the form of Clark Kent, he comes from another planet and has superhuman skills thanks to our yellow Sun!"
    ]

    this.idArray = [
      [0, 0, 0],
      [0, 0, 1],
      [0, 0, 2],
      [0, 0, 3],
      [0, 1, 0],
      [0, 1, 1],
      [0, 1, 2],
      [0, 1, 3],
      [0, 2, 0],
      [0, 2, 1],
      [0, 2, 2],
      [0, 2, 3],
      [1, 0, 0],
      [1, 0, 1],
      [1, 0, 2],
      [1, 0, 3],
      [1, 1, 0],
      [1, 1, 1],
      [1, 1, 2],
      [1, 1, 3],
      [1, 2, 0],
      [1, 2, 1],
      [1, 2, 2],
      [1, 2, 3]
    ]
    this.skillNumbers = document.getElementsByClassName("skills");
    this.avatarTarget = document.getElementsByClassName("avatar");
    this.skillsp0 = document.getElementsByClassName("p0skills");
    this.skillsp1 = document.getElementsByClassName("p1skills");
    this.avatarp0 = document.getElementsByClassName("p0avatar");
    this.avatarp1 = document.getElementsByClassName("p1avatar");
    this.addEventhandlerToAllSkills();
    this.addEventhandlerToAllAvatars();
    this.addMouseOverToAllSkills();
    this.addMouseOverToAllAvatars()
  }

  updateDOM() {
    if (this.state === "start") {
      document.getElementsByClassName("gameArea")[0].style.opacity = 0.5;
    } else if (this.state === "choosingSkills") {
      this.newStylingFrameWork();
    } else if (this.state === "skillChosen") {
      this.newStylingFrameWork();
    }
    else if (this.state === "avatarChosen") {
      //add sourceAvatar+SourceSkill zu Target AvatarBox
      this.newStylingFrameWork();
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
  /*
  Array.from(document.getElementsByClassName("events")).forEach(function(item) {    console.log(item.id); });
  list = document.getElementsByClassName("events"); for (let item of list) {     console.log(item.id); }
    chars&skills help:
    this.charName = name;
    this.health = 100;
    this.chosenSkill = "";
    this.isActive = 0;
    this.beeingAttacked = [];
    this.beeingBuffed = [];
    this.isInvulnerable = 0;
    this.playerID = "";
    this.skills = [
      { type: "damage", value: 10, rounds: 1, viableTarget: "opponent", coolDown: 1, isAvailable: 0 },
      { type: "heal", value: 10, rounds: 1, viableTarget: "opponent", coolDown: 1, isAvailable: 0 },
      { type: "dot", value: 5, rounds: 2, viableTarget: "allied", coolDown: 2, isAvailable: 0 },
      { type: "invulnerable", value: 1, rounds: 1, viableTarget: "self", coolDown: 3, isAvailable: 0 }
    ];
  */
  newStylingFrameWork() {
    this.idArray.forEach((coord) => {
      console.log(this.players[coord[0]].characters[coord[1]].health);
      console.log(document.getElementById(""+ coord[0] + coord[1] + "_health"));
      document.getElementById(""+ coord[0] + coord[1] + "_health").value = this.players[coord[0]].characters[coord[1]].health;
    })
    switch (this.state) {

      case "choosingSkills":
        document.getElementsByClassName("gameArea")[0].style.opacity = 1;
        this.idArray.forEach((coord)=>{
          document.getElementById("" + coord[0] + coord[1] + coord[2]).border = "";
        })
        if (this.turn === 0) {
          this.idArray.forEach((coord) => {
            if (coord[0] === 0) {
              if (this.players[0].characters[coord[1]].skills[coord[2]].isAvailable === 0 && this.players[0].characters[coord[1]].chosenSkill === ""/*&& checkResources()=== true*/) {
                document.getElementById("" + coord[0] + coord[1] + coord[2]).parentNode.style.opacity = 1;
              } else {
                document.getElementById("" + coord[0] + coord[1] + coord[2]).parentNode.style.opacity = 0.7;
              }
            }
          })
        } else if (this.turn === 1) {
          this.idArray.forEach((coord) => {

            if (coord[0] === 1) {
              if (this.players[1].characters[coord[1]].skills[coord[2]].isAvailable === 0 /*&& checkResources()=== true*/) {

                document.getElementById("" + coord[0] + coord[1] + coord[2]).parentNode.style.opacity = 1;
              }
            }
          })
        }
        break;

      case "skillChosen":
        for (let s = 0; s <= this.skillNumbers.length - 1; s++) {
          this.skillNumbers[s].style.opacity = 0.8;
        }
        for (let i = 0; i <= this.players.length - 1; i++) {
          for (let j = 0; j <= this.players[i].characters.length - 1; j++) {
            if (this.players[i].characters[j].chosenSkill !== "") {
              document.getElementById("" + i + j + this.players[i].characters[j].chosenSkill).parentNode.style.opacity = 1;
              document.getElementById("" + i + j + this.players[i].characters[j].chosenSkill).border = "1";
              console.log(document.getElementById("selectedSkill"));
            }
          }
        }

        switch (this.turn) {

          case 0:
            if (this.players[0].characters[this.fightSequenceElement[0]].skills[this.fightSequenceElement[1]].viableTarget === "opponent") {
              this.idArray.forEach((coord) => {
                if (coord[0] === 1) {
                  if (this.players[1].characters[coord[1]].isInvulnerable === 0) {
                    document.getElementById("" + coord[0] + coord[1]).parentNode.style.opacity = 1;
                  }
                }
              })
            } else if (this.players[0].characters[this.fightSequenceElement[0]].skills[this.fightSequenceElement[1]].viableTarget === "allied") {
              this.idArray.forEach((coord) => {
                if (coord[0] === 0) {
                  if (this.players[coord[0]].characters[coord[1]].isInvulnerable === 0 && this.players[coord[0]].characters[coord[1]].isActive === 0) {
                    document.getElementById("" + coord[0] + coord[1]).parentNode.style.opacity = 1;
                  }
                }
              })
            } else if (this.players[0].characters[this.fightSequenceElement[0]].skills[this.fightSequenceElement[1]].viableTarget === "self") {
              document.getElementById("" + 0 + this.fightSequenceElement[0]).parentNode.style.opacity = 1;
            }
            break;

          case 1:
            if (this.players[1].characters[this.fightSequenceElement[0]].skills[this.fightSequenceElement[1]].viableTarget === "opponent") {
              this.idArray.forEach((coord) => {
                if (coord[0] === 0) {
                  if (this.players[0].characters[coord[1]].isInvulnerable === 0) {
                    document.getElementById("" + coord[0] + coord[1]).parentNode.style.opacity = 1;
                  }
                }
              })
            } else if (this.players[1].characters[this.fightSequenceElement[0]].skills[this.fightSequenceElement[1]].viableTarget === "allied") {
              this.idArray.forEach((coord) => {
                if (coord[0] === 1) {
                  if (this.players[1].characters[coord[1]].isInvulnerable === 0 && this.players[0].characters[coord[1]].isActive === 0) {
                    document.getElementById("" + coord[0] + coord[1]).parentNode.style.opacity = 1;
                  }
                }
              })
            } else if (this.players[1].characters[this.fightSequenceElement[0]].skills[this.fightSequenceElement[1]].viableTarget === "self") {
              document.getElementById("" + 1 + this.fightSequenceElement[0]).parentNode.style.opacity = 1;
            }
            break;
        }


        this.state = "choosingAvatars";
        break;

      case "avatarChosen":
        this.state = "choosingSkills";

        if (this.turn === 0) {
          this.idArray.forEach((coord) => {
            if (coord[0] === 0) {

              if (this.players[coord[0]].characters[coord[1]].isActive === 0 && this.players[coord[0]].characters[coord[1]].isInvulnerable === 0 && this.players[coord[0]].characters[coord[1]].chosenSkill === "") {

                document.getElementById("" + coord[0] + coord[1] + coord[2]).parentNode.style.opacity = 1;
              }
            }
          })
        } else if (this.turn === 1) {
          this.idArray.forEach((coord) => {
            if (coord[0] === 1) {
              if (this.players[coord[0]].characters[coord[1]].isActive === 0 && this.players[coord[0]].characters[coord[1]].isInvulnerable === 0 && this.players[coord[0]].characters[coord[1]].chosenSkill === "") {
                document.getElementById("" + coord[0] + coord[1] + coord[2]).parentNode.style.opacity = 1;
              }
            }
          })
        }
        break;
    }


  }
  /* selectedSkillsStyling() {
     //checks for stage and reacts on it with styling changes in regards to selection
     switch (this.state) {
       case "choosingSkills":
         document.getElementsByClassName("gameArea")[0].style.opacity = 1;
         for (let a = 0; a <= this.avatarTarget.length - 1; a++) {
           this.avatarTarget[a].style.opacity = 0.7;
         }
         //this.avatarTarget.forEach((avatarImg) => {
         //avatarImg.style.opacity = 0.8;
         //});
         for (let i = 0; i <= this.skillNumbers.length - 1; i++) {
           this.skillNumbers[i].style.opacity = 1;
         }
         //this.skillNumbers.forEach((skillImg) => {
         //skillImg.style.opacity = 1;
         //});
         if (this.turn === 0) {
           for (let i = 0; i <= this.skillsp1.length - 1; i++) {
             document.getElementsByClassName("p1skills")[i].style.opacity = 0.7;
           }
         } else {
           for (let i = 0; i <= this.skillsp0.length - 1; i++) {
             document.getElementsByClassName("p0skills")[i].style.opacity = 0.7;
           }
         }
         break;
 
       case "skillChosen":
         for (let s = 0; s <= this.skillNumbers.length - 1; s++) {
           this.skillNumbers[s].style.opacity = 0.8;
         }
         //this.skillNumbers.forEach((skillImg) => {
         //skillImg.style.opacity = 0.8;
         //});
         for (let i = 0; i <= this.players.length - 1; i++) {
           for (let j = 0; j <= this.players[i].characters.length - 1; j++) {
             if (this.players[i].characters[j].chosenSkill !== "") {
               document.getElementById("" + i + j + this.players[i].characters[j].chosenSkill).parentNode.style.opacity = 1;
               document.getElementById("" + i + j + this.players[i].characters[j].chosenSkill).border = "1";
               //document.getElementById("selectedSkill").src="";
             }
           }
         }
         //check availability as a valid target
         if (this.turn === 0 && this.players[0].characters[this.fightSequenceElement[0]].skills[this.fightSequenceElement[1]].viableTarget === "opponent") {
           for (let a = 0; a <= this.avatarp1.length - 1; a++) {
             this.players[1].characters.forEach((char) => {
               if (char.invulnerable !== 0) {
                 this.avatarp1[a].style.opacity = 1;
               } else { this.avatarp1[a].style.opacity = 0.7; }
             })
           }
         } else {
           for (let a = 0; a <= this.avatarp0.length - 1; a++) {
             this.avatarp0[a].style.opacity = 1;
           }
         }
 
         this.state = "choosingAvatars";
         break;
 
       case "avatarChosen":
         this.state = "choosingSkills";
         for (let i = 0; i <= this.players.length - 1; i++) {
           for (let j = 0; j <= this.players[i].characters.length - 1; j++) {
             if (this.players[i].characters[j].chosenSkill !== "") {
               document.getElementById("" + i + j + this.players[i].characters[j].chosenSkill).border = "";
             }
           }
         }
         this.updateDOM();
         break;
     }
   }*/


  addMouseOverToAllSkills() {
    for (let i = 0; i <= this.skillNumbers.length - 1; i++) {
      this.skillNumbers[i].onmouseover = () => {
        document.getElementById("mouseoverText").innerHTML = this.skillDescriptions[i];
      }
    }
  }
  addMouseOverToAllAvatars() {
    for (let i = 0; i <= this.avatarTarget.length - 1; i++) {
      this.avatarTarget[i].onmouseover = () => {
        document.getElementById("mouseoverText").innerHTML = this.avatarDescription[i];
      }
    }
  }
  addEventhandlerToAllSkills() {

    for (let i = 0; i <= this.skillNumbers.length - 1; i++) {
      this.skillNumbers[i].onclick = () => {
        if (this.state === "choosingSkills") {
          let savedSkill = this.skillNumbers[i].getElementsByTagName("img")[0].getAttribute("id");

          if (this.players[savedSkill.split("")[0]].characters[savedSkill.split("")[1]].chosenSkill === "") {
            this.players[savedSkill.split("")[0]].characters[savedSkill.split("")[1]].chosenSkill = savedSkill.split("")[2];
            this.fightSequenceElement = [];
            this.fightSequenceElement.push(savedSkill.split("")[1]);
            this.fightSequenceElement.push(savedSkill.split("")[2]);
            this.state = "skillChosen";
            this.updateDOM();
          } else { return; }
        }
      }
    }//this.choosingAvatar();
  }
  addEventhandlerToAllAvatars() {
    for (let i = 0; i <= this.avatarTarget.length - 1; i++) {
      this.avatarTarget[i].onclick = () => {
        if (this.state === "choosingAvatars") {
          let savedAvatar = this.avatarTarget[i].getElementsByTagName("img")[0].getAttribute("id");
          console.log(savedAvatar);
          this.players[savedAvatar.split("")[0]].chosenAvatar = savedAvatar.split("")[1];
          this.fightSequenceElement.push(savedAvatar.split("")[1]);
          if (this.turn === 0) {
            this.players[1].characters[parseInt(this.fightSequenceElement[2])].beeingAttacked.push({ ...this.players[0].characters[parseInt(this.fightSequenceElement[0])].skills[parseInt(this.fightSequenceElement[1])] });
          } else {
            this.players[0].characters[parseInt(this.fightSequenceElement[2])].beeingAttacked.push({ ...this.players[1].characters[parseInt(this.fightSequenceElement[0])].skills[parseInt(this.fightSequenceElement[1])] });
          }
        }
        this.fightSequence.push(this.fightSequenceElement);
        this.state = "avatarChosen";
        this.updateDOM();
      }
    }
  }

  /*whoStartsFirst() {

    this.turn = 0;

  }*/

  nextRound() {
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
    this.isActive = 0;
    this.beeingAttacked = [];
    this.beeingBuffed = [];
    this.isInvulnerable = 0;
    this.playerID = "";
    this.skills = [
      { kind: "offense", type: "damage", value: 10, rounds: 1, viableTarget: "opponent", coolDown: 1, isAvailable: 0 },
      { kind: "defense", type: "heal", value: 10, rounds: 1, viableTarget: "allied", coolDown: 1, isAvailable: 0 },
      { kind: "offense", type: "dot", value: 5, rounds: 2, viableTarget: "opponent", coolDown: 2, isAvailable: 0 },
      { kind: "defense", type: "invulnerable", value: 1, rounds: 1, viableTarget: "self", coolDown: 3, isAvailable: 0 }
    ];
  }

  recieveDamageAndTypeStateChanges(kind = "defense") {

    if (kind === "offense") {
      if (this.isActive !== 0) {
        this.isActive -= 1;
      }
      for (let i = 0; i <= this.beeingAttacked.length - 1; i++) {
        switch (this.beeingAttacked[i].type) {
          case "damage":
            this.health -= this.beeingAttacked[i].value;
            this.beeingAttacked[i].rounds -= 1;
            break;
          case "dot":
            this.health -= this.beeingAttacked[i].value;
            this.beeingAttacked[i].rounds -= 1;
            break;
          case "stun":
            this.health -= this.beeingAttacked[i].value;
            this.isActive = this.beeingAttacked[i].rounds;
            this.beeingAttacked[i].rounds -= 1;
        }
      }
      this.beeingAttacked = this.beeingAttacked.filter((skills) => { return skills.rounds > 0; });
    } else {
      for (let i = 0; i <= this.beeingAttacked.length - 1; i++) {
        switch (this.beeingAttacked[i].type) {
          case "heal":
            this.health += this.beeingAttacked[i].value;
            this.beeingAttacked[i].rounds -= 1;
            break;
          case "invulnerable":
            this.beeingAttacked = [];
            this.invulnerable = 1;
            this.beeingAttacked[i].rounds -= 1;
            this.isActive = 1;
            break;
        }
      }
      this.beeingAttacked = this.beeingAttacked.filter((skills) => { return skills.rounds > 0; });
    }
  }
}


