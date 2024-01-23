import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { fetchAllcarsThunk, fetchcarsThunk } from "./operations";

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    amount: 0,
    generalList: [],
    favoriteList: [],
    carForModal: {},
    filters: {},
    allCars: [],
    isModalOpen: false,
    isLoading: false,
    isFirsRender: true,
  },
  reducers: {
    changeFirstRender: (state, { payload }) => {
      state.isFirsRender = payload;
    },
    changeModalOpen: (state, { payload }) => {
      state.isModalOpen = payload;
    },
    addFavoriteCar: (state, { payload }) => {
      if (state.favoriteList.some((car) => car.id === payload.id)) {
        return;
      } else {
        state.favoriteList.push(payload);
      }
    },
    deleteFavoriteCar: (state, { payload }) => {
      state.favoriteList = state.favoriteList.filter(
        (car) => car.id !== payload
      );
    },
    changeCarForModal: (state, { payload }) => {
      state.carForModal = payload;
    },
    changeFilters: (state, { payload }) => {
      state.filters = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchcarsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchcarsThunk.fulfilled, (state, { payload }) => {
        state.generalList = [...state.generalList, ...payload];
        state.isLoading = false;
      })
      .addCase(fetchcarsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(`Failed to edit transaction: ${payload}`);
      })
      .addCase(fetchAllcarsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllcarsThunk.fulfilled, (state, { payload }) => {
        state.amount = payload.length;
        state.allCars = payload;
        state.isLoading = false;
      })
      .addCase(fetchAllcarsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(`Failed to edit transaction: ${payload}`);
      });
  },
});

export const {
  changeFirstRender,
  changeModalOpen,
  addFavoriteCar,
  deleteFavoriteCar,
  changeCarForModal,
  changeFilters,
} = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
