import React, {useRef} from "react";
import logo from "../assets/Logo.png";
import { FaBars, FaTimes} from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {

  const navRef = useRef();

  const showNavbar =()=>{
    navRef.current.classList.toggle("responsive_nav");
  }


  return (
    <>
    <header>
      <h3><img src={logo} width="150px" alt="Tema Engineering Works"/></h3>
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/service/he">Service</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
        <button className="nav_btn nav_close_btn" onClick={showNavbar}>
            <FaTimes/>
        </button>
      </nav>
      <button className="nav_btn" onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
    </>
  );
};

export default NavBar;
