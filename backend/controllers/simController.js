/* eslint-disable no-underscore-dangle */
import Legacy from '../models/legacyModel';
import Sims from '../models/simsModel';
import AppError from '../utils/appError';
import APIRequest from '../utils/apiRequest';

export const create = async (req, res, next) => {
  try {
    const { simData, legacyID } = req.body;
    const doc = await Sims.create({
      ...simData
    });

    const { runningForRuler, eligible } = simData.role;
    if (runningForRuler && eligible) {
      await Legacy.updateOne(
        { _id: legacyID },
        { $push: { sims: [doc._id], potentialHeirs: [doc._id] } },
        { new: true, upsert: true }
      );
    } else {
      await Legacy.updateOne(
        { _id: legacyID },
        { $push: { sims: [doc._id] } },
        { new: true, upsert: true }
      );
    }

    res.status(201).json(doc);
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { simData, legacyID } = req.body;
    const doc = await Sims.updateOne({ _id: id }, { ...simData }, { new: true });
    
    const { runningForRuler, eligible } = simData.role;
    if (runningForRuler && eligible) {
      await Legacy.updateOne(
        { _id: legacyID },
        { $push: { potentialHeirs: [id] } },
        { new: true, upsert: true }
      );
    } else {
      await Legacy.updateOne(
        { _id: legacyID },
        { 
          $pull: { potentialHeirs: id } 
        },
        { new: true, upsert: true }
      );
    }
    
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

export const deleteSim = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { legacyID } = req.body;
    const doc = await Sims.deleteOne({ _id: id });
    await Legacy.updateOne(
      { _id: legacyID },
      { 
        $unset: { heir: '' }, 
        $pull: { sims: id, potentialHeirs: id } 
      },
      { new: true, upsert: true }
    );
    res.status(200).json(doc);
  } catch (error) {
    next(error);
  }
};

export const get = async (req, res, next) => {
  try {
    const request = new APIRequest(Sims.find());

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
