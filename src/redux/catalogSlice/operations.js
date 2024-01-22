import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../configAxios/configAxios";

export const fetchcarsThunk = createAsyncThunk(
    'cars/fetchAllWithPag',
    async (page, thunkAPI) => {
      try {
        const params = new URLSearchParams({
          page : page,
          limit: 12,
        })
        const { data } = await api.get(`adverts/cars?${params}`);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const fetchAllcarsThunk = createAsyncThunk(
    'cars/fetchAll',
    async (__, thunkAPI) => {
      try {
        const { data } = await api.get(`adverts/cars`);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
