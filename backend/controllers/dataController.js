import {
  CodModel,
  SpeciesModel,
  LawsModel,
  PacksModel,
  RulesModel
} from '../models/dataModel';

export const get = async (req, res, next) => {
  try {
    const causeOfDeath = await CodModel.find();
    const species = await SpeciesModel.find();
    const laws = await LawsModel.find();
    const packs = await PacksModel.find();
    const rules = await RulesModel.find();
    
    const formatLaws = {};
    laws.forEach((key, index) => {
      Object.assign(formatLaws, { [key.type]: laws[index].items });
    });
    res.status(200).json({
      causeOfDeath,
      species,
      laws: formatLaws,
      packs,
      rules
    });
  } catch (error) {
    next(error);
  }
};
