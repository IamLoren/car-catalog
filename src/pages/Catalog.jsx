import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchcarsThunk } from '../redux/catalogSlice/operations';
import { listAllCars } from '../redux/selectors.js';
import Card from '../components/Card/Card.jsx';

const Catalog = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchcarsThunk())
    },[dispatch])

     const allCars = useSelector(listAllCars);
  return (
    <ul>
        {allCars?.map(car => {
          return  <Card key={car.id} car={car}/>
        })}
    </ul>
  )
}

export default Catalog