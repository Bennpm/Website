import styled from "styled-components";
import { Layout } from "../Shared/Components/Layout";
import { SoftwareEngineerSection } from "../Shared/Sections/SoftwareEngineerSection";
import { LetsWorkTogetherSection } from "../Shared/Sections/LetsWorkTogetherSection";

export const Home = () => {
  return (
    <Layout>
      <StyledContainer>
        <SoftwareEngineerSection />
        <LetsWorkTogetherSection />
      </StyledContainer>
    </Layout>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;
