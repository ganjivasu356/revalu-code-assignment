import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import filterVintage from "../../Icons/filter_vintage.svg";
import vasuProfile from "../../Icons/vasuProfile.jpg";
import { useLocation } from "react-router-dom";

const navItems = [
  { name: "Materials", path: "/materials" },
  { name: "Elements", path: "/elements" },
  { name: "Projects", path: "/projects" },
  { name: "Manufacturers", path: "/manufacturers" },
  { name: "Collections", path: "/collections" },
];

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="header">
      <img src={filterVintage} alt="home" className="header-logo" />
      <nav className="nav">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive || (pathname === "/" && item.path === "/collections")
                    ? "active-link"
                    : "nav-link"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="logo">
        <img src={vasuProfile} alt="User Logo" className="user-logo" />
      </div>
    </header>
  );
};

export default Header;
