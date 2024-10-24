import styled from "styled-components";
import { useFadeIntoView } from "../Hooks/useFadeIntoView";
import { Title } from "../Components/Title";
import { StyledLongParagraph } from "./SoftwareEngineerSection";
import XO from "../../assets/xo.jpeg";
import Sajj from "../../assets/sajj.jpeg";
import Cashflow from "../../assets/cashflow.jpeg";
import Thirdbridge from "../../assets/thirdbridge.png";

import { FlipCard } from "../Components/FlipCard";

export interface Experience {
  company: string;
  companyLogo: string;
  role: string;
  description: string;
}

const experiences: Experience[] = [
  {
    company: "ExPretio Technologies",
    companyLogo: XO,
    role: "Frontend Developer",
    description: "Did a lot of things",
  },
  {
    company: "SAJJ Studio",
    companyLogo: Sajj,

    role: "Partner - Frontend Developer",
    description: "Did a lot of things",
  },
  {
    company: "Cashflow.io",
    companyLogo: Cashflow,
    role: "Frontend Developer",
    description: "Did a lot of things",
  },
  {
    company: "Thirdbridge",
    companyLogo: Thirdbridge,
    role: "Frontend Developer Intern",
    description: "Did a lot of things",
  },
];

export const MyExperience = () => {
  const { isVisible, domRef } = useFadeIntoView();

  return (
    <StyledContainer ref={domRef} className={isVisible ? "is-visible" : ""}>
      <Title text="MY" textColor="#fff" allowSwitch />
      <Title text="EXPERIENCE" textColor="#b6b4bd33" allowSwitch />
      <StyledLongParagraph $color="#998f8f">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </StyledLongParagraph>
      <div>
        <Cards />
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  opacity: 0;
  transform: translate(0, 50%);
  visibility: hidden;
  transition: opacity 500ms ease-out, transform 500ms ease-out;
  will-change: opacity, visibility;

  &.is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
`;

const Cards = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        marginBottom: "2rem",
      }}
    >
      {experiences.map((experience) => (
        <FlipCard experience={experience} />
      ))}
    </div>
  );
};
