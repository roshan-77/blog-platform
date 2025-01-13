import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  Collapse,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

const NavItem = ({ navItems }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Adjust for mobile screens
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Default state based on screen size

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: !isMobile && "row-reverse",
      }}
    >
      <List>
        {/* Show Menu Button only on mobile */}
        {isMobile && (
          <ListItemButton onClick={toggleMenu}>
            {/* <Typography variant="h6">Menu</Typography> */}
            <MenuIcon />
          </ListItemButton>
        )}

        {/* Collapse for mobile, always visible for desktop */}
        <Collapse
          in={isMobile ? isMenuOpen : true}
          timeout="auto"
          unmountOnExit
          sx={{
            position: isMobile ? "relative" : "",
          }}
        >
          <List
            role="menubar"
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: isMobile ? "start" : "end",
              width: isMobile ? "300px" : "auto",
              position: isMobile ? "absolute" : "relative",
              zIndex: 1,
              backgroundColor: "white",
              margin: isMobile ? "1rem 0 0 .5rem" : "0",
              marginRight: isMobile ? "0" : "1rem",
              border: "1px solid lightgrey",
              borderRadius: "5px",
              boxShadow: "10px -10px 20px rgba(0, 0, 0, .1)",
            }}
          >
            {navItems.map(({ id, path, icon, label }) => (
              <ListItem key={id} sx={{ padding: isMobile ? "5px" : "0px" }}>
                <ListItemButton
                  component="a"
                  href={path}
                  sx={{ width: "100%" }}
                >
                  {icon}
                  <Typography variant="body1" sx={{ marginLeft: "8px" }}>
                    {label}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
      <Typography
        sx={{
          alignContent: "center",
          padding: "0 1.5rem",
          fontSize: "1.5rem",
          fontFamily: "cursive",
          fontWeight: "bold",
        }}
      >
        ShareBlog
      </Typography>
    </div>
  );
};

export default NavItem;
