import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { AiTwotoneSetting } from 'react-icons/ai';
import { BsChevronLeft } from 'react-icons/bs';
import './Navbar.css';

function Navbar() {
  return (
    <header className="nav">
      <div className="nav-left">
        <NavLink to="/">
          <BsChevronLeft />
        </NavLink>
      </div>
      <h2>Details </h2>
      <div className="nav-right">
        <FaMicrophone />
        <AiTwotoneSetting />
      </div>
    </header>
  );
}

export default Navbar;
