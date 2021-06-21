/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
import _ from 'lodash';

export const verifyGoalCompletion = ({ state, category }) => {
  const isCompletedOnce = _.countBy(state[category], (o) => o.completed >= 1);
  const completionCount = isCompletedOnce.true
  for (let i = 0; i < state.goals[category].length; i++) {
    const element = state.goals[category][i];
    if (element.count === completionCount + 1 && !element.completed) {
      // thunkAPI.dispatch(toggleGoal())
      console.log('.............');
      console.log('The goal is met but not completed::', element.text);
      console.log('.............');
      return element._id
    }
  }
}

// TODO: Finish this calculation
// return and set role.eligible
export const calculateHeir = ({ ...simData }) => {
  return { ...simData, role: { ...simData.role, eligible: true } }
}