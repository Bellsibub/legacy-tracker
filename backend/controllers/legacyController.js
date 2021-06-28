import Legacy from '../models/legacyModel';
import Sims from '../models/simsModel';
import { RulesModel, GoalsModel } from '../models/dataModel';
import { AspirationModel, TraitsModel, SkillsModel } from '../models/categoriesModel';
import AppError from '../utils/appError';

export const getAll = async (req, res, next) => {
  try {
    const doc = await Legacy.find({});

    res.status(200).json(doc);
  } catch (error) {
    next(error);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
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
    res.status(200).json(doc);
  } catch (error) {
    next(error);
  }
};

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

/* ------------------------------ Sub-Endpoints ----------------------------- */

export const toggleGoal = async (req, res, next) => {
  try {
    const { id, category, itemid } = req.params;
    const { bool, property } = req.body;
    const doc = await Legacy.updateOne(
      { _id: id, [`goals.${category}._id`]: itemid },
      { $set: { [`goals.${category}.$.${property}`]: bool } }
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
    res.status(201).json(doc);
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

export const completeCategoryItem = async (req, res, next) => {
  try {
    const { id, category, itemid } = req.params;
    await Legacy.updateOne(
      { _id: id, [`${category}._id`]: itemid },
      { $inc: { [`${category}.$.completed`]: 1 } }
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

export const updateHeirs = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { eligibleSims, nonEligible } = req.body;

    const doc = await Sims.updateMany(
      { _id: { $in: eligibleSims } },
      { $set: { 'role.eligible': true } }
    );
    await Sims.updateMany(
      { _id: { $in: nonEligible } },
      { $set: { 'role.eligible': false } }
    );
    await Legacy.updateOne(
      { _id: id },
      {
        $set: { potentialHeirs: eligibleSims }
      }
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
    res.status(201).json(doc);
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
      }
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
    res.status(201).json(doc);
  } catch (error) {
    next(error);
  }
};

export const updatePacks = async (req, res, next) => {
  try {
    const { id, itemid } = req.params;
    const { bool } = req.body;
    const doc = await Legacy.updateOne(
      { _id: id, 'packs._id': itemid },
      { $set: { 'packs.$.active': bool } }
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
    res.status(201).json(doc);
  } catch (error) {
    next(error);
  }
};

export const updateRules = async (req, res, next) => {
  try {
    const { id, rulesid } = req.params;
    const { value } = req.body;

    const doc = await Legacy.updateOne(
      { _id: id, 'rules._id': rulesid },
      {
        $set: { 'rules.$.value': value }
      }
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
    res.status(201).json(doc);
  } catch (error) {
    next(error);
  }
};

export const addRules = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { value } = req.body;

    const doc = await Legacy.updateOne(
      { _id: id },
      {
        $push: { rules: { value } }
      }
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
    res.status(201).json(doc);
  } catch (error) {
    next(error);
  }
};

export const deleteRules = async (req, res, next) => {
  try {
    const { id, rulesid } = req.params;

    const doc = await Legacy.updateOne(
      { _id: id },
      { $pull: { rules: { _id: rulesid } } }
    );

    res.status(200).json(doc);
  } catch (error) {
    next(error);
  }
};
