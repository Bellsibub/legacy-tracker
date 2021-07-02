import mongoose from 'mongoose';

import { categoriesSchema } from './categoriesModel';
import { dataSchema, packsSchema, goalsChildSchema } from './dataModel';

const { Schema } = mongoose;

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
  sims: [{ type: Schema.Types.ObjectId, ref: 'Sims' }],
  packs: [{ type: packsSchema }],
  laws: {
    gender: {
      title: { type: String },
      description: { type: String },
      pack: { type: String }
    },
    bloodline: {
      title: { type: String },
      description: { type: String },
      pack: { type: String }
    },
    heir: {
      title: { type: String },
      description: { type: String },
      pack: { type: String },
      auto: { type: Boolean },
      helpText: { type: String }
    },
    species: {
      title: { type: String },
      description: { type: String },
      pack: { type: String }
    }
  },
  rules: [{ type: dataSchema }],
  goals: {
    aspirations: [{ type: goalsChildSchema }],
    skills: [{ type: goalsChildSchema }],
    food: [{ type: goalsChildSchema }]
  },
  traits: [{ type: categoriesSchema }],
  aspirations: [{ type: categoriesSchema }],
  skills: [{ type: categoriesSchema }]
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
