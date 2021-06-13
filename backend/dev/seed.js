import { AspirationModel, TraitsModel } from '../models/categoriesModel';
import { RulesModel, LawsModel, SpeciesModel, CodModel } from '../models/dataModel';
import aspirations from './aspirations.json';
import traits from './traits.json';
import rules from './rules.json';
import species from './species.json';
import causeOfDeath from './causeOfDeath.json';
import laws from './laws.json';

export default async () => {
  await AspirationModel.deleteMany({});
  await TraitsModel.deleteMany({});
  await RulesModel.deleteMany({});
  await SpeciesModel.deleteMany({});
  await CodModel.deleteMany({});
  await LawsModel.deleteMany({});

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
