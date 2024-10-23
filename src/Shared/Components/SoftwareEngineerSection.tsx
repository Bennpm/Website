import { Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export const SoftwareEngineerSection = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (domRef.current) {
        // In your case there's only one element to observe:
        if (entries[0].isIntersecting) {
          // Not possible to set it back to false like this:
          setIsVisible(true);

          // No need to keep observing:
          observer.unobserve(domRef.current);
        }
      }
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  console.log(isVisible);

  return (
    <StyledContainer ref={domRef} className={isVisible ? "is-visible" : ""}>
      <StyledTypography variant="h1" fontWeight={800} color="#fff">
        SOFTWARE
      </StyledTypography>
      <StyledTypography variant="h1" fontWeight={800} color="#b6b4bd33">
        ENGINEER
      </StyledTypography>
      <StyledLongParagraph variant="h6" width={520} color="#998f8f">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </StyledLongParagraph>
      <StyledNumbers>
        <StyledStat>
          <StyledParagraph variant="h1" fontWeight={800} color="#fff">
            +4
          </StyledParagraph>
          <StyledParagraph variant="h6" fontWeight={800} color="#998f8f">
            YEARS OF EXPERIENCE
          </StyledParagraph>
        </StyledStat>
        <StyledStat>
          <StyledParagraph variant="h1" fontWeight={800} color="#fff">
            +10
          </StyledParagraph>
          <StyledParagraph variant="h6" fontWeight={800} color="#998f8f">
            PROJECTS COMPLETED
          </StyledParagraph>
        </StyledStat>
        <StyledStat>
          <StyledParagraph variant="h1" fontWeight={800} color="#fff">
            +4
          </StyledParagraph>
          <StyledParagraph variant="h6" fontWeight={800} color="#998f8f">
            YEARS OF EXPERIENCE
          </StyledParagraph>
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

const StyledTypography = styled(Typography)`
  // Phone and tablet
  @media only screen and (max-width: 1062px) {
    display: flex;
    justify-content: center;
  }
`;

const StyledParagraph = styled(Typography)`
  // Phone and tablet
  text-align: left;
  @media only screen and (max-width: 1062px) {
    text-align: center;
  }
`;

const StyledLongParagraph = styled(Typography)`
  margin: 0 0 10rem 0;
  // Phone and tablet
  @media only screen and (max-width: 1062px) {
    text-align: center;
    margin: 0 auto !important;
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
