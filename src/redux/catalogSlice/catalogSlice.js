import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { fetchcarsThunk } from "./operations";

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        generalList: [],
        favoriteList: [],
        isModalOpen: false,
        isLoading: false
    },
    reducers: {
        changeModalOpen: (state, {payload}) => {
            state.isModalOpen = payload;
        },
        addFavoriteCar: (state, {payload}) => {
            state.favoriteList.push(payload);
        },
        deleteFavoriteCar: (state, {payload}) => {
            state.favoriteList = state.favoriteList.filter(car => car.id !== payload);
        }
    },
    extraReducers: builder => {
        builder
           .addCase(fetchcarsThunk.pending, state => {
            state.isLoading = true;
          })
          .addCase(fetchcarsThunk.fulfilled, (state, { payload }) => {
            state.generalList = payload;
            state.isLoading = false;
          })
          .addCase(fetchcarsThunk.rejected, (state, { payload }) => {
            state.isLoading = false;
            toast.error(`Failed to edit transaction: ${payload}`);
          });
        }
})

export const {changeModalOpen, addFavoriteCar, deleteFavoriteCar} = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;