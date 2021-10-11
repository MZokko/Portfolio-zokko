import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import * as Scroll from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  MobileIcon,
  NavbarMenu,
  NavbarItem,
  NavbarLinks,
} from './NavbarStyle';

var scroll = Scroll.animateScroll;

const Navbar = ({ toggle }) => {
  const [scrollNav, setscrollNav] = useState(false);

  const changeNavColorOnScrollHandler = () => {
    if (window.scrollY >= 80) {
      setscrollNav(true);
    } else {
      setscrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavColorOnScrollHandler);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavbarLogo to='/' onClick={toggleHome}>
              Zokko
            </NavbarLogo>
            {/* Mobile */}
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavbarMenu>
              <NavbarItem>
                <NavbarLinks
                  to='/'
                  exact='true'
                  offset={-80}
                >
                  Home
                </NavbarLinks>
              </NavbarItem>
              <NavbarItem>
                <NavbarLinks
                  to='AboutMe'
                  exact='true'
                  offset={-80}
                >
                  About Me
                </NavbarLinks>
              </NavbarItem>
              <NavbarItem>
                <NavbarLinks
                  to='Portfolio'
                  exact='true'
                  offset={-80}
                >
                  Portfolio
                </NavbarLinks>
              </NavbarItem>
              <NavbarItem>
                <NavbarLinks
                  to='ContactMe'
                  exact='true'
                  offset={-80}
                >
                  Contact Me
                </NavbarLinks>
              </NavbarItem>
            </NavbarMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
