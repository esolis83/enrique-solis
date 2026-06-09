import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';
import { fixedNavBase, accentHoverScale } from '../../styles/mixins';

export const HeaderContainer = styled.div`
  ${fixedNavBase}
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;
export const HeaderContent = styled.div`
  position: relative;
  height: 8rem;
  @media ${(props) => props.theme.breakpoints.md} {
    height: 5.3rem;
  }
  .global-site-title {
    margin: 0;
    position: absolute;
    left: 50%;
    margin-left:-73.9px;
    @media ${(props) => props.theme.breakpoints.md} {
      margin-left: -51.26px;
    }
  }
  .logo-svg {
    display: flex;
    width: 100%;
    height: 111px;
    @media ${(props) => props.theme.breakpoints.md} {
      height: 75px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      display: none;
    }
  }
`;


// Navigation Links
export const Nav = styled.div`
  display: block;
  height: auto ;
  background-color: transparent;
  position: relative;
  top: auto;
  width: 100%;
  justify-content: space-between;

  li:nth-child(2) {
    margin-right: 72.125px;
  }
  li:nth-child(3) {
    margin-left: 72.125px;
  }
  .menu-main-nav {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 8rem;
    width: 100%;
    margin: 0 auto;
    @media ${(props) => props.theme.breakpoints.md} {
      height: 5.3rem;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      display:none;
    }
  }
  @media ${(props) => props.theme.breakpoints.md} {
    li:nth-child(2) {
      margin-right: 53.46px;
    }
    li:nth-child(3) {
      margin-left: 53.46px;
    }
  }

@media ${(props) => props.theme.breakpoints.sm} {
  .app__navbar-links {
    display: none;
  }
  .menu-small {
    display: flex;
  }
}
`;

export const NavLink = styled.a`
  font-size: 2rem;
  text-transform: uppercase;
  line-height: 32px;
  color: #fff;
  transition: 0.4s ease;
  margin: 0 1.2em;
  position: relative;
  &:hover {
    color: #c64958;
  }
  &:hover:after {
    bottom: -7px;
    opacity: 1;
  }
  &:after {
    content: "";
    width: 100%;
    height: 2px;
    background: #c64958;
    position: absolute;
    backface-visibility: hidden;
    left: 0;
    opacity: 0;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;



// Social Icons 

export const SocialIcons = styled.a`
  ${accentHoverScale}
`


