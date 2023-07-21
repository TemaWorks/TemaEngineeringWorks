import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/service/he",
      name: "Heat-Exchanger",
    },
    {
      path: "/service/hc",
      name: "Heating-Coil",
    },
    {
      path: "/service/ia",
      name: "Industrial-Agitator",
    },
    {
      path: "/service/jr",
      name: "Jacketed-Reactor",
    },
    {
      path: "/service/pv",
      name: "Presssure-Vessel",
    },
    {
      path: "/service/rv",
      name: "Reaction-Vessel",
    },
    {
      path: "/service/st",
      name: "Storage-Tank",
    },
    {
      path: "/service/vo",
      name: "Vaccum-Oven",
    },
  ];

  return (
    <>
    <div className="main-container">
    <div className="pcontainer">
      <div className="sidebar">
        <div className="top_section">
          <h1 className="text">Our Products</h1>
          <div className="bars">{/* <FaBars /> */}</div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="plink"
            activeclassName="active"
          >
            <div className="plink_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <div className="scrollable-container">
        <div className="scrollable-content">
          {/* Your content goes here */}
          <main className="main-content">{children}</main>
        </div>
      </div>
      </div>
      
        <Footer/>
    </div>
    
    </>
  );
};

export default Sidebar;
