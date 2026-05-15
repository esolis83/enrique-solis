import styled from 'styled-components';

export const Menu = styled.div`
  background-color: ${(props) => props.theme.colors.background2};
  padding: 0 3.0303%;
  position: fixed;
  z-index: 9999;
  width: 100%;
  top: 0;
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,39%);
  padding: 0;
  display: none;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
  }
  &.open {
    display: none;
  }
  h1 { 
    margin: 0;
  }
  li {
    padding: 10px 0;
    display: block;
    font-size: 20px;
    display: flex;
    justify-content: center;
  }
  li a {
    color: #fff;
    text-decoration: uppercase;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    height: 32px;
    align-items: center;
  }
  li a:hover {
    color: #c64958;
    text-decoration: uppercase;
    background-color: #c1c1c1;
    padding: 0;
    margin:0;
  }
  .logo-mobile-sgv {
    display: none;
    @media ${(props) => props.theme.breakpoints.md} {
      display: none;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      display: flex;
      width: 35%;
      height: 75px;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;
