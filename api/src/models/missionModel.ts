import { model, Schema } from "mongoose";
import { ICharacterModel } from "../interfaces/character/ICharacterModel";
import { IMissionModel } from "../interfaces/mission/IMissionModel";
import finishMission from "../methods/mission/finishMission";
import generateMissionEnemy from "../methods/mission/generateMissionEnemy";

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

  isSuccess: {
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

  finishUnixTime: {
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

//VIRTUAL
//Enemy
missionSchema.virtual('enemyRef', {
  ref: 'Enemy',
  localField: '_id',
  foreignField: 'missionId'
});


//METHODS
//Finish Mission
missionSchema.methods.finishMission = async function (
  this: IMissionModel, 
  isSuccess: boolean
) {
  return await finishMission(this, isSuccess);
}

//METHODS
//Generate Enemy
missionSchema.methods.generateEnemy = async function (
  this: IMissionModel,
  character: ICharacterModel
) {
  return await generateMissionEnemy(this, character);
}

const Mission = model<IMissionModel>('Mission', missionSchema);
export default Mission;