import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarStyle.js';

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='/' onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to='/AboutMe' onClick={toggle}>
            About Me
          </SidebarLink>
          <SidebarLink to='/ContactMe' onClick={toggle}>
          Contact Me
          </SidebarLink>
        </SidebarMenu>
        {/* <SidebarBtnWrap>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SidebarBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;