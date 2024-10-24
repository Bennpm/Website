import styled from "styled-components";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";
import { InfoCard } from "./InfoCard";
import FadeIn from "react-fade-in/lib/FadeIn";
import { theme } from "../Theme/sc-theme";
import { useBlobLocation } from "../Hooks/useBlobLocation";

export const Layout = ({ children }: any) => {
  const { clickLocation, handleClick } = useBlobLocation();

  return (
    <StyledMainContainer onClick={handleClick}>
      <StyledClickDot
        viewBox="0 0 71 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          left: clickLocation.positionX - 20,
          top: clickLocation.positionY - 20,
        }}
      >
        <path
          d="M44.1503 1.94122C51.9302 6.4737 52.932 24.2551 58.672 43.8645C64.4713 63.424 75.0088 84.8115 68.6096 94.3465C62.2105 103.882 38.8746 101.564 23.8395 92.278C8.74502 83.0416 1.89654 66.7728 0.401876 52.6915C-1.09278 38.6101 2.88497 26.6167 12.2348 16.3571C21.53 6.03395 36.3158 -2.65486 44.1503 1.94122Z"
          fill={theme.colors.orange}
        />
      </StyledClickDot>
      <StyledContainer>
        <LeftCardSection>
          <FadeIn delay={200}>
            <InfoCard />
          </FadeIn>
        </LeftCardSection>
        <RightContentSection>
          <Navigation />
          <div>{children}</div>
        </RightContentSection>
      </StyledContainer>
      <Footer />
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh:
`;

const StyledClickDot = styled.svg`
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 100;
  transition: left 0.7s ease, top 0.7s ease;
`;

const LeftCardSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 40%;
  height: 100%;
  padding-right: 80px;

  // Phone and tablet
  @media only screen and (max-width: 1062px) {
    width: 100%;
    height: max-content;
    justify-content: center;
    order: 2;
    padding-right: 0;
    padding-bottom: 50px;
  }
`;

const RightContentSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  overflow-y: scroll;
  padding-right: 24px;

  // Phone and tablet
  @media only screen and (max-width: 1062px) {
    width: 100%;
    height: max-content;
    overflow-y: visible;
    order: 1;
    padding: 0 0;
  }
`;

const StyledContainer = styled.div`
  background-color: #181414;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;

  // Phone and tablet
  @media only screen and (max-width: 1062px) {
    flex-direction: column;
    overflow-y: scroll;
  }
`;
