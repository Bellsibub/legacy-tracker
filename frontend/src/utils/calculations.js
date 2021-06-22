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

export const filterRunningSims = (updatedLegacy, generation) => {
  let simsRunning = _.filter(
    updatedLegacy.payload.sims,
    (sim) => sim.role.runningForRuler
  );
  simsRunning = _.filter(simsRunning, (sim) => sim.generation > generation);
  if (updatedLegacy.payload.heir) {
    simsRunning = _.filter(
      simsRunning,
      (sim) => sim._id !== updatedLegacy.payload.heir._id
    );
  }
  return simsRunning;
};

const lawsTest = {
  gender: (laws, sim, simsRunning, ruler) => {
    // console.log(`Ruler${ruler.gender}`);
    // console.log(gender);
    const simsByGender = _.groupBy(simsRunning, 'gender');
    // const simsBySpecies = _.groupBy(simsRunning, 'species');
    switch (laws) {
      case 'Matriarchy':
        if (sim.gender === 'Female') {
          return true;
        } else if (_.includes(_.keys(simsByGender), 'Female')) {
          return false;
        } else {
          return true;
        }
      case 'Strict Matriarchy':
        if (sim.gender === 'Female') {
          return true;
        } else {
          return false;
        }
      case 'Patriarchy':
        if (sim.gender === 'Male') {
          return true;
        } else if (_.includes(_.keys(simsByGender), 'Male')) {
          return false;
        } else {
          return true;
        }
      case 'Strict Patriarchy':
        if (sim.gender === 'Male') {
          return true;
        } else {
          return false;
        }
      case 'Equality':
        return true;
      case 'Strict Equality':
        if (ruler.gender === 'Female') {
          if (sim.gender === 'Male') {
            return true;
          } else {
            return false;
          }
        }
        if (ruler.gender === 'Male') {
          if (sim.gender === 'Female') {
            return true;
          } else {
            return false;
          }
        }
        break;
      default:
        break;
    }
  },
  species: (laws, sim, simsRunning, ruler) => {
    switch (laws) {
      case 'Xenoarchy':
        if (ruler.species.value === 'Human') {
          if (sim.species.value === 'Alien') {
            return true;
          } else {
            return false;
          }
        }
        if (ruler.species.value === 'Alien') {
          if (sim.species.value === 'Human') {
            return true;
          } else {
            return false;
          }
        }
        // case 'Strict Matriarchy':
        //   if (simData.gender === 'Female') {
        //     return true;
        //   } else {
        //     return false;
        //   }
        // case 'Patriarchy':
        //   if (simData.gender === 'Male') {
        //     return true;
        //   } else if (_.includes(_.keys(simsByGender), 'Male')) {
        //     return false;
        //   } else {
        //     return true;
        //   }
        // case 'Strict Patriarchy':
        //   if (simData.gender === 'Male') {
        //     return true;
        //   } else {
        //     return false;
        //   }
        // case 'Equality':
        //   return true;
        // case 'Strict Equality':
        //   if (rulerGender === 'Female') {
        //     if (simData.gender === 'Male') {
        //       return true;
        //     } else {
        //       return false;
        //     }
        //   }
        //   if (rulerGender === 'Male') {
        //     if (simData.gender === 'Female') {
        //       return true;
        //     } else {
        //       return false;
        //     }
        //   }
        break;
      default:
        break;
    }
  }
};

// TODO: Finish this calculation
// return and set role.eligible
export const calculateHeir = ({ laws, simsRunning, ruler }) => {
  const eligibleSims = [];
  const nonEligible = [];
  const simsByGender = _.groupBy(simsRunning, 'gender');
  const simsBySpecies = _.groupBy(simsRunning, 'species');
  // GENDER law
  _.forEach(simsRunning, (sim) => {
    let eligible = _.size(lawsTest);
    // console.log(eligible);
    _.forEach(laws, (law, key) => {
      if (lawsTest[key]) {
        if (!lawsTest[key](law.title, sim, simsRunning, ruler)) {
          --eligible;
        }
      }
    });
    // console.log(eligible);
    if (eligible === _.size(lawsTest)) {
      eligibleSims.push(sim._id);
    } else {
      nonEligible.push(sim._id);
    }
  });
  console.log('-------------');
  console.log('calculation of heir');
  console.log('eligible', eligibleSims);
  console.log('non', nonEligible);
  console.log('-------------');
  return {
    eligibleSims,
    nonEligible
    // simData: { ...simData, role: { ...simData.role, eligible: isEligible } }
    // updateHeirs
  };
};
