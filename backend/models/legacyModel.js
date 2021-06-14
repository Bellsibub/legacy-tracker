/* eslint-disable func-names */
import mongoose from 'mongoose';
import { categoriesSchema } from './categoriesModel';
import { dataSchema } from './dataModel';

const { Schema } = mongoose;

const lawsSchema = new Schema({
  text: { type: String, default: '' },
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
  traits: [{ type: categoriesSchema }],
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
    aspirations: [{ type: lawsSchema }]
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
    }
  ]);

  next();
};

legacySchema.pre(/^find/, autoPopulate);

export default mongoose.model('Legacy', legacySchema);
