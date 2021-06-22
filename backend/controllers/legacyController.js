/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-underscore-dangle */
import Legacy from '../models/legacyModel';
import { RulesModel, GoalsModel } from '../models/dataModel';
import { AspirationModel, TraitsModel, SkillsModel } from '../models/categoriesModel';
import AppError from '../utils/appError';
import { UserModel } from '../models/userModel';
import APIRequest from '../utils/apiRequest';

export const create = async (req, res, next) => {
  try {
    const { name, ruler, packs, laws } = req.body;
    
    const rules = await RulesModel.find();
    const goals = await GoalsModel.findOne();
    const aspirations = await AspirationModel.find();
    const skills = await SkillsModel.find();
    const traits = await TraitsModel.find();

    goals.aspirations[goals.aspirations.length - 1].count = aspirations.length;
    goals.skills[goals.skills.length - 1].count = skills.length;

    const newLegacy = await Legacy.create({
      name,
      ruler,
      sims: [ruler],
      aspirations,
      traits,
      goals,
      skills,
      packs,
      laws,
      rules
    });
    const doc = await Legacy.findById(newLegacy._id);
    res.status(201).json(doc);
  } catch (error) {
    next(error);
  }
};

export const deleteLegacy = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const doc = await Legacy.deleteOne({ _id: id });
    
    res.status(200).json(doc);
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
    const doc = await Legacy.findById(id)
    // .sort().limit();
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

export const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    // By default this returns the lastest 20 thoughts
    const doc = await UserModel.findOne({ email: id });
    // .sort().limit();

    res.status(200).json(doc);
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { remove } = req.body;
    if (remove) {
      await Legacy.updateOne(
        { _id: id },
        { $unset: { [`${remove}`]: '' } },
        { new: true }
      );
    }
    const doc = await Legacy.updateOne({ _id: id }, { ...req.body }, { new: true });

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

export const updateLaws = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { laws } = req.body;
    const keys = Object.keys(laws);
    
    const doc = await Legacy.updateOne(
      { _id: id },
      {
        $set: { [`laws.${keys[0]}`]: { ...laws[keys[0]] } }
      },
      { new: true }
    );

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
}

export const completeCategoryItem = async (req, res, next) => {
  try {
    const { id, category, itemid } = req.params;
    await Legacy.updateOne(
      { _id: id, [`${category}._id`]: itemid },
      { $inc: { [`${category}.$.completed`]: 1 } },
      { new: true }
    );
    const doc = await Legacy.findOne({ _id: id });
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

export const updateCategoryItem = async (req, res, next) => {
  try {
    const { id, category, itemid } = req.params;
    const { remove } = req.body;

    if (remove) {
      await Legacy.updateOne(
        { _id: id, [`${category}._id`]: itemid },
        { $unset: { [`${category}.$.${remove}`]: '' } },
        { new: true }
      );
    }

    await Legacy.updateOne(
      { _id: id, [`${category}._id`]: itemid },
      { $set: { [`${category}.$`]: { ...req.body } } },
      { new: true }
    );
    const doc = await Legacy.findOne({ _id: id });
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

export const updatePacks = async (req, res, next) => {
  try {
    const { id, itemid } = req.params;
    // const { remove } = req.body;
    const { bool } = req.body;
    const doc = await Legacy.updateOne(
      { _id: id, 'packs._id': itemid },
      { $set: { 'packs.$.active': bool } },
      { new: true }
    );
    // const doc = await Legacy.findOne({ _id: id });
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

export const toggleGoal = async (req, res, next) => {
  try {
    const { id, category, itemid } = req.params;
    const { bool, property } = req.body;
    await Legacy.updateOne(
      { _id: id, [`goals.${category}._id`]: itemid },
      { $set: { [`goals.${category}.$.${property}`]: bool } },
      { new: true }
    );
    const doc = await Legacy.findOne({ _id: id });
    // console.log(doc);
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
