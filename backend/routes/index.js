import { Router } from 'express';
import * as legacy from '../controllers/legacyController';
import * as authAPI from '../controllers/authAPIController';
import * as sims from '../controllers/simController';
import * as categories from '../controllers/categoriesController';
import * as data from '../controllers/dataController';

// const http = require('http');

// const { AuthenticationClient } = require('auth0');

const router = new Router();

router.get('/legacy', legacy.getAll);
router.get('/legacy/:id', legacy.getOne);
router.delete('/legacy/:id', legacy.deleteLegacy);
router.post('/legacy', legacy.create);
router.post('/legacy/:id/:category/:itemid', legacy.completeCategoryItem);
router.post('/legacy/:id/goals/:category/:itemid', legacy.toggleGoal);
router.patch('/legacy/:id/packs/:itemid', legacy.updatePacks);
router.patch('/legacy/:id/:category/:itemid', legacy.updateCategoryItem);
router.patch('/legacy/:id', legacy.update);
router.patch('/legacy/:id/laws', legacy.updateLaws);
// router.get('/users/:id', legacy.getUser);

router.patch('/users/:id/legacies', authAPI.addLegacyToUser);
router.get('/users/:id/legacies', authAPI.getUserLegacies);
router.delete('/users/:id/legacies', authAPI.removeLegacyForUser);

router.get('/sim', sims.get);
router.post('/sim', sims.create);
router.post('/sim/:id/:category', sims.addCategoryItem);
router.patch('/sim/:id', sims.update);
router.delete('/sim/:id', sims.deleteSim);
router.patch('/legacy/:id/potentialHeirs', sims.updateHeirs);

router.get('/categories', categories.get);
router.get('/data', data.get);

router.get('/', (req, res, next) => {
  try {
    res.status(200).json({
      text: 'HELLO!!!'
    });
  } catch (error) {
    next(error);
  }
});

export default router;
