import mongoose from 'mongoose';

const { Schema } = mongoose;

export const categoriesSchema = new Schema({
  name: String,
  type: String,
  image: String,
  pack: String,
  completed: Number,
  inFocus: Boolean,
  focusTarget: String
});

export const AspirationModel = mongoose.model(
  'Aspirations',
  categoriesSchema,
  'aspirations'
);
export const SkillsModel = mongoose.model(
  'Skills',
  categoriesSchema,
  'skills'
);
export const TraitsModel = mongoose.model(
  'Traits',
  categoriesSchema,
  'traits'
);
