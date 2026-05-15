import React, { useState } from 'react';
import Link from 'next/link';
import { Menu } from "./MobileMenuStyles";
import { GiHamburgerMenu } from 'react-icons/gi';
import MobileLogo from "../Logo/MobileLogo";
import { trackEvent } from '../../utils/analytics';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    trackEvent('hamburger_menu_toggle', { state: isOpen ? 'close' : 'open' });
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const handleNavClick = (label) => {
    trackEvent('nav_click', { label, location: 'mobile_menu' });
    setIsOpen(false);
  };

  return (
    <Menu>
      <Link href="/" passHref legacyBehavior>
        <a><MobileLogo /></a>
      </Link>
      <GiHamburgerMenu
        color="#fff"
        fontSize={ 29 }
        style={ { margin: 10 } }
        onClick={ toggleMenu }
      />
      { isOpen &&
        <ul>
          <li><Link href="/#about" passHref legacyBehavior><a onClick={ () => handleNavClick('About') }>About</a></Link></li>
          <li><Link href="/#projects" passHref legacyBehavior><a onClick={ () => handleNavClick('Projects') }>Projects</a></Link></li>
          <li><Link href="/#tech" passHref legacyBehavior><a onClick={ () => handleNavClick('Skills') }>Skills</a></Link></li>
          <li><Link href="/#footer" passHref legacyBehavior><a onClick={ () => handleNavClick('Contact') }>Contact</a></Link></li>
        </ul> }
    </Menu>
  );
};

export default MobileMenu;