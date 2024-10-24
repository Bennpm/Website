import styled, { css } from "styled-components";
import { useFadeIntoView } from "../Hooks/useFadeIntoView";

export const SoftwareEngineerSection = () => {
  const { isVisible, domRef } = useFadeIntoView();

  return (
    <StyledContainer ref={domRef} className={isVisible ? "is-visible" : ""}>
      <StyledH1 $color="#fff">SOFTWARE</StyledH1>
      <StyledH1 $color="#b6b4bd33">ENGINEER</StyledH1>
      <StyledLongParagraph $color="#998f8f">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </StyledLongParagraph>
      <StyledNumbers>
        <StyledStat>
          <StyledH1 $color="#fff">+4</StyledH1>
          <StyledH6 $color="#998f8f">YEARS OF EXPERIENCE</StyledH6>
        </StyledStat>
        <StyledStat>
          <StyledH1 $color="#fff">+10</StyledH1>
          <StyledH6 $color="#998f8f">PROJECTS COMPLETED</StyledH6>
        </StyledStat>
        <StyledStat>
          <StyledH1 $color="#fff">+9</StyledH1>
          <StyledH6 $color="#998f8f">MASTERED TECHNOLOGIES</StyledH6>
        </StyledStat>
      </StyledNumbers>
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

const StyledH1 = styled.h1<{ $color: string }>`
  ${({ $color }) => css`
    margin: 0;
    font-size: 6rem;
    font-weight: 800;
    line-height: 1.167;
    color: ${$color};
  `}

  // Tablet
  @media only screen and (max-width: 1062px) {
    display: flex;
    justify-content: center;
  }

  // Phone
  @media only screen and (max-width: 600px) {
    margin: 0;
    font-size: 2rem;
  }
`;

const StyledH6 = styled.h6<{ $color: string }>`
  ${({ $color }) => css`
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.6;
    font-weight: 800;
    text-align: center;
    color: ${$color};
  `}

  // Tablet
  @media only screen and (max-width: 1062px) {
    display: flex;
    justify-content: center;
  }

  // Phone
  @media only screen and (max-width: 600px) {
    margin: 0;
    font-size: 1rem;
  }
`;

const StyledLongParagraph = styled.h6<{ $color: string }>`
  ${({ $color }) => css`
    margin: 0 0 3rem;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.6;
    width: 520px;
    color: ${$color};
  `}

  // Tablet
  @media only screen and (max-width: 1062px) {
    text-align: center;
    margin: 0 auto !important;
  }

  // Phone
  @media only screen and (max-width: 600px) {
    margin: 1rem auto !important;
    width: 100%;
    font-size: 1rem;
  }
`;

const StyledNumbers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 40px;
  margin-bottom: 60px;

  // Phone and tablet
  @media only screen and (max-width: 1062px) {
    justify-content: center;
  }
`;

const StyledStat = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;
