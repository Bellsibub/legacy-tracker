/* eslint-disable no-underscore-dangle */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

import { API_URL, AUTH_URL } from 'utils/apiConfig';

export const getData = createAsyncThunk(
  'session/getData',
  async ({ token }, thunkAPI) => {
    try {
      const response = await fetch(API_URL(`data`), {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      console.log('fetched DATA: ', data);
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
export const addLegacyToUser = createAsyncThunk(
  'session/addLegacyToUser',
  async ({ token, legacyID }, thunkAPI) => {
    try {
      const userID = thunkAPI.getState().session.user.id;
      const { legacies } = thunkAPI.getState().session.user;
      const response = await fetch(API_URL(`users/${userID}/legacies`), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ legacyID })
      });
      const data = await response.json();
      console.log('updated user: ', data);
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
export const getUserMetadata = createAsyncThunk(
  'session/getUserMetadata',
  async ({ token }, thunkAPI) => {
    try {
      const userID = thunkAPI.getState().session.user.id;
      // const { legacies } = thunkAPI.getState().session.user;
      const response = await fetch(API_URL(`users/${userID}/legacies`), {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        // body: JSON.stringify({ legacyID })
      });
      const data = await response.json();
      console.log('fethed user: ', data);
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
