/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';
import Legacy from "./legacyModel"
// import { categoriesSchema } from './categoriesModel';
import { dataSchema } from './dataModel';

const { Schema } = mongoose;

const simsSchema = new Schema({
  generation: {
    type: Number,
    required: [true, 'Generation is required']
  },
  firstName: {
    type: String,
    required: [true, 'First name is required']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required']
  },
  gender: {
    type: String,
    enum: {
      values: ['Male', 'Female'],
      message: '{VALUE} is not a supported gender'
    },
    required: [true, 'Gender is required']
  },
  role: {
    text: String,
    legacy: Boolean,
    runningForRuler: Boolean,
    eligible: Boolean
  },
  adopted: {
    type: Boolean,
    default: false
  },
  species: { type: dataSchema },
  status: {
    type: String,
    enum: {
      values: ['Alive, in legacy household', 'Alive, not in legacy household', 'Dead'],
      message: '{VALUE} is not a supported status'
    },
    default: 'Alive, in legacy household'
  },
  causeOfDeath: { type: dataSchema },
  relations: {
    mother: {
      type: Schema.Types.Mixed,
      default: null
    },
    father: {
      type: Schema.Types.Mixed,
      default: null
    },
    partner: {
      type: Schema.Types.Mixed,
      default: null
    }
  },
  traits: Array,
  aspirations: Array
});

// simsSchema.post("remove", (document) => {
//   const simID = document._id;
  
// });

export default mongoose.model('Sims', simsSchema, 'sims');
