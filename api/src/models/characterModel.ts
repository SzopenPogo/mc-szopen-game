import { model, Schema } from "mongoose";
import { BASE_ARMOR, BASE_CRITICAL_STRIKE, BASE_DAMAGE, BASE_HEALTH, BASE_HIT_POINTS, BASE_MONEY, BASE_STAMINA } from "../constants/character/characterDefaultStats";
import { CHARACTER_EXPERIENCE_LVL_MULTIPLIER } from "../constants/character/characterMultipliers";
import { ICharacterModel } from "../interfaces/character/ICharacterModel";

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
characterSchema.methods.setHealth = async function (this: ICharacterModel) {
  const character = this;

  const characterStamina = character.stamina;
  const characterLevel = character.lvl;

  const staminaHealthValue = +((BASE_HEALTH / 10) * characterStamina).toFixed();
  const levelHealthValue = +(BASE_HEALTH * characterLevel).toFixed();

  character.health = levelHealthValue + staminaHealthValue;
  await character.save();
}

//METHODS
//Add character experience
characterSchema.methods.addExperience = async function (
  this: ICharacterModel,
  experience: number
  ) {
  const character = this;
  
  const characterExperience = character.experience;
  const characterLevel = character.lvl;

  const experienceToLevelUp = characterLevel * CHARACTER_EXPERIENCE_LVL_MULTIPLIER
  const isNextLevel = characterExperience + experience >= experienceToLevelUp;

  const experienceOnNextLevel = (characterLevel + 1) * CHARACTER_EXPERIENCE_LVL_MULTIPLIER

  if(isNextLevel && experience > experienceOnNextLevel) {
    const remainingExperience = experience - experienceOnNextLevel;

    await character.addLevelAndSetExperience(remainingExperience);
    //Recursion (addExperience)
    return await character.addExperience(remainingExperience);
  }

  if(isNextLevel) {
    const remainingExperience = experience - experienceToLevelUp;
    return await character.addLevelAndSetExperience(remainingExperience);
  }
  
  await character.setExperience(experience);

  //Everything is saved in addLevelAndSetExperience and  setExperience functions;
}

//METHODS
//Add character level and set experience
characterSchema.methods.addLevelAndSetExperience = async function (
  this: ICharacterModel,
  experience: number
  ) {
  const character = this;

  character.lvl += 1;
  character.experience = experience

  await character.save();
}

//METHODS
//Set character experience
characterSchema.methods.setExperience = async function (
  this: ICharacterModel,
  experience: number
  ) {
  const character = this;
  character.experience = experience

  await character.save();
}

//METHODS
//Set character experience
characterSchema.methods.addMoney = async function (
  this: ICharacterModel,
  money: number
  ) {
  const character = this;
  character.money += money;

  await character.save();
}


//PRE
//Set character health if level or stamina changed
characterSchema.pre('save', async function (next) {
  const character = this;
  if (character.isModified('lvl')) {
    await character.setHealth();
  }

  if (character.isModified('stamina')) {
    await character.setHealth();
  }

  next();
});

const Character = model<ICharacterModel>('Character', characterSchema);
export default Character;