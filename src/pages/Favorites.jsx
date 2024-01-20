import React from 'react';
import CarsList from '../components/CarsList/CarsList';
import {  useSelector } from 'react-redux';
import { listFavoriteCars } from '../redux/selectors';

const Favorites = () => {

const favoriteCars = useSelector(listFavoriteCars);
  return (
    <CarsList carsForRender={favoriteCars}/>
  )
}

export default Favorites