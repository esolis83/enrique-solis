import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    scroll-padding-top: 50px;
  
  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.5rem;
    background: #fff;
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  body::before {
    content: '';
    background-image: url('/images/grid.svg');
    z-index: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    opacity: 0.4;
    filter: invert(1);
    pointer-events: none;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  .header{display: none;}
  
  .mobile-menu { background-color: ${props => props.theme.colors.background2}; }
  
`;

export default GlobalStyles;