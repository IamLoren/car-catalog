import { useDispatch, useSelector } from "react-redux";
import { carForModal } from "../../redux/selectors";
import { IoMdClose } from "react-icons/io";
import {
  ImgWrapperDiv,
  StyledCloseButton,
  StyledDescriptionWrapper,
  StyledDropWrapper,
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
  const arrOfRentalConditions = rentalConditions.split(/ (?=[A-Z])/);
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
          <img src={img} alt="car" />
        </ImgWrapperDiv>
        <StyledDescriptionWrapper>
          <h2>
            {make}
            <span>{model}</span>, <span>{year}</span>
          </h2>
          <ul>
            {adressForRender.map((tag) => {
              return <li>&nbsp; {tag} | </li>;
            })}
            <li>&nbsp; Id: {id} | </li>
            <li>&nbsp; Year: {year} | </li>
            <li>&nbsp; Type: {type} | </li>
            <li>&nbsp; Fuel Consumption: {fuelConsumption} | </li>
            <li>&nbsp; Engine Size: {engineSize} </li>
          </ul>
          <p>{description}</p>
          <ul>
            Accessories and functionalities: <br />
            {accessories.map((item, index) => (
              <li key={index}>&nbsp;{item} |</li>
            ))}
            {functionalities.map((item, index) => (
              <li key={index}>
                &nbsp;{item} {index !== functionalities.length - 1 && "|"}
              </li>
            ))}
          </ul>

          <ul>
            Rental Conditions:
            {arrOfRentalConditions.map((item) => (
              <li>
                {item.includes(":")
                  ? item.split(":").map((word, index) => (
                      <span key={index}>
                        {word}
                        {index !== item.split(":").length - 1 && ":"}
                      </span>
                    ))
                  : item}
              </li>
            ))}
            <li>
              Mileage: <span>{mileage.toLocaleString("en")}</span>
            </li>
            <li>
              Price:{" "}
              <span>{parseInt(rentalPrice.replace(/\D/g, ""), 10)}&#36;</span>
            </li>
          </ul>
          <a href="tel:+380730000000">Rental car</a>
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
