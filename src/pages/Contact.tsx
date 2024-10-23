import styled from "styled-components";
import { Layout } from "../Shared/Components/Layout";

export const Contact = () => {
  return (
    <Layout>
      <StyledContainer>
        {[...Array(60)].map((_, index) => (
          <div key={index}>Contact Details</div>
        ))}
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
