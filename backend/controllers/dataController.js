import { CodModel, SpeciesModel, LawsModel } from '../models/dataModel';
// import AppError from '../utils/appError';

export const get = async (req, res, next) => {
  try {
    // By default this returns the lastest 20 thoughts
    const causeOfDeath = await CodModel.find();
    const species = await SpeciesModel.find();
    const laws = await LawsModel.find();
    // .sort().limit();
    // format laws
    const formatLaws = {} 
    laws.forEach((key, index) => {
      Object.assign(formatLaws, { [key.type]: laws[index].items })
    })
    res.status(200).json({
      causeOfDeath,
      species,
      laws: formatLaws
    });
  } catch (error) {
    next(error);
  }
};
