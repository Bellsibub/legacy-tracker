/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
import _ from 'lodash';

export const verifyGoalCompletion = ({ state, category }) => {
  const isCompletedOnce = _.countBy(state[category], (o) => o.completed >= 1);
  const completionCount = isCompletedOnce.true;
  for (let i = 0; i < state.goals[category].length; i++) {
    const element = state.goals[category][i];
    if (element.count === completionCount + 1 && !element.completed) {
      return element._id;
    }
  }
};
const genderLaw = (laws, simData, simsByGender) => {
  switch (laws.gender.title) {
    case 'Matriarchy':
      if (simData.gender === 'Female') {
        return true;
      } else if (_.includes(_.keys(simsByGender), 'Female')) {
        return false;
      } else {
        return true
      }
    // case 'Strict Matriarchy':
    //   if (simData.gender === 'Female') {
    //     isEligible = true;
    //   } else {
    //     isEligible = false;
    //   }
    //   break;
    // case 'Patriarchy':
    //   if (simData.gender === 'Male') {
    //     isEligible = true;
    //     console.log('lll');
    //     // if (!_.includes(_.keys(simsByGender), 'Male') && simData.gender === 'Female') {
    //     //   console.log('ddd');
    //     //   isEligible = false;
    //     //   // updateHeirs = simsByGender.Female;
    //     // }
    //   } else if (_.includes(_.keys(simsByGender), 'Male')) {
    //     console.log('uuuu');
    //     isEligible = false;
    //   } else {
    //     console.log('yyyy');
    //     isEligible = true;
    //   }
    //   break;
    // case 'Strict Patriarchy':
    //   if (simData.gender === 'Male') {
    //     isEligible = true;
    //   } else {
    //     isEligible = false;
    //   }
    //   break;
    // case 'Equality':
    //   console.log('Gender could be any');
    //   break;
    // case 'Strict Equality':
    //   console.log('Gender must be alternating');
    //   break;
    default:
      break;
  }
}
// TODO: Finish this calculation
// return and set role.eligible
export const calculateHeir = ({ laws, simsRunning }) => {
  const eligibleSims = [];
  const nonEligible = [];
  const simsByGender = _.groupBy(simsRunning, 'gender');
  const simsBySpecies = _.groupBy(simsRunning, 'species');
  // GENDER law
  _.forEach(simsRunning, (sim) => {
    if (genderLaw(laws, sim, simsByGender)) {
      eligibleSims.push(sim._id);
    } else {
      nonEligible.push(sim._id);
    }
  })
  console.log('-------------');
  console.log('calculation of heir');
  console.log('eligible', eligibleSims)
  console.log('non', nonEligible)
  console.log('-------------');
  return {
    eligibleSims, nonEligible
    // simData: { ...simData, role: { ...simData.role, eligible: isEligible } }
    // updateHeirs
  };
};
