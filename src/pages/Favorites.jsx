import React from 'react';
import CarsList from '../components/CarsList/CarsList';
import Container from '../components/Container/Container'
import {  useSelector } from 'react-redux';
import { listFavoriteCars } from '../redux/selectors';

const Favorites = () => {

const favoriteCars = useSelector(listFavoriteCars);
  return (
    <Container>
      <CarsList carsForRender={favoriteCars}/>
    </Container>
    
  )
}

export default Favorites