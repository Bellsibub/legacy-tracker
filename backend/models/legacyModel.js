/* eslint-disable func-names */
import mongoose from 'mongoose';
import { categoriesSchema } from './categoriesModel';
import { dataSchema, packsSchema } from './dataModel';

const { Schema } = mongoose;

const goalSchema = new Schema({
  text: { type: String, default: '' },
  count: { type: Number },
  focused: { type: Boolean, default: false },
  completed: { type: Boolean, default: false }
});

const legacySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  generation: {
    type: Number,
    default: 1
  },
  ruler: {
    type: Schema.Types.ObjectId,
    ref: 'Sims',
    required: [true, 'Ruler is required']
  },
  heir: {
    type: Schema.Types.ObjectId,
    ref: 'Sims',
    default: null
  },
  potentialHeirs: [{ type: Schema.Types.ObjectId, ref: 'Sims' }],
  aspirations: [{ type: categoriesSchema }],
  skills: [{ type: categoriesSchema }],
  traits: [{ type: categoriesSchema }],
  packs: [{ type: packsSchema }],
  laws: {
    gender: {
      title: { type: String },
      description: { type: String }
    },
    bloodline: {
      title: { type: String },
      description: { type: String }
    },
    heir: {
      title: { type: String },
      description: { type: String }
    },
    species: {
      title: { type: String },
      description: { type: String }
    }
  },
  rules: [{ type: dataSchema }],
  sims: [{ type: Schema.Types.ObjectId, ref: 'Sims' }],
  goals: {
    aspirations: [{ type: goalSchema }],
    skills: [{ type: goalSchema }],
    food: [{ type: goalSchema }]
  }
});

const autoPopulate = function (next) {
  this.populate([
    {
      path: 'sims',
      model: 'Sims'
    },
    {
      path: 'ruler',
      model: 'Sims'
    },
    {
      path: 'heir',
      model: 'Sims'
    },
    {
      path: 'potentialHeirs',
      model: 'Sims'
    },
    {
      path: 'aspirations.focusTarget',
      model: 'Sims',
      select: 'firstName lastName'
    }
  ]);

  next();
};

legacySchema.pre(/^find/, autoPopulate);

export default mongoose.model('Legacy', legacySchema);
