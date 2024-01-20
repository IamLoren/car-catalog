import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { StyledLi, ImgWrapperDiv } from './Card.styled.js';
import { useDispatch } from 'react-redux';
import { addFavoriteCar } from '../../redux/catalogSlice/catalogSlice.js';

const Card = ({car}) => {
  const dispatch= useDispatch();
    const {img = `https://kor.ill.in.ua/m/610x385/2238421.jpg`, make, model, year, rentalPrice} = car || {};

  return (
    <StyledLi>
      <ImgWrapperDiv>
        <img src={img} alt="car" />
      </ImgWrapperDiv>
        
        <h3>{make}{model}, <span>{year}</span> <span>&#36;{rentalPrice}</span></h3>
        <span></span>
        {/* <ul>
           {tags.map(tag => {
            return <span>{tag} </span>
            })} 
        </ul> */}
        <button type="button">Learn more</button>
        <FaRegHeart size="18px" onClick={() => dispatch(addFavoriteCar(car))}/>
    </StyledLi>
  )
}

export default Card;
