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
  if (updatedLegacy.payload.heir && !updatedLegacy.payload.laws.heir.auto) {
    simsRunning = _.filter(
      simsRunning,
      (sim) => sim._id !== updatedLegacy.payload.heir._id
    );
  }
  return simsRunning;
};

const lawsCalculations = {
  gender: (laws, sim, simsRunning, ruler) => {
    const simsByGender = _.groupBy(simsRunning, 'gender');
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
  bloodline: (laws, sim, simsRunning, ruler) => {
    const simsByAdotion = _.groupBy(simsRunning, 'adopted');
    switch (laws) {
      case 'Modern':
        return true
      case 'Traditional':
        if (!sim.adopted) {
          return true;
        } else if (_.includes(_.keys(simsByAdotion), 'false')) {
          return false;
        } else {
          return true;
        }
      case 'Strict Traditional':
        if (!sim.adopted) {
          return true;
        } else {
          return false;
        }
      case 'Foster':
        if (sim.adopted) {
          return true;
        } else if (_.includes(_.keys(simsByAdotion), 'true')) {
          return false;
        } else {
          return true;
        }
      case 'Strict Foster':
        if (sim.adopted) {
          return true;
        } else {
          return false;
        }
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
        break;
      case 'Xenophobic':
        if (sim.species.value === ruler.species.value) {
          return true;
        } else {
          return false;
        }
      case 'Brood':
        if (sim.relations.mother._id === ruler._id) {
          return true;
        } else {
          return false;
        }
      case 'Tolerant':
        return true;
      default:
        break;
    }
  }
};

export const calculateHeir = ({ laws, simsRunning, ruler }) => {
  const eligibleSims = [];
  const nonEligible = [];

  _.forEach(simsRunning, (sim) => {
    let eligible = _.size(lawsCalculations);
    _.forEach(laws, (law, key) => {
      if (lawsCalculations[key]) {
        if (!lawsCalculations[key](law.title, sim, simsRunning, ruler)) {
          --eligible;
        }
      }
    });
    if (eligible === _.size(lawsCalculations)) {
      eligibleSims.push(sim._id);
    } else {
      nonEligible.push(sim._id);
    }
  });
  return {
    eligibleSims,
    nonEligible
  };
};

export const autoSelectHeir = ({ laws, eligible }) => {
  const maxVal = _.size(eligible);

  return eligible[_.random(0, maxVal)]
}