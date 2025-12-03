import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar({ links, ...props }) {
  const activePage = ({ isActive }) => (isActive ? "active" : "");
  return (
    <nav {...props}>
      {links.map((item, index) => (
        <NavLink key={index} className={activePage} to={Object.keys(item)[0]}>
          {Object.values(item)[0]}
        </NavLink>
      ))}
    </nav>
  );
}
