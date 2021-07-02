import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from 'utils/apiConfig';

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
      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getUserMetadata = createAsyncThunk(
  'session/getUserMetadata',
  async ({ token }, thunkAPI) => {
    try {
      const userID = thunkAPI.getState().session.user.id;
      const response = await fetch(API_URL(`users/${userID}/metadata`), {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
      });
      const data = await response.json();
      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'session/deleteUser',
  async ({ userID, token }, thunkAPI) => {
    try {
      const response = await fetch(API_URL(`users/${userID}`), {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
      });
      const data = await response.json();
      if (response.status === 204) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const updatePassword = createAsyncThunk(
  'session/updatePassword',
  async ({ userID, userEmail, token }, thunkAPI) => {
    try {
      const response = await fetch(API_URL(`users/${userID}/resetPassword`), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ email: userEmail })
      });
      const data = await response.json();
      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateUserMetadata = createAsyncThunk(
  'session/updateUserMetadata',
  async ({ token, newData }, thunkAPI) => {
    try {
      const userID = thunkAPI.getState().session.user.id;
      const response = await fetch(API_URL(`users/${userID}/metadata`), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(newData)
      });
      const data = await response.json();
      if (response.status === 201) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
