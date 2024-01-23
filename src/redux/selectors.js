export const listAllCars = state => state.catalog.generalList;
export const listFavoriteCars = state => state.catalog.favoriteList;
export const isModalOpen = state => state.catalog.isModalOpen;
export const carForModal = state => state.catalog.carForModal;
export const filtersForCatalog = state => state.catalog.filters;
export const AdvertAmount = state => state.catalog.amount;
export const isFirsRender = state => state.catalog.isFirsRender;
export const carsForFilters = state => state.catalog.allCars;