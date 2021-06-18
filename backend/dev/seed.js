import { AspirationModel, TraitsModel, SkillsModel } from '../models/categoriesModel';
import {
  RulesModel,
  LawsModel,
  SpeciesModel,
  CodModel,
  PacksModel
} from '../models/dataModel';
import aspirations from './aspirations.json';
import skills from './skills.json';
import traits from './traits.json';
import rules from './rules.json';
import species from './species.json';
import causeOfDeath from './causeOfDeath.json';
import laws from './laws.json';
import packs from './packs.json';

export default async () => {
  await AspirationModel.deleteMany({});
  await TraitsModel.deleteMany({});
  await RulesModel.deleteMany({});
  await SpeciesModel.deleteMany({});
  await CodModel.deleteMany({});
  await LawsModel.deleteMany({});
  await SkillsModel.deleteMany({});
  await PacksModel.deleteMany({});

  packs.forEach((modelData) => {
    new PacksModel(modelData).save();
  });
  skills.forEach((modelData) => {
    new SkillsModel(modelData).save();
  });
  aspirations.forEach((modelData) => {
    new AspirationModel(modelData).save();
  });
  traits.forEach((modelData) => {
    new TraitsModel(modelData).save();
  });
  rules.forEach((value) => {
    new RulesModel({ value }).save();
  });
  species.forEach((value) => {
    new SpeciesModel({ value }).save();
  });
  causeOfDeath.forEach((value) => {
    new CodModel({ value }).save();
  });
  Object.keys(laws).forEach((value) => {
    new LawsModel({ type: value, items: laws[value] }).save();
  });
};
