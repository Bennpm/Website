import { css } from "styled-components";

export const funkyBorderStyle = (
    position: 'top' | 'bottom',
    height?: 'half' | 'quarter'
  ): ReturnType<typeof css> =>
    css`
      ${position === 'top'
        ? css`
            position: relative;
            padding-top: calc((6.25rem / 2) + 1.875rem);
          `
        : css`
            position: relative;
            padding-bottom: calc((6.25rem / 2) + 1.875rem);
          `}
  
      ${height === 'half' &&
      css`
        padding-bottom: calc(((6.25rem / 2) + 1.875rem) / 2);
      `}
  
      ${height === 'quarter' &&
      css`
        padding-bottom: calc(((6.25rem / 2) + 1.875rem) / 4);
      `}
    `
  