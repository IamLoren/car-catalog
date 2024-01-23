import { useDispatch, useSelector } from "react-redux";
import { carForModal } from "../../redux/selectors";
import { IoMdClose } from "react-icons/io";
import {
  ImgWrapperDiv,
  StyledAccentSpan,
  StyledCloseButton,
  StyledDescriptionWrapper,
  StyledDropWrapper,
  StyledLink,
  StyledP,
  StyledUlAccessories,
  StyledUlConditions,
} from "./Modal.styled";
import { changeModalOpen } from "../../redux/catalogSlice/catalogSlice";
import { useEffect } from "react";

const Modal = () => {
  const car = useSelector(carForModal);
  const {
    address,
    mileage,
    type,
    id,
    img,
    photoLink,
    make,
    model,
    year,
    engineSize,
    fuelConsumption,
    rentalPrice,
    description,
    accessories,
    functionalities,
    rentalConditions,
  } = car || {};
  const arrOfRentalConditions = [...rentalConditions.split(/ (?=[A-Z])/), `Mileage: ${mileage.toLocaleString('en')}`, `Price: ${parseInt(rentalPrice.replace(/\D/g, ""), 10)}$`];
  const adressForRender = address.split(",").reverse().splice(0, 2);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        document.body.style.overflow = "auto";
        dispatch(changeModalOpen(false));
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [dispatch]);

  const closeModal = () => {
    document.body.style.overflow = "auto";
    dispatch(changeModalOpen(false));
  };

  return (
    <StyledDropWrapper
      onClick={(e) =>
        !e.target.closest("article") && closeModal()}>
      <article>
        <ImgWrapperDiv>
          <img src={img ? img : photoLink} alt="car" />
        </ImgWrapperDiv>
        <StyledDescriptionWrapper>
          <h2>
            {make}&nbsp;
            <StyledAccentSpan>{model}</StyledAccentSpan>, <span>{year}</span>
          </h2>
          <ul>
            {adressForRender.map((tag,index) => {
              return <li key={index}>&nbsp; {tag} | </li>;
            })}
            <li>&nbsp; Id: {id} | </li>
            <li>&nbsp; Year: {year} | </li>
            <li>&nbsp; Type: {type} | </li>
            <li>&nbsp; Fuel Consumption: {fuelConsumption} | </li>
            <li>&nbsp; Engine Size: {engineSize} </li>
          </ul>
          <StyledP>{description}</StyledP>
          <StyledUlAccessories>
            Accessories and functionalities: <br />
            {accessories.map((item, index) => (
              <li key={index}>&nbsp;{item} |</li>
            ))}
            {functionalities.map((item, index) => (
              <li key={index}>
                &nbsp;{item} {index !== functionalities.length - 1 && "|"}
              </li>
            ))}
          </StyledUlAccessories>

          <StyledUlConditions>
            Rental Conditions: <br />
            {arrOfRentalConditions.map((item, index) => (
        <li key={index}>
          {item.split(/(\d+)/).map((segment, segmentIndex) => (
            isNaN(Number(segment)) ? (
              <span key={segmentIndex}>{segment}</span>
            ) : (
              <StyledAccentSpan key={segmentIndex}>{segment}</StyledAccentSpan>
            )
          ))}
        </li>
      ))}
          </StyledUlConditions>
          <StyledLink href="tel:+380730000000">Rental car</StyledLink>
        </StyledDescriptionWrapper>
        <StyledCloseButton
          onClick={closeModal}
          type="button"
        >
          <IoMdClose size="20" />
        </StyledCloseButton>
      </article>
    </StyledDropWrapper>
  );
};

export default Modal;
