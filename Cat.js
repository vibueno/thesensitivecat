const feelings = {
  tiredness: 'tiredness',
  hunger: 'hunger',
  loneliness: 'loneliness',
  hapiness: 'hapiness'
};

const feelingStates = {
  tiredness: [
    'Awwwwwww toooo much energyyyyyyyy',
    'I just cannot sleep mooooooreeee!',
    'I am feeling good!',
    'A nap would be nice...',
    'I really feel like that time I was taking antidepresants...',
    'My heart just stopped beating'
  ],

  hunger: [
    '10 seconds until explosion...',
    'Oh God my belly hurts.',
    "Isn't it awesome, when you feel full?!",
    'mmmm when is it lunch time again?',
    'OMG... my life for a can of tuna',
    'Where is the fucking fridge!!!!'
  ],

  loneliness: [
    'I am feeling very antisocial!!',
    'I really could have some time for myself.',
    "It's nice when you have humans around.",
    'Where did everyone go?',
    'Why does no one love me????',
    "I'd sell my sould to the devil right now, if he fancied a chat."
  ],

  hapiness: [
    "I don't kill mylsef right now, because I am too lazy.",
    'Do you feel so sad too??',
    'Life is actually alright.',
    "Hey dude! What's up? What a day huh?",
    'And I think to myself: what a wonderful woooorld!',
    'I looooooooooooooooooooooo you all'
  ]
};

export class Cat {
  constructor(name) {
    this._name = name;
    this._increaseStep = 5;

    this._happiness = 5;
    this._hunger = 5;
    this._loneliness = 5;
    this._tiredness = 5;
  }

  feed(units) {
    if (typeof units === 'undefined') {
      this._hunger -= this._increaseStep;
      this._tiredness += this._increaseStep;
    } else {
      this._hunger -= units;
      this._tiredness += units;
    }
  }

  giveMilk(units) {
    if (typeof units === 'undefined') {
      this._happiness += this._increaseStep;
      this._hunger -= this._increaseStep;
    } else {
      this._happiness -= units;
      this._hunger += units;
    }
  }

  catchMouse(units) {
    if (typeof units === 'undefined') {
      this._happiness += this._increaseStep;
      this._hunger -= this._increaseStep;
      this._loneliness += this._increaseStep;
      this._tiredness += this._increaseStep;
    } else {
      this._happiness += units;
      this._hunger -= units;
      this._loneliness += units;
      this._tiredness += units;
    }
  }

  pet(units) {
    if (typeof units === 'undefined') {
      this._happiness += this._increaseStep;
      this._loneliness -= this._increaseStep;
      this._tiredness += this._increaseStep;
    } else {
      this._happiness += units;
      this._loneliness -= units;
      this._tiredness += units;
    }
  }

  sleep(units) {
    if (typeof units === 'undefined') {
      this._happiness += this._increaseStep;
      this._tiredness -= this._increaseStep;
    } else {
      this._happiness += units;
      this._tiredness -= units;
    }
  }

  getFeelingState(feeling) {
    let state = Math.max(
      Math.min(
        this['_' + feeling] / feelingStates[feeling].length,
        feelingStates[feeling].length - 1
      ),
      0
    );

    return feelingStates[feeling][state];
  }

  getTirednessState() {
    return this.getFeelingState(feelings.tiredness);
  }

  getHungerState() {
    return this.getFeelingState(feelings.hunger);
  }

  getLonelinessState() {
    return this.getFeelingState(feelings.loneliness);
  }

  getHapinessState() {
    return this.getFeelingState(feelings.hapiness);
  }
}
