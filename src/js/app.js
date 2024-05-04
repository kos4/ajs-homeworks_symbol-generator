function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Team {
  constructor(count) {
    this.from = 1;
    this.to = count;
    this.characters = [
      {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 25,
        defence: 25,
      },
      {
        name: 'Мечник',
        type: 'Swordsman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Волшебник',
        type: 'Magician',
        health: 50,
        level: 1,
        attack: 10,
        defence: 40,
      },
    ];
  }

  * [Symbol.iterator]() {
    for (let i = this.from; i <= this.to; i += 1) {
      yield this.characters[getRandomInRange(0, this.characters.length - 1)];
    }
  }
}

const team = new Team(3);
for (const char of team) {
  console.log(char);
}
