import { Router } from 'express';
import * as legacy from '../controllers/legacyController';
import * as authAPI from '../controllers/authAPIController';
import * as sims from '../controllers/simController';
import * as data from '../controllers/dataController';

const router = new Router();

router.get('/legacy', legacy.getAll);
router.get('/legacy/:id', legacy.getOne);
router.post('/legacy', legacy.create);
router.delete('/legacy/:id', legacy.deleteLegacy);
router.patch('/legacy/:id', legacy.update);
router.post('/legacy/:id/packs/:itemid', legacy.updatePacks);
router.post('/legacy/:id/:category/:itemid', legacy.completeCategoryItem);
router.patch('/legacy/:id/:category/:itemid', legacy.updateCategoryItem);
router.post('/legacy/:id/goals/:category/:itemid', legacy.toggleGoal);
router.patch('/legacy/:id/laws', legacy.updateLaws);
router.patch('/legacy/:id/potentialHeirs', sims.updateHeirs);

router.get('/users/:id/legacies', authAPI.getUserLegacies);
router.patch('/users/:id/legacies', authAPI.addLegacyToUser);
router.delete('/users/:id/legacies', authAPI.removeLegacyForUser);

router.post('/sim', sims.create);
router.post('/sim/:id/:category', sims.addCategoryItem);
router.patch('/sim/:id', sims.update);
router.delete('/sim/:id', sims.deleteSim);

router.get('/data', data.get);

export default router;
