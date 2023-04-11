import React, { useState } from "react";
import "./Navbar.css";
import { CgProfile } from 'react-icons/cg';
import {AiOutlineSearch,AiOutlineHome,AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {MdLocalMovies} from 'react-icons/md';
import {FaBaseballBall} from 'react-icons/fa';
import logo from '../assets/logo.svg'



const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleMouseEnter() {
    setIsExpanded(true);
  }

  function handleMouseLeave() {
    setIsExpanded(false);
  }

  return (
    <nav
      className={`navbar ${isExpanded ? "expanded" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    <div className="navlogo">
        <img src={logo}/>
    </div>
      <ul>
        <li>
          <a href="#">
            < CgProfile/>
            <span className="nav-text">{isExpanded && "  My Space"}</span>
          </a>
        </li>
        <li>
          <a href="#">
            < AiOutlineSearch/>
            <span className="nav-text">{isExpanded && "  Search"}</span>
          </a>
        </li>
        <li>
          <a href="#">
            < AiOutlineHome/>
            <span className="nav-text">{isExpanded && "  Home"}</span>
          </a>
        </li>
        <li>
          <a href="#">
            < AiOutlineFundProjectionScreen/>
            <span className="nav-text">{isExpanded && "  TV"}</span>
          </a>
        </li>
        <li>
          <a href="#">
            < MdLocalMovies />
            <span className="nav-text">{isExpanded ? "Movies" : ""}</span>
          </a>
        </li>
        <li>
          <a href="#">
            < FaBaseballBall/>
            <span className="nav-text">{isExpanded ? "Sports" : ""}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;