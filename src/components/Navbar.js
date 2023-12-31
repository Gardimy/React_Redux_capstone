import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { AiTwotoneSetting } from 'react-icons/ai';
import { BsChevronLeft } from 'react-icons/bs';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navcontainer">
      <div className="nav-left">
        <NavLink to="/">
          <BsChevronLeft />
        </NavLink>
        back
      </div>
      <h2>TVSHOW/Anime</h2>
      <div className="nav-right">
        <FaMicrophone />
        <AiTwotoneSetting />
      </div>
    </nav>
  );
}

export default Navbar;
