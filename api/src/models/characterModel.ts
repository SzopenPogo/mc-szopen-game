import { model, Schema } from "mongoose";
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
    required: true
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

  health: {
    type: Number,
    trim: true,
    required: true,
    default: 100
  },

  baseDamage: {
    type: Number,
    trim: true,
    required: true,
    default: 10
  },

  stamina: {
    type: Number,
    trim: true,
    required: true,
    default: 1
  },

  hitPoints: {
    type: Number,
    trim: true,
    required: true,
    default: 1
  },

  criticalStrike: {
    type: Number,
    trim: true,
    required: true,
    default: 1
  },

  armor: {
    type: Number,
    trim: true,
    required: true,
    default: 1
  }
});

const Character = model<ICharacterModel>('Character', characterSchema);
export default Character;