import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../configAxios/configAxios";

export const fetchcarsThunk = createAsyncThunk(
    'cars/fetchAll',
    async (_, thunkAPI) => {
      try {
        const { data } = await api.get('adverts/cars');
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
