import audi from "../../img/cars/audi.png";
import bmw from "../../img/cars/bmw.png";
import daewoo from "../../img/cars/daewoo.png";
import mazda from "../../img/cars/mazda.png";
import honda from "../../img/cars/honda.png";
import mg from "../../img/cars/mg.png";
import mitsubishi from "../../img/cars/mitsubishi.png";
import { AnimationWrapper, StyledUl } from "./IconsLine.styled";

const IconsLine = () => {
  const images = [
    audi,
    bmw,
    daewoo,
    mazda,
    honda,
    mg,
    mitsubishi,
    audi,
    bmw,
    daewoo,
    mazda,
    honda,
    mg,
    mitsubishi,
    audi,
    bmw,
    daewoo,
    mazda
  ];
  
  return (
    <AnimationWrapper>
       <StyledUl>
      {images.map((img, index) => 
        <li key={index}>
          <img src={img} alt={img} width={img === mazda || img === audi ? '150' : "110"} />
        </li>
      )}
    </StyledUl>
    </AnimationWrapper>
);
};
export default IconsLine;
