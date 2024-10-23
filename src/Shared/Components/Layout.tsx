import styled from "styled-components";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";
import { InfoCard } from "./InfoCard";
import FadeIn from "react-fade-in/lib/FadeIn";

export const Layout = ({ children }: any) => {
  return (
    <>
      <StyledContainer>
        <LeftCardSection>
          <FadeIn delay={500}>
            <InfoCard />
          </FadeIn>
        </LeftCardSection>
        <RightContentSection>
          <Navigation />
          <div>{children}</div>
        </RightContentSection>
      </StyledContainer>
      <Footer />
    </>
  );
};

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

  // Phone and tablet
  @media only screen and (max-width: 1062px) {
    width: 100%;
    height: max-content;
    overflow-y: visible;
    order: 1;
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
