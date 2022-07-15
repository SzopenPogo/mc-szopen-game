import { model, Schema } from "mongoose";
import { ICharacterModel } from "../interfaces/character/ICharacterModel";
import { IEnemyModel } from "../interfaces/enemy/IEnemyModel";
import calculateEnemyDamage from "../methods/enemy/calculateEnemyDamage";
import calculateEnemyHealth from "../methods/enemy/calculateEnemyHealth";
import calculateEnemyLevel from "../methods/enemy/calculateEnemyLevel";
import dealEnemyDamage from "../methods/enemy/dealEnemyDamage";
import fightEnemy from "../methods/enemy/fightEnemy";
import setEnemyData from "../methods/enemy/setEnemyData";
import setEnemyDefeated from "../methods/enemy/setEnemyDefeated";

const enemySchema = new Schema<IEnemyModel>({
  missionId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Mission'
  },

  isDefeated: {
    type: Boolean,
    required: true,
    default: false
  },

  name: {
    type: String,
    required: true,
    trim: true
  },

  level: {
    type: Number,
    required: true,
    trim: true
  },

  health: {
    type: Number,
    required: true,
    trim: true
  },

  minDamage: {
    type: Number,
    required: true,
    trim: true
  },

  maxDamage: {
    type: Number,
    required: true,
    trim: true
  },

  combatLog: [{
    characterHealth: {
      type: Number,
      required: true,
      trim: true
    },

    characterDamage: {
      type: Number,
      required: true,
      trim: true
    },

    enemyHealth: {
      type: Number,
      required: true,
      trim: true
    },

    enemyDamage: {
      type: Number,
      required: true,
      trim: true
    },
  }]
});

//METHODS
//Set data (name, hp, lvl, dmg) nad save it
enemySchema.methods.setData = function (
  this: IEnemyModel,
  characterHealth: number,
  characterLvl: number,
  characterDamage: number
) {
  return setEnemyData(
    this, 
    characterHealth,
    characterLvl,
    characterDamage
  );
}

//METHODS
//Calculate health (based on character health)
enemySchema.methods.calculateHealth = function (
  characterHealth: number
) {
  return calculateEnemyHealth(characterHealth);
}

//METHODS
//Calculate level (based on character lvl)
enemySchema.methods.calculateLevel = function (
  characterLvl: number
) {
  return calculateEnemyLevel(characterLvl);
}

//METHODS
//Calculate damage (based on character damage)
enemySchema.methods.calculateDamage = function (
  characterDamage: number
) {
  return calculateEnemyDamage(characterDamage);
}

//METHODS
//Deal damage
enemySchema.methods.dealDamage = function (
  this: IEnemyModel
) {
  return dealEnemyDamage(this);
}

//METHODS
//Fight
enemySchema.methods.fight = async function (
  this: IEnemyModel,
  character: ICharacterModel
) {
  return await fightEnemy(this, character);
}

//METHODS
//Set defeated
enemySchema.methods.setDefeated = async function (
  this: IEnemyModel
) {
  return await setEnemyDefeated(this);
}


const Enemy = model<IEnemyModel>('Enemy', enemySchema);
export default Enemy;