import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchcarsThunk } from '../redux/catalogSlice/operations';
import { listAllCars } from '../redux/selectors.js';
import CarsList from '../components/CarsList/CarsList.jsx';

const Catalog = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchcarsThunk())
    },[dispatch])

     const carsForRender = useSelector(listAllCars);
  return (
   <CarsList carsForRender={carsForRender}/>
  )
}

export default Catalog

