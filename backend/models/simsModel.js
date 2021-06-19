import mongoose from 'mongoose';
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
      values: ['Male', 'Female', 'Other'],
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
      type: Schema.Types.ObjectId,
      ref: 'Sims',
      default: null
    },
    father: {
      type: Schema.Types.ObjectId,
      ref: 'Sims',
      default: null
    },
    partner: {
      type: Schema.Types.ObjectId,
      ref: 'Sims',
      default: null
    }
  },
  traits: Array,
  aspirations: Array
});

export default mongoose.model('Sims', simsSchema, 'sims');
