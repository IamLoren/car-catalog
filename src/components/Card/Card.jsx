import React from 'react';
import { FaRegHeart } from "react-icons/fa";

const Card = ({car}) => {
    const {img, make, model, year, rentalPrice} = car;
  return (
    <li>
        <img src={img} alt="car" />
        <h3>{make}{model}, <span>{year}</span> <span>&#36;{rentalPrice}</span></h3>
        <span></span>
        {/* <ul>
           {tags.map(tag => {
            return <span>{tag} </span>
            })} 
        </ul> */}
        <button type="button">Learn more</button>
        <FaRegHeart size="18px"/>
    </li>
  )
}

export default Card;