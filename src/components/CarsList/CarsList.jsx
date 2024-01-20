import React from 'react';
import styled from 'styled-components';
import Card from '../Card/Card.jsx';

const CarsList = ({carsForRender}) => {

  return (
    <StyledUl>
    {carsForRender?.map(car => {
      return  <Card key={car?.id} car={car}/>
    })}
</StyledUl>
  )
}

export default CarsList

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;