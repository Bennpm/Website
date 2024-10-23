import styled from "styled-components";
import { theme } from "../Theme/sc-theme";

export const Footer = () => {
  return (
    <StyledContainer>
      <div>Made By Benn P | Powered by Knowledge</div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  background: linear-gradient(
    49.79deg,
    ${theme.colors.blue} -21.04%,
    ${theme.colors.red} 57.35%,
    ${theme.colors.orange} 136.6%
  );
  color: #fff;
  padding: 1.5rem 3rem;
`;
