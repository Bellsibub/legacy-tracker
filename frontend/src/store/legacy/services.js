import _ from 'lodash';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { verifyGoalCompletion, calculateHeir, autoSelectHeir } from 'utils/calculations';
import { updateUserMetadata } from 'store/session/services';
import { setLegacy } from 'store/session';
import { API_URL } from 'utils/apiConfig';

/* -------------------------------------------------------------------------- */
/*                                   LEGACY                                   */
/* -------------------------------------------------------------------------- */

export const createLegacy = createAsyncThunk(
  'legacy/createLegacy',
  async ({ legacyData, token }, thunkAPI) => {
    try {
      const response = await fetch(API_URL('legacy'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ ...legacyData })
      });
      const data = await response.json();
      if (response.status === 201) {
        thunkAPI.dispatch(setLegacy({ id: data._id }));
        thunkAPI.dispatch(
          updateUserMetadata({ token, newData: { user_metadata: { legacy: data._id } } })
        );
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const initLegacy = createAsyncThunk(
  'legacy/initLegacy',
  async ({ founder, legacy, token }, thunkAPI) => {
    try {
      const simResponse = await fetch(API_URL('sim'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ simData: { ...founder } })
      });
      const newSim = await simResponse.json();
      if (simResponse.status === 201) {
        thunkAPI.dispatch(
          createLegacy({ legacyData: { ...legacy, ruler: newSim._id }, token })
        );
        return newSim;
      } else {
        return thunkAPI.rejectWithValue(newSim);
      }
    } catch (error) {
      console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getLegacy = createAsyncThunk(
  'legacy/getLegacy',
  async ({ legacyID, token }, thunkAPI) => {
    try {
      const response = await fetch(API_URL(`legacy/${legacyID}`), {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateLegacy = createAsyncThunk(
  'legacy/updateLegacy',
  async ({ newData, legacyID, token }, thunkAPI) => {
    try {
      const legacyResponse = await fetch(API_URL(`legacy/${legacyID}`), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ ...newData })
      });
      const data = await legacyResponse.json();
      if (legacyResponse.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteLegacy = createAsyncThunk(
  'legacy/deleteLegacy',
  async ({ legacyID, token }, thunkAPI) => {
    try {
      const response = await fetch(API_URL(`legacy/${legacyID}`), {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      thunkAPI.dispatch(
        updateUserMetadata({ token, newData: { user_metadata: { legacy: null } } })
      );
      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

/* -------------------------------------------------------------------------- */
/*                                    SIMS                                    */
/* -------------------------------------------------------------------------- */

export const createSim = createAsyncThunk(
  'legacy/createSim',
  async ({ simData, legacyID, token }, thunkAPI) => {
    try {
      const simResponse = await fetch(API_URL('sim'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ simData, legacyID })
      });
      const newSim = await simResponse.json();
      if (simResponse.status === 201) {
        return newSim;
      } else {
        return thunkAPI.rejectWithValue(newSim);
      }
    } catch (error) {
      console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateSim = createAsyncThunk(
  'legacy/updateSim',
  async ({ simData, legacyID, token }, thunkAPI) => {
    try {
      const simResponse = await fetch(API_URL(`sim/${simData._id}`), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ simData, legacyID })
      });
      const updatedSim = await simResponse.json();
      console.log('updated SIM', updatedSim);
      // 2. call the next api call to fetch the full legacy object to update the state
      if (simResponse.status === 201) {
        // thunkAPI.dispatch(getLegacy({ legacyID, token }));
        return updatedSim;
      } else {
        return thunkAPI.rejectWithValue(updatedSim);
      }
    } catch (error) {
      console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteSim = createAsyncThunk(
  'legacy/deleteSim',
  async ({ simData, legacyID, token }, thunkAPI) => {
    try {
      const resp = await fetch(API_URL(`sim/${simData._id}`), {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
        body: JSON.stringify({ legacyID })
      });
      const data = await resp.json();
      if (resp.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addCategoryItemToSims = createAsyncThunk(
  'legacy/addCategoryItemToSims',
  async ({ category, item, simID, legacyID, token }, thunkAPI) => {
    try {
      const response = await fetch(API_URL(`sim/${simID}/${category}`), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ ...item })
      });
      const data = await response.json();
      if (response.status === 200) {
        thunkAPI.dispatch(getLegacy({ legacyID, token }));
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

/* -------------------------------------------------------------------------- */
/*                                Sub-endpoints                               */
/* -------------------------------------------------------------------------- */

export const toggleGoal = createAsyncThunk(
  'legacy/toggleGoal',
  async ({ category, goalID, legacyID, value, property, token }, thunkAPI) => {
    try {
      const legacyResponse = await fetch(
        API_URL(`legacy/${legacyID}/goals/${category}/${goalID}`),
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ bool: value, property })
        }
      );
      const data = await legacyResponse.json();
      if (legacyResponse.status === 201) {
        thunkAPI.dispatch(getLegacy({ legacyID, token }));
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateCategoryItem = createAsyncThunk(
  'legacy/updateCategoryItem',
  async ({ category, itemID, legacyID, newData, token }, thunkAPI) => {
    const state = thunkAPI.getState().legacy;
    try {
      const oldData = state[category].find((item) => item._id === itemID);
      let body = { ...oldData, ...newData };
      body = _.omit(body, newData.remove);
      const legacyResponse = await fetch(
        API_URL(`legacy/${legacyID}/${category}/${itemID}`),
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ ...body })
        }
      );
      const data = await legacyResponse.json();
      if (legacyResponse.status === 201) {
        thunkAPI.dispatch(getLegacy({ legacyID, token }));
        return data;
      } else {
        console.log(data);
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const completeCategoryItemTask = createAsyncThunk(
  'legacy/completeCategoryItemTask',
  async ({ category, itemID, legacyID, simID, newData, token }, thunkAPI) => {
    const state = thunkAPI.getState().legacy;
    try {
      const oldData = state[category].find((item) => item._id === itemID);
      let body = { ...oldData, ...newData };
      body = _.omit(body, newData.remove);
      const legacyResponse = await fetch(
        API_URL(`legacy/${legacyID}/${category}/${itemID}`),
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ ...body })
        }
      );
      const data = await legacyResponse.json();
      const updatedItem = data[category].find((el) => el._id === itemID);
      if (legacyResponse.status === 201) {
        const completedGoal = verifyGoalCompletion({ state, category });
        if (completedGoal) {
          thunkAPI.dispatch(
            toggleGoal({
              category,
              goalID: completedGoal,
              legacyID,
              value: true,
              property: 'completed',
              token
            })
          );
        }
        if (simID) {
          thunkAPI.dispatch(
            addCategoryItemToSims({
              category,
              item: { ...updatedItem },
              simID,
              legacyID,
              token
            })
          );
        } else {
          thunkAPI.dispatch(getLegacy({ legacyID, token }));
        }
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const completeCategoryItem = createAsyncThunk(
  'legacy/completeCategoryItem',
  async ({ category, itemID, legacyID, simID, token }, thunkAPI) => {
    try {
      const legacyResponse = await fetch(
        API_URL(`legacy/${legacyID}/${category}/${itemID}/complete`),
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      const data = await legacyResponse.json();
      const updatedItem = data[category].find((el) => el._id === itemID);

      if (legacyResponse.status === 200) {
        const state = thunkAPI.getState().legacy;
        const completedGoal = verifyGoalCompletion({ state, category });
        if (completedGoal) {
          thunkAPI.dispatch(
            toggleGoal({
              category,
              goalID: completedGoal,
              legacyID,
              value: true,
              property: 'completed',
              token
            })
          );
        }
        if (simID) {
          thunkAPI.dispatch(
            addCategoryItemToSims({
              category,
              item: { ...updatedItem },
              simID,
              legacyID,
              token
            })
          );
        } else {
          thunkAPI.dispatch(getLegacy({ legacyID, token }));
        }
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateHeirs = createAsyncThunk(
  'legacy/updateHeirs',
  async ({ simsRunning, legacyID, token, ...other }, thunkAPI) => {
    const { laws, ruler } = thunkAPI.getState().legacy;
    const calcs = calculateHeir({ laws, simsRunning, ruler });
    let newHeir;
    if (other.newSim) {
      if (other.laws) {
        newHeir = autoSelectHeir({ laws: other.laws, eligible: calcs.eligibleSims })
      } else if (laws.heir.auto) {
        newHeir = autoSelectHeir({ laws, eligible: calcs.eligibleSims })
      }
    }
    // console.log(newHeir);
    try {
      const simResponse = await fetch(API_URL(`legacy/${legacyID}/potentialHeirs`), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ ...calcs, newHeir })
      });
      const updatedSim = await simResponse.json();
      if (simResponse.status === 201) {
        thunkAPI.dispatch(getLegacy({ legacyID, token }));
        return updatedSim;
      } else {
        return thunkAPI.rejectWithValue(updatedSim);
      }
    } catch (error) {
      console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateLaws = createAsyncThunk(
  'legacy/updateLaws',
  async ({ laws, legacyID, token }, thunkAPI) => {
    try {
      const legacyResponse = await fetch(API_URL(`legacy/${legacyID}/laws`), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ laws })
      });
      const data = await legacyResponse.json();
      if (legacyResponse.status === 201) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updatePacks = createAsyncThunk(
  'legacy/updatePacks',
  async ({ packID, legacyID, value, token }, thunkAPI) => {
    try {
      const legacyResponse = await fetch(API_URL(`legacy/${legacyID}/packs/${packID}`), {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ bool: value })
      });
      const data = await legacyResponse.json();
      if (legacyResponse.status === 201) {
        thunkAPI.dispatch(getLegacy({ legacyID, token }));
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addRules = createAsyncThunk(
  'legacy/addRules',
  async ({ value, legacyID, token }, thunkAPI) => {
    try {
      const legacyResponse = await fetch(API_URL(`legacy/${legacyID}/rules`), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ value })
      });
      const data = await legacyResponse.json();
      if (legacyResponse.status === 201) {
        thunkAPI.dispatch(getLegacy({ legacyID, token }));
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateRules = createAsyncThunk(
  'legacy/updateRules',
  async ({ value, legacyID, rulesid, token }, thunkAPI) => {
    try {
      const legacyResponse = await fetch(API_URL(`legacy/${legacyID}/rules/${rulesid}`), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ value })
      });
      const data = await legacyResponse.json();
      if (legacyResponse.status === 201) {
        thunkAPI.dispatch(getLegacy({ legacyID, token }));
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteRule = createAsyncThunk(
  'legacy/deleteRule',
  async ({ legacyID, rulesid, token }, thunkAPI) => {
    try {
      const resp = await fetch(API_URL(`legacy/${legacyID}/rules/${rulesid}`), {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await resp.json();
      if (resp.status === 200) {
        thunkAPI.dispatch(getLegacy({ legacyID, token }));
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
