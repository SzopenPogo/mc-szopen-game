import { model, Schema } from "mongoose";
import { BASE_ARMOR, BASE_CRITICAL_STRIKE, BASE_DAMAGE, BASE_HEALTH, BASE_HIT_POINTS, BASE_MONEY, BASE_STAMINA } from "../constants/character/characterDefaultStats";
import calculateCharacterCriticalStrikeChance from "../methods/character/calculateCharacterCriticalStrikeChance";
import { ICharacterModel } from "../interfaces/character/ICharacterModel";
import { ICharacterUpdateStat } from "../interfaces/character/ICharacterUpdate";
import addCharacterExperience from "../methods/character/addCharacterExperience";
import addCharacterLevelAndSetExperience from "../methods/character/addCharacterLevelAndSetExperience";
import addCharacterMoney from "../methods/character/addCharacterMoney";
import addCharacterStat from "../methods/character/addCharacterStat";
import calculateCharacterDamage from "../methods/character/calculateCharacterDamage";
import calculateCharacterHealth from "../methods/character/calculateCharacterHealth";
import calculateCharacterStatPrice from "../methods/character/calculateCharacterStatPrice";
import dealCharacterCriticalDamage from "../methods/character/dealCharacterCriticalDamage";
import setCharacterBaseDamage from "../methods/character/setCharacterBaseDamage";
import setCharacterBusy from "../methods/character/setCharacterBusy";
import setCharacterExperience from "../methods/character/setCharacterExperience";
import dealCharacterDamage from "../methods/character/dealCharacterDamage";
import takeCharacterDamage from "../methods/character/takeCharacterDamage";
import { IMissionData } from "../interfaces/mission/IMissionData";
import setCharacterActiveMissions from "../methods/character/setCharacterActiveMissions";

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

  damage: {
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
  },

  activeMissions: [{
    name: {
      type: String,
      trim: true,
      required: true
    },
  
    description: {
      type: String,
      trim: true,
      required: true,
      max: 350
    },
  
    reward: {
      money: {
        type: Number,
        trim: true,
        required: false
      },
      experience: {
        type: String,
        trim: true,
        required: false
      }
    },
  
    durationInSecounds: {
      type: Number,
      trim: true,
      required: true
    }
  }]
});

//VIRTUAL
//Character
characterSchema.virtual('missionRef', {
  ref: 'Mission',
  localField: '_id',
  foreignField: 'characterId'
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

//METHODS
//Calculate critical strike chance
characterSchema.methods.calculateCriticalStrikeChance = function (
  this: ICharacterModel
) {
  return calculateCharacterCriticalStrikeChance(this);
}

//METHODS
//Deal critical damage
characterSchema.methods.dealCriticalDamage = function (
  this: ICharacterModel
) {
  return dealCharacterCriticalDamage(this);
}

//METHODS
//Calculate damage
characterSchema.methods.calculateDamage = function (
  this: ICharacterModel
) {
  return calculateCharacterDamage(this);
}

//METHODS
//Set base damage
characterSchema.methods.setBaseDamage = async function (
  this: ICharacterModel,
  value: number
) {
  return await setCharacterBaseDamage(this, value);
}

//ADD DEAL NORMAL DAMAGE

//METHODS
//Change character isBusy status
characterSchema.methods.setBusy = async function (
  this: ICharacterModel,
  status: boolean
) {
  return await setCharacterBusy(this, status);
}

//METHODS
//Deal damage
characterSchema.methods.dealDamage = function (
  this: ICharacterModel
) {
  return dealCharacterDamage(this);
}

//METHODS
//Take damage
characterSchema.methods.takeDamage = function (
  this: ICharacterModel,
  damage: number
) {
  return takeCharacterDamage(this, damage);
}

//METHODS
//Set active missions. If missions array is empty then reset active missions
characterSchema.methods.setActiveMissions = async function (
  this: ICharacterModel,
  missions: Array<IMissionData>
) {
  return await setCharacterActiveMissions(this, missions);
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

  //Set character damage if hit points changed
  if (character.isModified('hitPoints')) {
    character.damage = character.calculateDamage();
  }

  //Set character damage if base damage changed
  if (character.isModified('baseDamage')) {
    character.damage = character.calculateDamage();
  }

  next();
});

const Character = model<ICharacterModel>('Character', characterSchema);
export default Character;