import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllcarsThunk,
  fetchcarsThunk,
} from "../redux/catalogSlice/operations";
import {
  AdvertAmount,
  carsForFilters,
  filtersForCatalog,
  isFirsRender,
  listAllCars,
} from "../redux/selectors.js";
import CarsList from "../components/CarsList/CarsList.jsx";
import Filters from "../components/Filters/Filters.jsx";
import AnySearchResult from "./AnySearchResult/AnySearchResult.jsx";
import Container from "../components/Container/Container.jsx";
import { StyledButton, StyledP } from "./Catalog.styled.js";
import { changeFirstRender } from "../redux/catalogSlice/catalogSlice.js";

const Catalog = () => {
  const dispatch = useDispatch();
const firstRender = useSelector(isFirsRender);
  const filters = useSelector(filtersForCatalog);
  const amount = useSelector(AdvertAmount);
  const [page, setPage] = useState(2);
  const carsForFiltration = useSelector(carsForFilters);
  const addMoreCards = (p) => {
    setPage(page + 1);
    dispatch(fetchcarsThunk(p));
  };

  useEffect(() => {
    if (firstRender) { 
      dispatch(changeFirstRender(false))
      dispatch(fetchcarsThunk(1));
      dispatch(fetchAllcarsThunk());
    } else{
     return
    }
  }, [dispatch, firstRender]);

  const allCars = useSelector(listAllCars);
  const carsForRender = carsForFiltration
    .filter((car) =>
      car.make.toLowerCase().includes(filters?.brand?.toLowerCase())
    )
    .filter(
      (car) =>
        parseInt(car.rentalPrice.replace(/\D/g, ""), 10) <=
        +filters?.selectedOption?.value
    )
    .filter((car) => car.mileage > filters.from && car.mileage < filters.to);
  return (

    <Container>
      <Filters />
      <CarsList
        carsForRender={
          Object.keys(filters).length === 0 ? allCars : carsForRender
        }
      />
      {Object.keys(filters).length !== 0 && carsForRender.length === 0 && (
        <AnySearchResult />
      )}
      {allCars.length !== amount && (
        <StyledButton onClick={() => addMoreCards(page)} type="button">
          Load more
        </StyledButton>
      )}
      {allCars.length === amount && (
        <StyledP>
          There are all the car rental offers we have for you today
        </StyledP>
      )}
    </Container>
  );
};

export default Catalog;
