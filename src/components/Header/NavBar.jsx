import React from "react";
import NavItem from "./NavItem";

const NavBar = () => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav>
      <ul>
        {navItems.map((item, index) => (
          <NavItem key={index} path={item.path} label={item.label} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
