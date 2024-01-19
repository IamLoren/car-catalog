import React from 'react';
import { FaRegHeart } from "react-icons/fa";

const Card = () => {
  return (
    <li>
        <img src="" alt="" />
        <h3></h3>
        <span></span>
        <ul>
           {tags.map(tag => {
            return <span>{tag} </span>
            })} 
        </ul>
        <button type="button">Learn more</button>
        <FaRegHeart size="18px"/>
    </li>
  )
}

export default Card;