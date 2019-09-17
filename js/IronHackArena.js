const skillArrBatman0 = [
  { kind: "offense", type: "damage", value: 20, rounds: 1, viableTarget: "opponent", coolDown: 1, isAvailable: 0, imgPath: "./img/batmanpunch.jpg" },
  { kind: "offense", type: "damage", value: 0, rounds: 2, viableTarget: "opponent", coolDown: 1, isAvailable: 0, imgPath: "./img/batmanbatwing.jpg" },
  { kind: "offense", type: "dot", value: 15, rounds: 2, viableTarget: "opponent", coolDown: 2, isAvailable: 0, imgPath: "./img/batmanrobin.jpg" },
  { kind: "defense", type: "invulnerable", value: 1, rounds: 1, viableTarget: "self", coolDown: 3, isAvailable: 0, imgPath: "./img/batmangrapplegun.jpg" }
];
const skillArrIronman0 = [
  { kind: "offense", type: "damage", value: 15, rounds: 1, viableTarget: "opponent", coolDown: 1, isAvailable: 0, imgPath: "./img/ironmanhandbeam.jpg" },
  { kind: "defense", type: "heal", value: 15, rounds: 1, viableTarget: "allied", coolDown: 1, isAvailable: 0, imgPath: "./img/ironmanallsuits.jpg" },
  { kind: "offense", type: "damage", value: 35, rounds: 1, viableTarget: "opponent", coolDown: 2, isAvailable: 0, imgPath: "./img/ironmanpunch.jpg" },
  { kind: "defense", type: "invulnerable", value: 1, rounds: 1, viableTarget: "self", coolDown: 3, isAvailable: 0, imgPath: "./img/ironmanheavyarmor.jpg" }
];
const skillArrSuperman0 = [
  { kind: "offense", type: "damage", value: 25, rounds: 1, viableTarget: "opponent", coolDown: 1, isAvailable: 0, imgPath: "./img/supermanpunch.jpg" },
  { kind: "offense", type: "damagedot", value: 5, rounds: 3, viableTarget: "opponent", coolDown: 2, isAvailable: 0, imgPath: "./img/supermanlasereyes.jpg" },
  { kind: "offense", type: "area", value: 10, rounds: 1, viableTarget: "opponent", coolDown: 2, isAvailable: 0, imgPath: "./img/supermanbreath.jpg" },
  { kind: "defense", type: "invulnerable", value: 1, rounds: 1, viableTarget: "self", coolDown: 3, isAvailable: 0, imgPath: "./img/supermansun.jpg" }
];
const skillArrBatman1 = [
  { kind: "offense", type: "damage", value: 20, rounds: 1, viableTarget: "opponent", coolDown: 1, isAvailable: 0, imgPath: "./img/batmanpunch.jpg" },
  { kind: "offense", type: "damage", value: 0, rounds: 2, viableTarget: "opponent", coolDown: 1, isAvailable: 0, imgPath: "./img/batmanbatwing.jpg" },
  { kind: "offense", type: "dot", value: 15, rounds: 2, viableTarget: "opponent", coolDown: 2, isAvailable: 0, imgPath: "./img/batmanrobin.jpg" },
  { kind: "defense", type: "invulnerable", value: 1, rounds: 1, viableTarget: "self", coolDown: 3, isAvailable: 0, imgPath: "./img/batmangrapplegun.jpg" }
];
const skillArrIronman1 = [
  { kind: "offense", type: "damage", value: 15, rounds: 1, viableTarget: "opponent", coolDown: 1, isAvailable: 0, imgPath: "./img/ironmanhandbeam.jpg" },
  { kind: "defense", type: "heal", value: 15, rounds: 1, viableTarget: "allied", coolDown: 1, isAvailable: 0, imgPath: "./img/ironmanallsuits.jpg" },
  { kind: "offense", type: "damage", value: 35, rounds: 1, viableTarget: "opponent", coolDown: 2, isAvailable: 0, imgPath: "./img/ironmanpunch.jpg" },
  { kind: "defense", type: "invulnerable", value: 1, rounds: 1, viableTarget: "self", coolDown: 3, isAvailable: 0, imgPath: "./img/ironmanheavyarmor.jpg" }
];
const skillArrSuperman1 = [
  { kind: "offense", type: "damage", value: 25, rounds: 1, viableTarget: "opponent", coolDown: 1, isAvailable: 0, imgPath: "./img/supermanpunch.jpg" },
  { kind: "offense", type: "damagedot", value: 5, rounds: 3, viableTarget: "opponent", coolDown: 2, isAvailable: 0, imgPath: "./img/supermanlasereyes.jpg" },
  { kind: "offense", type: "area", value: 10, rounds: 1, viableTarget: "opponent", coolDown: 2, isAvailable: 0, imgPath: "./img/supermanbreath.jpg" },
  { kind: "defense", type: "invulnerable", value: 1, rounds: 1, viableTarget: "self", coolDown: 3, isAvailable: 0, imgPath: "./img/supermansun.jpg" }
];

class IronHackGame {
  constructor(playersArray) {
    this.players = playersArray;
    this.turn = 0;
    this.state = "start";
    this.fightSequence = [];
    this.fightSequenceElement = [];
    this.savedPlayer;
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
      "Batman calls Robin, together they punch even harder! Deals 30 damage over two rounds to its target.",
      "Batman uses his grapple to get out of a fight, becomes unattackable for one turn and removes all debuffs!",
      "Ironman shoots Highenergybeam from his Hand! Dealing 15 damage to its target",
      "Ironman calls his suits to protect someone on the team. Heals an ally for 15 for 1 turn!",
      "Ironman flies really fast and punches the enemy! Deals 35 damage to his target.",
      "Ironman calls his thickest indestructable armored suit, becomes invulnerable for one turn and removes all debuffs!",
      "Superman flies towards the enemie and throws a punch. Deals 25 damage to its target.",
      "Superman uses his laserbeams from his eyes, leaving initial 15 damage and the target burns for 2 turns, 5 damage each turn!",
      "Superman blows his superhuman breath on every enemy! Deals 10 damage to all enemies.",
      "Superman flies to the sun and becomes invulnerable for one turn, removes all debuffs!",
      "Batman punches with the force of all his anger and desperation! Deals 20 damage to its target.",
      "Batman throws his Batwing and stuns for one turn!",
      "Batman calls Robin, together they punch even harder! Deals 30 damage over two rounds to its target.",
      "Batman uses his grapple to get out of a fight, becomes unattackable for one turn and removes all debuffs!",
      "Ironman shoots Highenergybeam from his Hand! Dealing 15 damage to its target",
      "Ironman calls his suits to protect someone on the team. Heals an ally for 15 for 1 turn!",
      "Ironman flies really fast and punches the enemy! Deals 35 damage to his target.",
      "Ironman calls his thickest indestructable armored suit, becomes invulnerable for one turn and removes all debuffs!",
      "Superman flies towards the enemie and throws a punch. Deals 25 damage to its target.",
      "Superman uses his laserbeams from his eyes, leaving initial 15 damage and the target burns for 2 turns, 5 damage each turn!",
      "Superman blows his superhuman breath on every enemy! Deals 10 damage to all enemies.",
      "Superman flies to the sun and becomes invulnerable for one turn, removes all debuffs!"
    ];
    this.avatarDescription = [
      "Batman has a dark past, has a cave of gadgets and fights crime!",
      "Ironman, also known as Tony Stark, is a genius engineer fighting with futuretech armored Suits!",
      "Superman, disguises himself as human in the form of Clark Kent, he comes from another planet and has superhuman skills thanks to our yellow Sun!",
      "Batman has a dark past, has a cave of gadgets and fights crime!",
      "Ironman, also known as Tony Stark, is a genius engineer fighting with futuretech armored Suits!",
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
    console.log(this.skillNumbers);
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
  checkCharactersHealth() {
    let counter;
    for (let i = 0; i <= this.players.length - 1; i++) {
      counter = 0;
      this.players[i].characters.forEach((char) => {
        if (char.health === 0) {
          counter++;
        }
      })
      if (counter === 3) {
        if (i === 0) {
          alert("Player 2 has won! Congratulation!");
        } else { alert("Player1 has won! Congratulations!") }
      }
    }
    this.state = "choosingSkills";
    game.updateDOM();
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

      document.getElementById("" + coord[0] + coord[1] + "_health").value = this.players[coord[0]].characters[coord[1]].health;
    })
    switch (this.state) {

      case "choosingSkills": //set style per turn for available skills according to char availablity and skill cooldowns
        document.getElementsByClassName("gameArea")[0].style.opacity = 1;

        if (this.turn === 0) {
          this.idArray.forEach((coord) => {
            document.getElementById("" + coord[0] + coord[1] + coord[2]).border = "none";
            document.getElementById("" + coord[0] + coord[1]).parentNode.style.opacity = 0.7;
          });
          this.idArray.forEach((coord) => {
            if (coord[0] === 0) {
              if (this.players[0].characters[coord[1]].skills[coord[2]].isAvailable === 0 && this.players[0].characters[coord[1]].chosenSkill === "" && this.players[0].characters[coord[1]].health >= 1 && this.players[0].characters[coord[1]].isActive === 0/*&& checkResources()=== true*/) {
                document.getElementById("" + coord[0] + coord[1] + coord[2]).parentNode.style.opacity = 1;
              }
            } else {
              document.getElementById("" + coord[0] + coord[1] + coord[2]).parentNode.style.opacity = 0.7;
              document.getElementById("" + coord[0] + coord[1]).parentNode.style.opacity = 0.7;
            }
          })
        } else if (this.turn === 1) {
          this.idArray.forEach((coord) => {
            document.getElementById("" + coord[0] + coord[1] + coord[2]).border = "none";
            document.getElementById("" + coord[0] + coord[1]).parentNode.style.opacity = 0.7;
          });
          this.idArray.forEach((coord) => {
            if (coord[0] === 1) {
              if (this.players[1].characters[coord[1]].skills[coord[2]].isAvailable === 0 && this.players[1].characters[coord[1]].chosenSkill === "" && this.players[1].characters[coord[1]].health >= 1 && this.players[1].characters[coord[1]].isActive === 0/*&& checkResources()=== true*/) {
                document.getElementById("" + coord[0] + coord[1] + coord[2]).parentNode.style.opacity = 1;
              }
            } else {
              document.getElementById("" + coord[0] + coord[1] + coord[2]).parentNode.style.opacity = 0.7;
            }
          })
        }
        break;

      case "skillChosen": //style per turn for chosen avatar skills available and set styling for possible targets
        for (let s = 0; s <= this.skillNumbers.length - 1; s++) {
          this.skillNumbers[s].style.opacity = 0.6;
        }
        for (let i = 0; i <= this.players.length - 1; i++) {
          for (let j = 0; j <= this.players[i].characters.length - 1; j++) {
            if (this.players[i].characters[j].chosenSkill !== "") {
              document.getElementById("" + i + j + this.players[i].characters[j].chosenSkill).parentNode.style.opacity = 1;
              document.getElementById("" + i + j + this.players[i].characters[j].chosenSkill).border = "1";

            }
          }
        }
        switch (this.turn) {
          case 0:
            if (this.players[0].characters[this.fightSequenceElement[0]].skills[this.fightSequenceElement[1]].viableTarget === "opponent") {
              this.idArray.forEach((coord) => {
                if (coord[0] === 1) {
                  if (this.players[1].characters[coord[1]].isInvulnerable === 0 && this.players[1].characters[coord[1]].health >= 1) {
                    document.getElementById("" + coord[0] + coord[1]).parentNode.style.opacity = 1;
                  }
                }
              })
            } else if (this.players[0].characters[this.fightSequenceElement[0]].skills[this.fightSequenceElement[1]].viableTarget === "allied") {
              this.idArray.forEach((coord) => {
                if (coord[0] === 0) {
                  if (this.players[coord[0]].characters[coord[1]].isInvulnerable === 0 && this.players[coord[0]].characters[coord[1]].isActive === 0 && this.players[coord[0]].characters[coord[1]].health >= 1) {
                    document.getElementById("" + coord[0] + coord[1]).parentNode.style.opacity = 1;
                  }
                }
              })
            } else if (this.players[0].characters[this.fightSequenceElement[0]].skills[this.fightSequenceElement[1]].viableTarget === "self") {
              this.idArray.forEach((coord) => {
                if (coord[0] === 0) {
                  if (this.players[coord[0]].characters[coord[1]].isInvulnerable === 0 && this.players[coord[0]].characters[coord[1]].isActive === 0) {
                    document.getElementById("" + 0 + this.fightSequenceElement[0]).parentNode.style.opacity = 1;
                  }
                }
              });
            }
            break;
          case 1:
            if (this.players[1].characters[this.fightSequenceElement[0]].skills[this.fightSequenceElement[1]].viableTarget === "opponent") {
              this.idArray.forEach((coord) => {
                if (coord[0] === 0) {
                  if (this.players[coord[0]].characters[coord[1]].isInvulnerable === 0 && this.players[coord[0]].characters[coord[1]].health >= 1) {
                    document.getElementById("" + coord[0] + coord[1]).parentNode.style.opacity = 1;
                  }
                }
              })
            } else if (this.players[1].characters[this.fightSequenceElement[0]].skills[this.fightSequenceElement[1]].viableTarget === "allied") {
              this.idArray.forEach((coord) => {
                if (coord[0] === 1) {
                  if (this.players[coord[0]].characters[coord[1]].isInvulnerable === 0 && this.players[coord[0]].characters[coord[1]].isActive === 0 && this.players[coord[0]].characters[coord[1]].health >= 1) {
                    document.getElementById("" + coord[0] + coord[1]).parentNode.style.opacity = 1;
                  }
                }
              })
            } else if (this.players[1].characters[this.fightSequenceElement[0]].skills[this.fightSequenceElement[1]].viableTarget === "self") {
              this.idArray.forEach((coord) => {
                if (coord[0] === 1) {
                  if (this.players[coord[0]].characters[coord[1]].isInvulnerable === 0 && this.players[coord[0]].characters[coord[1]].isActive === 0) {
                    document.getElementById("" + 1 + this.fightSequenceElement[0]).parentNode.style.opacity = 1;
                  }
                }
              });
            }
            break;
        }
        this.state = "choosingAvatars";
        break;

      case "avatarChosen": // reset styling and set styling to show only still available skills to choose from
        this.attackQueueVisualizer();
        this.state = "choosingSkills";
        this.idArray.forEach((coord) => {
          document.getElementById("" + coord[0] + coord[1] + coord[2]).border = "";
          document.getElementById("" + coord[0] + coord[1]).parentNode.style.opacity = 0.7;
        });
        this.idArray.forEach((coord) => {
          document.getElementsByClassName("beeingAttackedQueue" + this.players[coord[0]].characters[coord[1]].beeingAttacked)
        })
        if (this.turn === 0) {
          this.idArray.forEach((coord) => {
            if (coord[0] === 0) {

              if (this.players[coord[0]].characters[coord[1]].isActive === 0 && this.players[coord[0]].characters[coord[1]].isInvulnerable === 0 && this.players[coord[0]].characters[coord[1]].chosenSkill === "" && this.players[coord[0]].characters[coord[1]].health >= 1) {
                document.getElementById("" + coord[0] + coord[1] + coord[2]).parentNode.style.opacity = 1;
              }
            }
          })
        } else if (this.turn === 1) {
          this.idArray.forEach((coord) => {
            if (coord[0] === 1) {
              if (this.players[coord[0]].characters[coord[1]].isActive === 0 && this.players[coord[0]].characters[coord[1]].isInvulnerable === 0 && this.players[coord[0]].characters[coord[1]].chosenSkill === "" && this.players[coord[0]].characters[coord[1]].health >= 1) {
                document.getElementById("" + coord[0] + coord[1] + coord[2]).parentNode.style.opacity = 1;
              }
            }
          })
        }
        break;
    }
  }
  attackQueueVisualizer() {
    /*for (let i = 0; i <= this.players[0].characters[0].beeingAttacked.length - 1; i++) {
      console.log(this.players[0].characters[0]);
      if(this.players[0].characters[0].beeingAttacked[i] !== ""){
        html += '<div><img src="' + this.players[0].characters[0].beeingAttacked[i].imgPath + '" alt="SkillImage" style="width:30px;height:30px;" ></div>';
      }
      else {return;}
      //<img src="./img/selectedSkill.jpg" alt="selected Skill" id="005">
    }
        for(let player = 0; player < this.players.length; player++){
      for(let character = 0; character < this.players[player].characters.length; character++){
        for(let skill = 0; skill < this.players[player].characters[character].beeingAttacked.length; skill++){
          console.log(document.getElementById("beeingAttackedQueue" + player + character).innerHTML);
          if(this.players[player].characters[character].beeingAttacked != "") {
            let html="";
            html += '<div><img src="' + this.players[player].characters[character].beeingAttacked[skill].imgPath + '" alt="SkillImage" style="width:30px;height:30px;" ></div>';
            document.getElementById("beeingAttackedQueue" + player + character).innerHTML = html;
          } else {

            document.getElementById("beeingAttackedQueue" + player + character).innerHTML = "";}
        }
      }
    }*/


    for (let [playerIndex, player] of this.players.entries()) {

      for (let [characterIndex, character] of player.characters.entries()) {
        if (character.beeingAttacked.length == 0) {
          document.getElementById("beeingAttackedQueue" + playerIndex + characterIndex).innerHTML = "";
        }
        let html = "";
        for (let skill of character.beeingAttacked) {

          html += '<div><img src="' + skill.imgPath + '" alt="SkillImage" style="width:30px;height:30px;" ></div>';
        }
        document.getElementById("beeingAttackedQueue" + playerIndex + characterIndex).innerHTML = html;

      }
    }






  }
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
        let savedSkill;
        console.log(this.turn)
        if (this.state === "choosingSkills") {
          switch (this.turn) {
            case 0:
              savedSkill = this.skillNumbers[i].getElementsByTagName("img")[0].getAttribute("id");
              console.log(savedSkill);
              if (parseInt(savedSkill.split("")[0]) === 0 && this.players[parseInt(savedSkill.split("")[0])].characters[parseInt(savedSkill.split("")[1])].isActive === 0 && this.players[parseInt(savedSkill.split("")[0])].characters[parseInt(savedSkill.split("")[1])].isInvulnerable === 0) {
                if (this.players[parseInt(savedSkill.split("")[0])].characters[parseInt(savedSkill.split("")[1])].chosenSkill === "") {
                  this.players[parseInt(savedSkill.split("")[0])].characters[parseInt(savedSkill.split("")[1])].chosenSkill = savedSkill.split("")[2];
                  this.savedPlayer = "";
                  this.savedPlayer = savedSkill.split("")[0];
                  this.fightSequenceElement = [];
                  this.fightSequenceElement.push(savedSkill.split("")[1]);
                  this.fightSequenceElement.push(savedSkill.split("")[2]);
                  this.state = "skillChosen";
                  this.updateDOM();
                }
              } else { return; }
              break;

            case 1:
              savedSkill = this.skillNumbers[i].getElementsByTagName("img")[0].getAttribute("id");
              if (parseInt(savedSkill.split("")[0]) === 1 && this.players[parseInt(savedSkill.split("")[0])].characters[parseInt(savedSkill.split("")[1])].isActive === 0 && this.players[parseInt(savedSkill.split("")[0])].characters[parseInt(savedSkill.split("")[1])].skills[parseInt(savedSkill.split("")[2])].isAvailable === 0 && this.players[parseInt(savedSkill.split("")[0])].characters[parseInt(savedSkill.split("")[1])].health >= 1 && this.players[parseInt(savedSkill.split("")[0])].characters[parseInt(savedSkill.split("")[1])].isInvulnerable === 0) {
                if (this.players[parseInt(savedSkill.split("")[0])].characters[parseInt(savedSkill.split("")[1])].chosenSkill === "") {
                  this.players[parseInt(savedSkill.split("")[0])].characters[parseInt(savedSkill.split("")[1])].chosenSkill = savedSkill.split("")[2];
                  this.savedPlayer = "";
                  this.savedPlayer = savedSkill.split("")[0];
                  this.fightSequenceElement = [];
                  this.fightSequenceElement.push(savedSkill.split("")[1]);
                  this.fightSequenceElement.push(savedSkill.split("")[2]);
                  this.state = "skillChosen";
                  this.updateDOM();
                }
              } else { return; }
              break;
          }
        }
      }
    }//this.choosingAvatar();
  }
  addEventhandlerToAllAvatars() {
    for (let i = 0; i <= this.avatarTarget.length - 1; i++) {
      this.avatarTarget[i].onclick = () => {
        let savedAvatar;
        if (this.state === "choosingAvatars") {
          switch (this.turn) {
            case 0:
              savedAvatar = this.avatarTarget[i].getElementsByTagName("img")[0].getAttribute("id");
              if (parseInt(savedAvatar.split("")[0]) === 1 && this.players[0].characters[parseInt(this.fightSequenceElement[0])].skills[parseInt(this.fightSequenceElement[1])].viableTarget === "opponent" && this.players[0].characters[parseInt(this.fightSequenceElement[0])].skills[parseInt(this.fightSequenceElement[1])].type === "area" && this.players[1].characters[parseInt(savedAvatar.split("")[1])].isInvulnerable === 0 && this.players[1].characters[parseInt(savedAvatar.split("")[1])].health >= 1) {
                this.fightSequenceElement.push(savedAvatar.split("")[1]);
                for (let availableTarget = 0; availableTarget < this.players[1].characters.length; availableTarget++) {
                  if (this.players[1].characters[availableTarget].isInvulnerable === 0) {
                    this.players[1].characters[availableTarget].beeingAttacked.push({ ...this.players[0].characters[parseInt(this.fightSequenceElement[0])].skills[parseInt(this.fightSequenceElement[1])] });
                  }
                }
              }
              else if (parseInt(savedAvatar.split("")[0]) === 1 && this.players[0].characters[parseInt(this.fightSequenceElement[0])].skills[parseInt(this.fightSequenceElement[1])].viableTarget === "opponent" && this.players[1].characters[parseInt(savedAvatar.split("")[1])].isInvulnerable === 0 && this.players[1].characters[parseInt(savedAvatar.split("")[1])].health >= 1) {
                this.fightSequenceElement.push(savedAvatar.split("")[1]);
                this.players[1].characters[parseInt(this.fightSequenceElement[2])].beeingAttacked.push({ ...this.players[0].characters[parseInt(this.fightSequenceElement[0])].skills[parseInt(this.fightSequenceElement[1])] });
              } else if (parseInt(savedAvatar.split("")[0]) === 0 && this.players[0].characters[parseInt(this.fightSequenceElement[0])].skills[parseInt(this.fightSequenceElement[1])].viableTarget === "allied" && this.players[0].characters[parseInt(savedAvatar.split("")[1])].isInvulnerable === 0 && this.players[0].characters[parseInt(savedAvatar.split("")[1])].health >= 1) {
                this.fightSequenceElement.push(savedAvatar.split("")[1]);
                this.players[0].characters[parseInt(this.fightSequenceElement[2])].beeingAttacked.push({ ...this.players[0].characters[parseInt(this.fightSequenceElement[0])].skills[parseInt(this.fightSequenceElement[1])] });
              } else if (parseInt(savedAvatar.split("")[0]) === 0 && this.players[0].characters[parseInt(this.fightSequenceElement[0])].skills[parseInt(this.fightSequenceElement[1])].viableTarget === "self" && this.players[0].characters[parseInt(savedAvatar.split("")[1])].isActive === 0 && this.players[0].characters[parseInt(savedAvatar.split("")[1])].health >= 1 && this.players[0].characters[parseInt(this.fightSequenceElement[0])] === this.players[0].characters[parseInt(savedAvatar.split("")[1])]) {
                this.fightSequenceElement.push(savedAvatar.split("")[1]);
                this.players[0].characters[parseInt(this.fightSequenceElement[2])].beeingAttacked.push({ ...this.players[0].characters[parseInt(this.fightSequenceElement[0])].skills[parseInt(this.fightSequenceElement[1])] });
                this.attackQueueVisualizer()
                this.players[0].characters[parseInt(this.fightSequenceElement[2])].recieveDamageAndTypeStateChanges();
              } else {
                this.players[parseInt(this.savedPlayer)].characters[parseInt(this.fightSequenceElement[0])].chosenSkill = "";
                this.state = "choosingSkills";
                this.updateDOM();
              }
              this.fightSequence.push(this.fightSequenceElement);
              this.state = "avatarChosen";
              this.updateDOM();
              break;
            case 1:
              savedAvatar = this.avatarTarget[i].getElementsByTagName("img")[0].getAttribute("id");
              if (parseInt(savedAvatar.split("")[0]) === 0 && this.players[1].characters[parseInt(this.fightSequenceElement[0])].skills[parseInt(this.fightSequenceElement[1])].viableTarget === "opponent" && this.players[1].characters[parseInt(this.fightSequenceElement[0])].skills[parseInt(this.fightSequenceElement[1])].type === "area" && this.players[0].characters[parseInt(savedAvatar.split("")[1])].isInvulnerable === 0 && this.players[0].characters[parseInt(savedAvatar.split("")[1])].health >= 1) {
                this.fightSequenceElement.push(savedAvatar.split("")[1]);
                for (let availableTarget = 0; availableTarget < this.players[0].characters.length; availableTarget++) {
                  if (this.players[0].characters[availableTarget].isInvulnerable === 0) {
                    this.players[0].characters[availableTarget].beeingAttacked.push({ ...this.players[1].characters[parseInt(this.fightSequenceElement[0])].skills[parseInt(this.fightSequenceElement[1])] });
                  }
                }
              }
              else if (parseInt(savedAvatar.split("")[0]) === 0 && this.players[1].characters[parseInt(this.fightSequenceElement[0])].skills[parseInt(this.fightSequenceElement[1])].viableTarget === "opponent" && this.players[0].characters[parseInt(savedAvatar.split("")[1])].isInvulnerable === 0 && this.players[0].characters[parseInt(savedAvatar.split("")[1])].health >= 1) {
                this.fightSequenceElement.push(savedAvatar.split("")[1]);
                this.players[0].characters[parseInt(this.fightSequenceElement[2])].beeingAttacked.push({ ...this.players[1].characters[parseInt(this.fightSequenceElement[0])].skills[parseInt(this.fightSequenceElement[1])] });
              } else if (parseInt(savedAvatar.split("")[0]) === 1 && this.players[1].characters[parseInt(this.fightSequenceElement[0])].skills[parseInt(this.fightSequenceElement[1])].viableTarget === "allied" && this.players[1].characters[parseInt(savedAvatar.split("")[1])].isInvulnerable === 0 && this.players[1].characters[parseInt(savedAvatar.split("")[1])].health >= 1) {
                this.fightSequenceElement.push(savedAvatar.split("")[1]);
                this.players[1].characters[parseInt(this.fightSequenceElement[2])].beeingAttacked.push({ ...this.players[0].characters[parseInt(this.fightSequenceElement[0])].skills[parseInt(this.fightSequenceElement[1])] });
              } else if (parseInt(savedAvatar.split("")[0]) === 1 && this.players[1].characters[parseInt(this.fightSequenceElement[0])].skills[parseInt(this.fightSequenceElement[1])].viableTarget === "self" && this.players[1].characters[parseInt(savedAvatar.split("")[1])].isActive === 0 && this.players[1].characters[parseInt(savedAvatar.split("")[1])].health >= 1 && this.players[1].characters[parseInt(this.fightSequenceElement[0])] === this.players[1].characters[parseInt(savedAvatar.split("")[1])]) {
                this.fightSequenceElement.push(savedAvatar.split("")[1]);
                this.players[1].characters[parseInt(this.fightSequenceElement[2])].beeingAttacked.push({ ...this.players[1].characters[parseInt(this.fightSequenceElement[0])].skills[parseInt(this.fightSequenceElement[1])] });
                this.players[1].characters[parseInt(this.fightSequenceElement[2])].recieveDamageAndTypeStateChanges();
              } else {
                this.players[parseInt(this.savedPlayer)].characters[parseInt(this.fightSequenceElement[0])].chosenSkill = "";
                this.state = "choosingSkills";
                this.updateDOM();
              }
              this.fightSequence.push(this.fightSequenceElement);
              this.state = "avatarChosen";
              this.updateDOM();
              break;
          }
        }
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
  constructor(spielerName, charArray) {
    this.playerName = spielerName;
    this.characters = charArray;
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
  constructor(name, inhaltdesSkillArrays) {
    this.charName = name;
    this.health = 100;
    this.chosenSkill = "";
    this.isActive = 0;
    this.beeingAttacked = [];
    this.beeingBuffed = [];
    this.isInvulnerable = 0;
    this.playerID = "";
    this.skills = inhaltdesSkillArrays;
  }

  recieveDamageAndTypeStateChanges(kind = "defense") {

    if (kind === "offense") {
      if (this.isInvulnerable != 0) {
        this.beeingAttacked = [];
      }
      if (this.isActive !== 0) {
        this.isActive -= 1;
      }
      if (this.isInvulnerable !== 0) {
        this.isInvulnerable -= 1;
      }
      if (this.skills[3].isAvailable !== 0) {
        this.skills[3].isAvailable -= 1;
      }
      for (let i = 0; i <= this.beeingAttacked.length - 1; i++) {
        switch (this.beeingAttacked[i].type) {
          case "damage":
            this.health -= this.beeingAttacked[i].value;
            this.beeingAttacked[i].rounds -= 1;
            this.isActive += this.beeingAttacked[i].rounds;

            break;
          case "damagedot":
            this.beeingAttacked[i].type = "dot"
            this.health -= (this.beeingAttacked[i].value * 3);
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

            break;
          case "area":
            this.health -= this.beeingAttacked[i].value;
            this.beeingAttacked[i].rounds -= 1;

            break;
        }
      }
      this.beeingAttacked = this.beeingAttacked.filter((skills) => { return skills.rounds > 0; });
    } else {

      for (let i = 0; i <= this.beeingAttacked.length - 1; i++) {
        if (this.beeingAttacked[i].type === "invulnerable") {
          this.isInvulnerable = this.beeingAttacked[i].rounds;
          this.isActive += this.beeingAttacked[i].rounds;
          this.beeingAttacked = [];
          this.skills[3].isAvailable = this.skills[3].coolDown;
        } else {
          switch (this.beeingAttacked[i].type) {
            case "heal":
              this.health += this.beeingAttacked[i].value;
              this.beeingAttacked[i].rounds -= 1;

              break;
          }
        }

      }
      this.beeingAttacked = this.beeingAttacked.filter((skills) => { return skills.rounds > 0; });
    }
  }
}


