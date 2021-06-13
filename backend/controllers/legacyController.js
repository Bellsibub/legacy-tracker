/* eslint-disable no-underscore-dangle */
import Legacy from '../models/legacyModel';
// import Sims from '../models/simsModel';
import { RulesModel, LawsModel } from '../models/dataModel';
import { AspirationModel, TraitsModel } from '../models/categoriesModel';
import AppError from '../utils/appError';
import APIRequest from '../utils/apiRequest';

export const create = async (req, res, next) => {
  try {
    const { name, ruler } = req.body;
    // const laws = await LawsModel.find()
    const rules = await RulesModel.find();
    const aspirations = await AspirationModel.find();
    const traits = await TraitsModel.find();
    const newLegacy = await Legacy.create({
      name,
      ruler,
      sims: [ruler],
      aspirations,
      traits,
      rules
    });
    const doc = await Legacy.findById(newLegacy._id);
    res.status(201).json(doc);
  } catch (error) {
    next(error);
  }
};

export const getAll = async (req, res, next) => {
  try {
    // By default this returns the lastest 20 thoughts
    const request = new APIRequest(Legacy.find());
    // .sort().limit();

    const doc = await request.mongoQuery;

    res.status(200).json(doc);
  } catch (error) {
    next(error);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    // By default this returns the lastest 20 thoughts
    const doc = await Legacy.findById(id);
    // .sort().limit();

    res.status(200).json(doc);
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newLaw = req.body.laws;
    const keys = Object.keys(newLaw);

    if (newLaw) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < keys.length; i++) {
        // eslint-disable-next-line no-await-in-loop
        await Legacy.updateOne(
          { _id: id },
          {
            $set: { [`laws.${keys[i]}`]: { ...newLaw[keys[i]] } }
          },
          { new: true }
        );
      }
    } else {
      await Legacy.updateOne({ _id: id }, { ...req.body }, { new: true });
    }

    const doc = await Legacy.findById(id);

    if (!doc) {
      return next(
        new AppError(
          404,
          'Not Found',
          'The ID you provided did not exist. Please try again'
        )
      );
    }
    res.status(201).json(doc);
  } catch (error) {
    next(error);
  }
};

export const updateLaws = async (req, res, next) => {
  try {
    const { id } = req.params;

    const doc = await Legacy.updateOne({ _id: id }, { ...laws }, { new: true });

    if (!doc) {
      return next(
        new AppError(
          404,
          'Not Found',
          'The ID you provided did not exist. Please try again'
        )
      );
    }
    res.status(201).json(doc);
  } catch (error) {
    next(error);
  }
};
