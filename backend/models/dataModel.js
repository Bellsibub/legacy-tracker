import mongoose from 'mongoose';

const { Schema } = mongoose;

export const dataSchema = new Schema({
  value: String,
  pack: String
});

export const packsSchema = new Schema({
  name: String,
  image: String,
  type: String,
  active: { type: Boolean, default: false }
});

export const lawsSchema = new Schema({
  type: { type: String },
  items: Array
});

export const goalsParentSchema = new Schema({
  aspirations: [
    {
      text: String,
      count: Number
    }
  ],
  skills: [
    {
      text: String,
      count: Number
    }
  ],
  food: [
    {
      text: String
    }
  ]
});

export const goalsChildSchema = new Schema({
  text: { type: String, default: '' },
  count: { type: Number },
  focused: { type: Boolean, default: false },
  completed: { type: Boolean, default: false }
});

export const GoalsModel = mongoose.model('Goals', goalsParentSchema, 'goals');
export const RulesModel = mongoose.model('Rules', dataSchema, 'rules');
export const SpeciesModel = mongoose.model('Species', dataSchema, 'species');
export const CodModel = mongoose.model('CauseOfDeath', dataSchema, 'causeOfDeath');
export const LawsModel = mongoose.model('Laws', lawsSchema, 'laws');
export const PacksModel = mongoose.model('Packs', packsSchema, 'packs');
