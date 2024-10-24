import { useState } from "react";
import styled, { css } from "styled-components";

interface TitleProps {
  text: string;
  textColor: string;
  allowSwitch?: boolean;
}

export const Title = ({ text, textColor, allowSwitch }: TitleProps) => {
  const [displayedText, setDisplayedText] = useState<string>(text);

  const reverseText = () => {
    if (allowSwitch) {
      setDisplayedText((prevState) => prevState.split("").reverse().join(""));
    }
  };

  return (
    <StyledH1
      $color={textColor}
      onMouseEnter={() => reverseText()}
      onMouseLeave={() => reverseText()}
    >
      {displayedText}
    </StyledH1>
  );
};

const StyledH1 = styled.h1<{ $color: string }>`
  ${({ $color }) => css`
    margin: 0;
    font-size: 6rem;
    font-weight: 800;
    line-height: 1.167;
    color: ${$color};
  `}

  // Tablet
  @media only screen and (max-width: 1062px) {
    display: flex;
    justify-content: center;
  }

  // Phone
  @media only screen and (max-width: 600px) {
    margin: 0;
    font-size: 2rem;
  }
`;
