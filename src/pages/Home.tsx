import styled from "styled-components";
import { Layout } from "../Shared/Components/Layout";
import { SoftwareEngineerSection } from "../Shared/Components/SoftwareEngineerSection";

export const Home = () => {
  return (
    <Layout>
      <StyledContainer>
        <SoftwareEngineerSection />
        <SoftwareEngineerSection />

        <SoftwareEngineerSection />

        <SoftwareEngineerSection />
      </StyledContainer>
    </Layout>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;
