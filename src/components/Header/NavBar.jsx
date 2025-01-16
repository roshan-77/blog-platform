import { useState, useEffect } from "react";
import NavItem from "./NavItem";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import { HomeRounded } from "@mui/icons-material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import BookIcon from "@mui/icons-material/Book";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import MenuIcon from "@mui/icons-material/Menu";
import { Collapse, Typography } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Avatar } from "@mui/material";

const NavBar = () => {
  const navItems = [
    { path: "/", label: "Home", icon: <HomeRounded /> },
    // { path: "/about", label: "About", icon: <AlternateEmailIcon /> },
    { path: "/blog", label: "Blog", icon: <BookIcon /> },
    { path: "/contact", label: "Contact", icon: <ConnectWithoutContactIcon /> },
    {
      path: "/profile",
      label: "Profile",
      icon: <Avatar sx={{ height: "24px", width: "24px" }} />,
    },
  ];

  return (
    <>
      <NavItem navItems={navItems} />
    </>
  );
};

export default NavBar;
