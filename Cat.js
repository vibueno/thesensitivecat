/**
 * @module Cat
 */

import { FEELINGS, FEELING_STATES } from './constants.js';

/**
 * @class
 * @description Cat.
 *
 * @property {String} _name         Name of the cat.
 * @property {Number} _increaseStep Default amount of feeling units to be increased per action.
 * @property {Number} _happiness    Current hapiness level of the cat.
 * @property {Number} _hunger       Current hunger level of the cat.
 * @property {Number} _loneliness   Current loneliness level of the cat.
 * @property {Number} _tiredness    Current tiredness level of the cat.
 */
export class Cat {
  /**
   * @constructor
   * @description Creates a new Cat.
   *
   * @param {String} name Name of the cat
   */
  constructor(name) {
    this._name = name;
    this._increaseStep = 5;

    this._happiness = 5;
    this._hunger = 5;
    this._loneliness = 5;
    this._tiredness = 5;
  }

  /**
   * @description Feed cat
   *
   * @param {Number} units Amount of food
   */
  feed(units) {
    if (typeof units === 'undefined') {
      this._hunger -= this._increaseStep;
      this._tiredness += this._increaseStep;
    } else {
      this._hunger -= units;
      this._tiredness += units;
    }
  }

  /**
   * @description Give milk to cat
   *
   * @param {Number} units Quantity of milk
   */
  giveMilk(units) {
    if (typeof units === 'undefined') {
      this._happiness += this._increaseStep;
      this._hunger -= this._increaseStep;
    } else {
      this._happiness -= units;
      this._hunger += units;
    }
  }

  /**
   * @description Make cat catch mice
   *
   * @param {Number} units Amount of mice
   */
  catchMice(units) {
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

  /**
   * @description Pet cat
   *
   * @param {Number} units Intensity of the petting
   */
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

  /**
   * @description Put the cat to sleep
   *
   * @param {Number} units Amount of sleep
   */
  sleep(units) {
    if (typeof units === 'undefined') {
      this._happiness += this._increaseStep;
      this._tiredness -= this._increaseStep;
    } else {
      this._happiness += units;
      this._tiredness -= units;
    }
  }

  /**
   * @description Returns cat's feeling description
   *
   * @param {String} feeling Feeling which from to get state description
   * @return {String} Feeling state description
   */
  getFeelingState(feeling) {
    let state = Math.max(
      Math.min(
        this['_' + feeling] / FEELING_STATES[feeling].length,
        FEELING_STATES[feeling].length - 1
      ),
      0
    );

    return FEELING_STATES[feeling][state];
  }

  /**
   * @description Returns cat's tiredness state description
   *
   * @return {String} Tiredness state description
   */
  getTirednessState() {
    return this.getFeelingState(FEELINGS.tiredness);
  }

  /**
   * @description Returns cat's hunger description
   *
   * @return {String} Hunger state description
   */
  getHungerState() {
    return this.getFeelingState(FEELINGS.hunger);
  }

  /**
   * @description Returns cat's loneliness state description
   *
   * @return {String} Loneliness state description
   */
  getLonelinessState() {
    return this.getFeelingState(FEELINGS.loneliness);
  }

  /**
   * @description Returns cat's hapiness state description
   *
   * @return {String} Hapiness state description
   */
  getHapinessState() {
    return this.getFeelingState(FEELINGS.hapiness);
  }
}
