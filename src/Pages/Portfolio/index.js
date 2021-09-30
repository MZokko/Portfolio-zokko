import { useState } from 'react';
import Navbar from '../../Components/Navbar';
import SideBar from '../../Components/Sidebar';

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <p>portfolio</p>
    </>
  );
};

export default Portfolio;
