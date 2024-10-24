import styled from "styled-components";
import { Layout } from "../Shared/Components/Layout";
import { MyTechStack } from "../Shared/Sections/MyTechStack";

export const TechStack = () => {
  return (
    <Layout>
      <StyledContainer>
        <MyTechStack />
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
