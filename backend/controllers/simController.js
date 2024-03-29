import Legacy from '../models/legacyModel';
import Sims from '../models/simsModel';
import AppError from '../utils/appError';

export const create = async (req, res, next) => {
  try {
    const { simData, legacyID } = req.body;
    const doc = await Sims.create({
      ...simData
    });
    await Legacy.updateOne(
      { _id: legacyID },
      { $push: { sims: doc._id } },
      { new: true }
    );

    res.status(201).json(doc);
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

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { simData } = req.body;
    const doc = await Sims.updateOne({ _id: id }, { ...simData }, { new: true });

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

    const legacy = await Legacy.findOne({ sims: { $in: [id] } });

    await Legacy.updateOne({ _id: legacyID }, { $pull: { sims: { _id: id } } });

    if (legacy.heir === id) {
      await Legacy.updateOne({ _id: legacyID }, { $unset: { heir: '' } });
    }

    res.status(200).json(doc);
  } catch (error) {
    next(error);
  }
};
