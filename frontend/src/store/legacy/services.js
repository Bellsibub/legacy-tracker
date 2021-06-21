/* eslint-disable no-plusplus */
import _ from 'lodash';
import { verifyGoalCompletion } from 'utils/calculations';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addLegacyToUser, removeLegacyForUser } from 'store/session/services';
import { setLegacy } from 'store/session';
import { API_URL } from 'utils/apiConfig';

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
        // call the authAPI to save to usermeta
        thunkAPI.dispatch(addLegacyToUser({ token, legacyID: data._id }));
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
      // 1. create a new sim to be the ruler
      const simResponse = await fetch(API_URL('sim'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ simData: { ...founder } })
      });
      const newSim = await simResponse.json();
      console.log('new SIM', newSim);
      // 2. call the next api call to create a new legacy with the newly created sim
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
      thunkAPI.dispatch(removeLegacyForUser({ token }));
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

export const createSim = createAsyncThunk(
  'legacy/createSim',
  async ({ simData, legacyID, token }, thunkAPI) => {
    try {
      // 1. create a new sim to be the ruler
      const simResponse = await fetch(API_URL('sim'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ simData, legacyID })
      });
      const newSim = await simResponse.json();
      // 2. call the next api call to create a new legacy with the newly created sim
      if (simResponse.status === 201) {
        thunkAPI.dispatch(getLegacy({ legacyID, token }));
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
        body: JSON.stringify({ ...simData })
      });
      const updatedSim = await simResponse.json();
      console.log('updated SIM', updatedSim);
      // 2. call the next api call to fetch the full legacy object to update the state
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

export const deleteSim = createAsyncThunk(
  'legacy/deleteSim',
  async ({ simID, legacyID, token }, thunkAPI) => {
    try {
      // 1. update sim based on ID
      const resp = await fetch(API_URL(`sim/${simID}`), {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await resp.json();
      console.log('updated SIM', data);
      // 2. call the next api call to fetch the full legacy object to update the state
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

export const updateLegacy = createAsyncThunk(
  'legacy/updateLegacy',
  async ({ newData, legacyID, token }, thunkAPI) => {
    try {
      // 1. create a new sim to be the ruler
      const legacyResponse = await fetch(API_URL(`legacy/${legacyID}`), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ ...newData })
      });
      const data = await legacyResponse.json();
      // console.log('updated LEGACY', data);
      // 2. call the next api call to fetch the full legacy object to update the state
      if (legacyResponse.status === 200) {
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

export const updateLaws = createAsyncThunk(
  'legacy/updateLaws',
  async ({ laws, legacyID, token }, thunkAPI) => {
    try {
      // 1. create a new sim to be the ruler
      const legacyResponse = await fetch(API_URL(`legacy/${legacyID}/laws`), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ laws })
      });
      const data = await legacyResponse.json();
      console.log('updated laws', data);
      // 2. call the next api call to fetch the full legacy object to update the state
      if (legacyResponse.status === 200) {
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

export const addCategoryItemToSims = createAsyncThunk(
  'legacy/addCategoryItemToSims',
  async ({ category, item, simID, legacyID, token }, thunkAPI) => {
    // console.log(newData);
    try {
      // 1. create a new sim to be the ruler
      const response = await fetch(API_URL(`sim/${simID}/${category}`), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ ...item })
      });
      const data = await response.json();
      // 2. call the next api call to fetch the full legacy object to update the state
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

export const toggleGoal = createAsyncThunk(
  'legacy/toggleGoal',
  async ({ category, goalID, legacyID, value, property, token }, thunkAPI) => {
    // console.log(newData);
    try {
      // 1. create a new sim to be the ruler
      const legacyResponse = await fetch(
        API_URL(`legacy/${legacyID}/goals/${category}/${goalID}`),
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ bool: value, property })
        }
      );
      const data = await legacyResponse.json();
      // 2. call the next api call to fetch the full legacy object to update the state
      if (legacyResponse.status === 200) {
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

export const updatePacks = createAsyncThunk(
  'legacy/updatePacks',
  async ({ packID, legacyID, value, token }, thunkAPI) => {
    // console.log(newData);
    try {
      // 1. create a new sim to be the ruler
      const legacyResponse = await fetch(
        API_URL(`legacy/${legacyID}/packs/${packID}`),
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ bool: value })
        }
      );
      const data = await legacyResponse.json();
      // 2. call the next api call to fetch the full legacy object to update the state
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
    // console.log(newData);
    const state = thunkAPI.getState().legacy;
    try {
      // setup the body to be sent
      const oldData = state[category].find((item) => item._id === itemID);
      let body = { ...oldData, ...newData };
      body = _.omit(body, newData.remove);
      // 1. create a new sim to be the ruler
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
      // const updatedItem = data[category].find((el) => el._id === itemID);

      // console.log('UpdatedITEM', updatedItem);
      // 2. call the next api call to fetch the full legacy object to update the state
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

export const completeCategoryItem = createAsyncThunk(
  'legacy/completeCategoryItem',
  async ({ category, itemID, legacyID, simID, token }, thunkAPI) => {
    // console.log(newData);
    try {
      // 1. create a new sim to be the ruler
      const legacyResponse = await fetch(
        API_URL(`legacy/${legacyID}/${category}/${itemID}`),
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      const data = await legacyResponse.json();
      const updatedItem = data[category].find((el) => el._id === itemID);

      // 2. call the next api call to fetch the full legacy object to update the state
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

export const completeCategoryItemTask = createAsyncThunk(
  'legacy/completeCategoryItemTask',
  async ({ category, itemID, legacyID, simID, newData, token }, thunkAPI) => {
    // console.log(newData);
    const state = thunkAPI.getState().legacy;
    try {
      const oldData = state[category].find((item) => item._id === itemID);
      // console.log('old data', oldData);
      let body = { ...oldData, ...newData };
      body = _.omit(body, newData.remove);
      // 1. create a new sim to be the ruler
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
      // console.log('updated LEGACY', data);
      const updatedItem = data[category].find((el) => el._id === itemID);
      // console.log('UpdatedITEM', updatedItem);
      // 2. call the next api call to fetch the full legacy object to update the state
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
