import React, { useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import {
  StyledLi,
  ImgWrapperDiv,
  StyledH,
  AccentSpan,
  TagList,
  StyledHeart,
  StyledSpanTooltip,
  StyledTooltip,
} from "./Card.styled.js";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteCar,
  changeCarForModal,
  changeModalOpen,
  deleteFavoriteCar,
} from "../../redux/catalogSlice/catalogSlice.js";
import { listFavoriteCars } from "../../redux/selectors.js";
import BigButton from "../BigButton/BigButton.jsx";

const Card = ({ car }) => {
  const {
    img = `https://kor.ill.in.ua/m/610x385/2238421.jpg`,
    address,
    make,
    model,
    type,
    year,
    rentalPrice,
    rentalCompany,
    id,
    functionalities,
  } = car || {};
  const adressForRender = address?.split(",").reverse().splice(0, 2);
  const dispatch = useDispatch();

  const favoritesCars = useSelector(listFavoriteCars);
  const [isFavorite, setIsFavorite] = useState(() =>
    favoritesCars?.some((car) => car.id === id)
  );

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(deleteFavoriteCar(id));
    } else {
      dispatch(addFavoriteCar(car));
    }
    setIsFavorite(!isFavorite);
  };

  const handleModal = (info) => {
    document.body.style.overflow = "hidden";
    dispatch(changeModalOpen(true));
    dispatch(changeCarForModal(info));
  };

  return (
    <StyledLi>
      <ImgWrapperDiv>
        <img src={img} alt="car" />
      </ImgWrapperDiv>

      <StyledH>
        <div>
          <span>{make}</span> &nbsp;
          <AccentSpan>{model}</AccentSpan>, <span>{year}</span>{" "}
        </div>{" "}
        <span>{rentalPrice}</span>
      </StyledH>
      <TagList>
        {adressForRender?.map((tag, index) => {
          return <li key={index}>&nbsp; {tag} | </li>;
        })}
        <li>&nbsp;{rentalCompany} | </li>
        <li>&nbsp; {type} | </li>
        <li>&nbsp; {make} | </li>
        <li>&nbsp;{id} | </li>
        <li>&nbsp;{functionalities ? functionalities[0] : ""} </li>
      </TagList>
      <BigButton title="Learn more" onClick={() => handleModal(car)} />
      
      <StyledSpanTooltip data-tooltip-id="my-tooltip" data-tooltip-content={isFavorite ? "Remove from favorites" : "Add to favorites"}>
        <StyledTooltip id="my-tooltip" />
        <StyledHeart
          className="heart"
          size="25px"
          onClick={handleFavoriteClick}
          style={{ color: isFavorite ? "blue" : "black" }}
        />
      </StyledSpanTooltip>
    </StyledLi>
  );
};

export default Card;
