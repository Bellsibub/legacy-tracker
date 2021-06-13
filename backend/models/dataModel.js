import mongoose from 'mongoose';

const { Schema } = mongoose;

export const dataSchema = new Schema({
  value: String
});
export const lawsSchema = new Schema({
  type: { type: String },
  items: Array
});

export const RulesModel = mongoose.model(
  'Rules',
  dataSchema,
  'rules'
);
export const SpeciesModel = mongoose.model(
  'Species',
  dataSchema,
  'species'
);
export const CodModel = mongoose.model(
  'CauseOfDeath',
  dataSchema,
  'causeOfDeath'
);
export const LawsModel = mongoose.model(
  'Laws',
  lawsSchema,
  'laws'
);
