class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }
  addGoal(peak, altitude) {
    if (this.goals.hasOwnProperty(peak)) {
      return `${peak} has already been added to your goals`;
    } else {
      this.goals[peak] = altitude;
      return `You have successfully added a new goal - ${peak}`;
    }
  }
  hike(peak, time, difficultyLevel) {
    if (!this.goals.hasOwnProperty(peak)) {
      throw new Error(`${peak} is not in your current goals`);
    } else if (this.resources <= 0) {
      throw new Error("You don't have enough resources to start the hike");
    } else if (this.resources - time * 10 < 0) {
      return "You don't have enough resources to complete the hike";
    } else {
      this.resources -= time * 10;
      this.listOfHikes.push({ peak, time, difficultyLevel });
      return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }
  }
  rest(time) {
    let plusRest = time * 10;
    if (this.resources + plusRest >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    } else {
      this.resources += plusRest;
      return `You have rested for ${time} hours and gained ${
        time * 10
      }% resources`;
    }
  }
  showRecord(criteria) {
    let best = 0;
    let bestN = "";
    let done = false;
    if (this.listOfHikes.length <= 0) {
      return `${this.username} has not done any hiking yet`;
    }
    switch (criteria) {
      case "all":
        let out = `All hiking records:\n`;
        for (let i = 0; i < this.listOfHikes.length; i++) {
          if (this.listOfHikes.length - i === 1) {
            out += `${this.username} hiked ${this.listOfHikes[i].peak} for ${this.listOfHikes[i].time} hours`;
          } else {
            out += `${this.username} hiked ${this.listOfHikes[i].peak} for ${this.listOfHikes[i].time} hours\n`;
          }
        }
        return out;
      case "hard":
        for (let el of this.listOfHikes) {
          if (el.difficultyLevel !== "hard") {
            continue;
          }
          if (Number(el.time) > best) {
            done = true;
            best = Number(el.time);
            bestN = el.peak;
          }
        }
        if (done) {
          return `${this.username}'s best ${criteria} hike is ${bestN} peak, for ${best} hours`;
        }
        return `${this.username} has not done any ${criteria} hiking yet`;
      case "easy":
        for (let el of this.listOfHikes) {
          if (el.difficultyLevel !== "easy") {
            continue;
          }
          if (Number(el.time) > best) {
            done = true;
            best = Number(el.time);
            bestN = el.peak;
          }
        }
        if (done) {
          return `${this.username}'s best ${criteria} hike is ${bestN} peak, for ${best} hours`;
        } else {
          return `${this.username} has not done any ${criteria} hiking yet`;
        }
    }
  }
}

const user = new SmartHike("Vili");
user.addGoal("Musala", 2925);
user.hike("Musala", 8, "hard");
console.log(user.showRecord("easy"));
user.addGoal("Vihren", 2914);
user.hike("Vihren", 4, "hard");
console.log(user.showRecord("hard"));
user.addGoal("Rui", 1706);
user.hike("Rui", 3, "easy");
console.log(user.showRecord("all"));
