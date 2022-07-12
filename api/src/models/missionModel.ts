import { model, Schema } from "mongoose";
import { IMissionModel } from "../interfaces/mission/IMissionModel";

const missionSchema = new Schema<IMissionModel>({
  characterId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Character'
  },

  isCompleted: {
    type: Boolean,
    trim: true,
    required: true,
    default: false
  },

  startUnixTime: {
    type: Number,
    trim: true,
    required: true
  },

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
  },
}, {
  timestamps: true
});

const Mission = model<IMissionModel>('Mission', missionSchema);
export default Mission;