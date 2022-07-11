import { model, Schema } from "mongoose";
import { BASE_ARMOR, BASE_CRITICAL_STRIKE, BASE_DAMAGE, BASE_HEALTH, BASE_HIT_POINTS, BASE_MONEY, BASE_STAMINA } from "../constants/character/characterDefaultStats";
import { CHARACTER_EXPERIENCE_LVL_MULTIPLIER } from "../constants/character/characterMultipliers";
import { ICharacterModel } from "../interfaces/character/ICharacterModel";
import { ICharacterUpdateStat } from "../interfaces/character/ICharacterUpdate";
import addCharacterExperience from "../methods/character/addCharacterExperience";
import addCharacterLevelAndSetExperience from "../methods/character/addCharacterLevelAndSetExperience";
import addCharacterMoney from "../methods/character/addCharacterMoney";
import addCharacterStat from "../methods/character/addCharacterStat";
import calculateCharacterHealth from "../methods/character/calculateCharacterHealth";
import calculateCharacterStatPrice from "../methods/character/calculateCharacterStatPrice";
import setCharacterExperience from "../methods/character/setCharacterExperience";
import { createInfoMessage } from "../utils/messages/createInfoMessage";
import { validateUpdateOperator } from "../utils/validation/validateUpdateOperator";

const characterSchema = new Schema<ICharacterModel>({
  accountId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Account'
  },

  isBusy: {
    type: Boolean,
    trim: true,
    required: true,
    default: false
  },

  name: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },

  lvl: {
    type: Number,
    trim: true,
    required: true,
    default: 1
  },

  experience: {
    type: Number,
    trim: true,
    required: true,
    default: 0
  },

  money: {
    type: Number,
    trim: true,
    required: true,
    default: BASE_MONEY
  },

  health: {
    type: Number,
    trim: true,
    required: true,
    default: BASE_HEALTH
  },

  baseDamage: {
    type: Number,
    trim: true,
    required: true,
    default: BASE_DAMAGE
  },

  stamina: {
    type: Number,
    trim: true,
    required: true,
    default: BASE_STAMINA
  },

  hitPoints: {
    type: Number,
    trim: true,
    required: true,
    default: BASE_HIT_POINTS
  },

  criticalStrike: {
    type: Number,
    trim: true,
    required: true,
    default: BASE_CRITICAL_STRIKE
  },

  armor: {
    type: Number,
    trim: true,
    required: true,
    default: BASE_ARMOR
  }
});

//METHODS
//Set character health based on stats and level
characterSchema.methods.calculateHealth = function (this: ICharacterModel) {
  return calculateCharacterHealth(this);
}

//METHODS
//Add character experience
characterSchema.methods.addExperience = async function (
  this: ICharacterModel,
  experience: number
  ) {
  await addCharacterExperience(this, experience);
}

//METHODS
//Add character level and set experience
characterSchema.methods.addLevelAndSetExperience = async function (
  this: ICharacterModel,
  experience: number
  ) {
  await addCharacterLevelAndSetExperience(this, experience);
}

//METHODS
//Set character experience and level up (if level up)
characterSchema.methods.setExperience = async function (
  this: ICharacterModel,
  experience: number
  ) {
  await setCharacterExperience(this, experience);
}

//METHODS
//Set character experience
characterSchema.methods.addMoney = async function (
  this: ICharacterModel,
  money: number
  ) {
  await addCharacterMoney(this, money);
}

//METHODS
//Add character stat
characterSchema.methods.addStat = async function (
  this: ICharacterModel,
  updates: Array<ICharacterUpdateStat>
  ) {
  return await addCharacterStat(this, updates);
}

//METHODS
//Calculate character update stats price
characterSchema.methods.calculateStatPrice = function (
  this: ICharacterModel,
  updates: Array<ICharacterUpdateStat>
) {
  return calculateCharacterStatPrice(this, updates);
}

//PRE
characterSchema.pre('save', async function (next) {
  const character = this;

  //Set character health if level changed
  if (character.isModified('lvl')) {
    character.health = character.calculateHealth();
  }

  //Set character health if stamina changed
  if (character.isModified('stamina')) {
    character.health = character.calculateHealth();
  }

  next();
});

const Character = model<ICharacterModel>('Character', characterSchema);
export default Character;