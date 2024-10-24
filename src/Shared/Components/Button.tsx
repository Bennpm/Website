import styled, { css, DefaultTheme } from "styled-components";
import { theme } from "../Theme/sc-theme";

interface ButtonProps {
  fill?: keyof DefaultTheme["colors"];
  color?: keyof DefaultTheme["colors"];
  state?: "progress" | "success" | "error" | "disabled";
}

export const Button = styled.div<ButtonProps>`
  ${({ fill = "orange", color = "darkBlue", state }) => css`
    text-align: center;
    padding: 1rem 4rem;
    border-radius: 25px;
    font-family: ${theme.typography.sansSerif};
    font-weight: 500;
    font-size: 1.125rem;
    text-transform: uppercase;
    display: inline-block;
    box-shadow: 4px 5px 0px ${theme.colors[color]};
    border: 2px solid ${theme.colors[color]};
    color: #fff;
    background: linear-gradient(
      49.79deg,
      ${theme.colors.blue} -21.04%,
      ${theme.colors.red} 57.35%,
      ${theme.colors.orange} 136.6%
    );
    background-color: ${theme.colors[fill]};
    outline: none;
    position: relative;

    &:hover {
      top: -2px;
      left: -3px;
      box-shadow: 6px 8px 0px ${theme.colors[color]};
      cursor: pointer;
    }
    &:active {
      box-shadow: none;
      top: 6px;
      left: 7px;
    }

    @keyframes gradient {
      0% {
        background-position: 0% 0;
      }
      100% {
        background-position: 55% 0;
      }
    }

    ${(() => {
      switch (state) {
        case "progress":
          return css`
            background: repeating-linear-gradient(
              135deg,
              ${theme.colors[fill]},
              ${theme.colors[fill]} 5px,
              ${theme.colors[color]} 5px,
              ${theme.colors[color]} 12px
            );
            color: transparent;

            animation-name: gradient;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            background-size: 51px 100%;
          `;

        case "success":
          return css`
            background-color: ${theme.colors[color]};
            border: 2px solid ${theme.colors[color]};
            box-shadow: none;
            color: ${theme.colors[fill]};
          `;
        case "disabled":
          return css`
            background: #b6b4bd33;
            border: 2px solid #b6b4bd33;
            box-shadow: none;
            color: ${theme.colors[fill]};

            &:hover {
              cursor: not-allowed;
              top: 0;
              left: 0;
              box-shadow: none;
            }

            &:active {
              top: 0;
              left: 0;
            }
          `;
        case "error":
          return css``;
      }
    })()}
  `}
`;
