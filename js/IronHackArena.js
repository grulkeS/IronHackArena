
class IronHackGame {
  constructor() {
    this.players = [
      new Player,
      new Player
    ];
  }
}

class Player {
  constructor() {
    this.characters = [
      new Char("Captain SuperDoom"),
      new Char("Hero 74"),
      new Char("HugMe")
    ];
    this.status = "";
    this.resources = {
      red: 1,
      yellow: 1,
      blue: 1,
      white: 1,
      neutral: this.red + this.yellow + this.blue + this.white
    }
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
    this.skills = [{
      damage: 10
    }, {
      healSomeOne: 10
    }, {
      damageOverTime: [5, 1]
    }, {
      invul: true
    }];
  }
}


