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
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  activeClass='active'
                >
                  Home
                </NavbarLinks>
              </NavbarItem>
              <NavbarItem>
                <NavbarLinks
                  to='AboutMe'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  activeClass='active'
                >
                  About Me
                </NavbarLinks>
              </NavbarItem>
              <NavbarItem>
                <NavbarLinks
                  to='Portfolio'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  activeClass='active'
                >
                  Portfolio
                </NavbarLinks>
              </NavbarItem>
              <NavbarItem>
                <NavbarLinks
                  to='ContactMe'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  activeClass='active'
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
