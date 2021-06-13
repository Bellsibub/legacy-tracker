import { AspirationModel } from '../models/categoriesModel';

export const get = async (req, res, next) => {
  try {
    const doc = await AspirationModel.find();

    res.status(200).json(doc);
  } catch (error) {
    next(error);
  }
};
