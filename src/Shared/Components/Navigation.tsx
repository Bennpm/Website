import styled from "styled-components";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";

export const Navigation = () => {
  return (
    <StyledContainer>
      <Tooltip title="Home" followCursor>
        <Link to={"/"}>
          <HomeOutlinedIcon />
        </Link>
      </Tooltip>

      <Tooltip title="Experience" followCursor>
        <Link to={"/contact"}>
          <WorkOutlineOutlinedIcon />
        </Link>
      </Tooltip>

      <Tooltip title="Tools" followCursor>
        <Link to={"/contact"}>
          <BuildOutlinedIcon />
        </Link>
      </Tooltip>

      <Tooltip title="Contact" followCursor>
        <Link to={"/contact"}>
          <EmailOutlinedIcon />
        </Link>
      </Tooltip>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #2c2a2a;
  padding: 10px 20px;
  margin: 1rem 0 5rem 0;
  gap: 35px;
  width: min-content;
  border-radius: 10px;

  svg {
    width: 25px;
    height: 25px;
    border-radius: 10px;
    fill: #fff;

    &:hover {
      background-color: gray;
    }
  }

  a {
    display: flex;
    align-items: center;
  }

  // Phone and tablet
  @media only screen and (max-width: 1062px) {
    margin: 1rem auto 5rem;
  }
`;
