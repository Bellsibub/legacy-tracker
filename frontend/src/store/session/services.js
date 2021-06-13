/* eslint-disable no-underscore-dangle */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from 'utils/apiConfig';

export const getData = createAsyncThunk(
  'session/getData',
  async (thunkAPI) => {
    try {
      const response = await fetch(API_URL(`data`), {
        method: 'GET'
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