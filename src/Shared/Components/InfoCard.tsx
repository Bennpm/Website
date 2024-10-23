import { Typography } from "@mui/material";
import styled from "styled-components";
import Portrait from "../../assets/Portrait1.jpeg";
import { theme } from "../Theme/sc-theme";

export const InfoCard = () => {
  return (
    <StyledContainer>
      <StyledCard>
        <StyledDots>
          <svg viewBox="0 0 120 120">
            <circle cx="55" cy="55" r="50" />
            <foreignObject
              x="5"
              y="5"
              height="100px"
              width="100px"
            ></foreignObject>
          </svg>
        </StyledDots>
        <StyledDotsLower>
          <svg viewBox="0 0 120 120">
            <circle cx="55" cy="55" r="50" />
            <foreignObject
              x="5"
              y="5"
              height="100px"
              width="100px"
            ></foreignObject>
          </svg>
        </StyledDotsLower>
        <StyledContent>
          <StyledImage src={Portrait} />
          <Typography variant="h4" fontWeight={800} marginTop={2}>
            Benn Pelete
          </Typography>
          <Typography
            fontSize={18}
            fontWeight={600}
            marginTop={10}
            align="center"
            color="#6a6b6e"
          >
            A Software Engineer who has developed countless innovative
            solutions.
          </Typography>
        </StyledContent>
      </StyledCard>
    </StyledContainer>
  );
};

const StyledImage = styled.img`
  width: 240px;
  height: 284px;
  object-fit: cover;
  border-radius: 12px;
  border: 3px solid ${theme.colors.blue};
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px 0;
`;

const StyledCard = styled.div`
  width: 304px;
  height: 600px;
  background-color: #fff;
  border: 3px solid ${theme.colors.orange};
  border-radius: 12px;
  position: relative;
  overflow: hidden;

  // Phone and tablet
  @media only screen and (max-width: 1062px) {
    width: 80%;
  }
`;

const StyledContainer = styled.div`
  padding: 30px 20px;

  // Phone and tablet
  @media only screen and (max-width: 1062px) {
    display: flex;
    justify-content: center;
    padding: 0;
    width: 100%;
  }
`;

const StyledDots = styled.div`
  width: 250px;
  height: 250px;
  position: absolute;
  top: -150px;
  left: -10px;

  svg {
    stroke-dasharray: 8, 8.5;
  }

  circle {
    fill: transparent;
    stroke: ${theme.colors.red};
    stroke-width: 1.5;
  }
`;

const StyledDotsLower = styled.div`
  width: 250px;
  height: 250px;
  position: absolute;
  top: 350px;
  left: -110px;

  svg {
    stroke-dasharray: 8, 8.5;
  }

  circle {
    fill: transparent;
    stroke: ${theme.colors.red};
    stroke-width: 1.5;
  }
`;
