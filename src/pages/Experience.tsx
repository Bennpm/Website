import styled from "styled-components";
import { Layout } from "../Shared/Components/Layout";
import { MyExperience } from "../Shared/Sections/MyExperience";

export const Experience = () => {
  return (
    <Layout>
      <StyledContainer>
        <MyExperience />
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
