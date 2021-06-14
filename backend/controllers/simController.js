/* eslint-disable no-underscore-dangle */
import Legacy from '../models/legacyModel';
import Sims from '../models/simsModel';
import AppError from '../utils/appError';
import APIRequest from '../utils/apiRequest';

export const create = async (req, res, next) => {
  try {
    const doc = await Sims.create({
      ...req.body
    });
    
    await Legacy.updateOne({}, { $push: { sims: [doc._id] } }, { new: true });

    res.status(201).json(doc);
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const doc = await Sims.updateOne({ _id: id }, { ...req.body }, { new: true });
    // await Legacy.updateOne({}, { $push: { sims: [doc._id] } });
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

export const get = async (req, res, next) => {
  try {
    // By default this returns the lastest 20 thoughts
    const request = new APIRequest(Sims.find());
    // .sort().limit();

    const doc = await request.mongoQuery;

    res.status(200).json(doc);
  } catch (error) {
    next(error);
  }
};

export const addCategoryItem = async (req, res, next) => {
  try {
    const { id, category } = req.params;
    await Sims.updateOne(
      { _id: id },
      { $push: { [`${category}`]: { ...req.body } } },
      { new: true }
    );
    const doc = await Sims.findById(id);
    if (!doc) {
      return next(
        new AppError(
          404,
          'Not Found',
          'The ID you provided did not exist. Please try again'
        )
      );
    }
    res.status(200).json(doc);
  } catch (error) {
    next(error);
  }
};
