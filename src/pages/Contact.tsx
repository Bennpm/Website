import styled from "styled-components";
import { Layout } from "../Shared/Components/Layout";
import { LetsWorkTogetherSection } from "../Shared/Sections/LetsWorkTogetherSection";

export const Contact = () => {
  return (
    <Layout>
      <StyledContainer>
        <LetsWorkTogetherSection />
      </StyledContainer>
    </Layout>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
`;
