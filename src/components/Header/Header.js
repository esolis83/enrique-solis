
import React from 'react';
import Link from 'next/link';
import { HeaderContainer, HeaderContent, Nav, NavLink } from './HeaderStyles';
import Logo from "../Logo/Logo";
import { trackEvent } from '../../utils/analytics';

const Header = () => {
  const handleNavClick = (label) => {
    trackEvent('nav_click', { label, location: 'header' });
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/" passHref legacyBehavior>
          <a><Logo /></a>
        </Link>
        <Nav>
          <ul className="menu-main-nav">
            <li>
              <Link href="/#about" passHref legacyBehavior>
                <NavLink onClick={ () => handleNavClick('About') }>About</NavLink>
              </Link>
            </li>
            <li>
              <Link href="/#projects" passHref legacyBehavior>
                <NavLink onClick={ () => handleNavClick('Projects') }>Projects</NavLink>
              </Link>
            </li>
            <li>
              <Link href="/#tech" passHref legacyBehavior>
                <NavLink onClick={ () => handleNavClick('Skills') }>Skills</NavLink>
              </Link>
            </li>
            <li>
              <Link href="/#footer" passHref legacyBehavior>
                <NavLink onClick={ () => handleNavClick('Contact') }>Contact</NavLink>
              </Link>
            </li>
          </ul>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};
export default Header;