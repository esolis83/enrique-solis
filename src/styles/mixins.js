import { css } from 'styled-components';

export const fixedNavBase = css`
  background-color: ${props => props.theme.colors.background2};
  padding: 0 3.0303%;
  position: fixed;
  z-index: 9999;
  width: 100%;
  top: 0;
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 39%);
`;

export const accentHoverColor = css`
  transition: color 0.2s ease;
  &:hover {
    color: ${props => props.theme.colors.primary1};
  }
`;

export const accentHoverScale = css`
  transition: 0.3s ease;
  color: #8d8f91;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    color: #c64958;
  }
`;

export const responsiveFlexColumn = css`
  @media ${props => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;
