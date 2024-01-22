import { createPortal } from "react-dom";
import Card from "../Card/Card.jsx";
import { useSelector } from "react-redux";
import { isModalOpen } from "../../redux/selectors.js";
import Modal from "../Modal/Modal.jsx";
import { StyledCarsList } from "./CarsList.styled.js";

const CarsList = ({ carsForRender }) => {
  const isModal = useSelector(isModalOpen);

  return (
    <>
    <StyledCarsList>
      {carsForRender?.map((car) => {
        return <Card key={car?.id} car={car} />;
      })}
      {isModal && createPortal(<Modal />, document.querySelector("#root"))}
    </StyledCarsList>
    
    </>
  );
};

export default CarsList;
