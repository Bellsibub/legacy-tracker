import { Router } from 'express';
import * as legacy from '../controllers/legacyController';
import * as authAPI from '../controllers/authAPIController';
import * as sims from '../controllers/simController';
import * as data from '../controllers/dataController';

const router = new Router();

/* -------------------------------------------------------------------------- */
/*                                   LEGACY                                   */
/* -------------------------------------------------------------------------- */
router.get('/legacy', legacy.getAll);
router.get('/legacy/:id', legacy.getOne);
router.post('/legacy', legacy.create);
router.delete('/legacy/:id', legacy.deleteLegacy);
router.patch('/legacy/:id', legacy.update);
/* ------------------------------ Sub endpoints ----------------------------- */
router.patch('/legacy/:id/goals/:category/:itemid', legacy.toggleGoal);
router.patch('/legacy/:id/:category/:itemid/', legacy.updateCategoryItem);
router.get('/legacy/:id/:category/:itemid/complete', legacy.completeCategoryItem);
router.patch('/legacy/:id/potentialHeirs', legacy.updateHeirs);
router.patch('/legacy/:id/laws', legacy.updateLaws);
router.patch('/legacy/:id/packs/:itemid', legacy.updatePacks);
router.post('/legacy/:id/rules', legacy.addRules);
router.patch('/legacy/:id/rules/:rulesid', legacy.updateRules);
router.delete('/legacy/:id/rules/:rulesid', legacy.deleteRules);

/* -------------------------------------------------------------------------- */
/*                                    USER                                    */
/* -------------------------------------------------------------------------- */
router.delete('/users/:id', authAPI.deleteUser);
router.get('/users/:id/metadata', authAPI.getUserMetadata);
router.patch('/users/:id/metadata', authAPI.updateUserMetadata);
// router.patch('/users/:id/metadata/legacies', authAPI.addLegacyToUser);
// router.delete('/users/:id/metadata/legacies', authAPI.removeLegacyForUser);

/* -------------------------------------------------------------------------- */
/*                                    SIMS                                    */
/* -------------------------------------------------------------------------- */
router.post('/sim', sims.create);
router.post('/sim/:id/:category', sims.addCategoryItem);
router.patch('/sim/:id', sims.update);
router.delete('/sim/:id', sims.deleteSim);

/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */
router.get('/data', data.get);

export default router;
