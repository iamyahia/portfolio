"use client";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const pages = [
  {
    name: "_hello",
    href: "/",
  },
  {
    name: "_about-me",
    href: "/about-me",
  },
  {
    name: "_projects",
    href: "/projects",
  },
  {
    name: "_contact-me",
    href: "/contact-me",
  },
];

export const Navbar = (props) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const handleOpenNavMenu = (event) => {
    setIsSmallScreen((prevBoolian) => !prevBoolian);
  };
  return (
    <>
      <AppBar
        position="static"
        style={{
          boxShadow: "none",
          borderBottom: "1px solid #1E2D3D",
        }}
        color="transparent"
      >
        <Toolbar>
          <Typography
            variant="p"
            component="p"
            style={{ marginRight: "9.75rem" }}
          >
            yahia_hasan
          </Typography>
          <Box
            sx={{ display: { xs: "none", md: "flex", width: "100%" } }}
            component="ul"
          >
            {pages.map((page, index) => (
              <li
                style={{
                  borderLeft: "1px solid #1e2d3d",
                  marginLeft: pages.length - 1 === index ? "auto" : "",
                  padding: "0 32px",
                  listStyleType: "none",
                }}
                key={index}
              >
                <Link
                  key={page.name}
                  href={page.href}
                  color="inherit"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </Box>
          <Box
            sx={{ display: { xs: "flex", md: "none" } }}
            style={{ marginLeft: "auto" }}
          >
            <IconButton
              size="large"
              aria-label="menu list of our website"
              aria-controls="menu-appbar"
              onClick={handleOpenNavMenu}
              color="inherit"
              style={{
                padding: 0,
              }}
            >
              {!isSmallScreen ? <MenuIcon /> : <CloseIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {isSmallScreen && (
        <Box
          sx={{ display: { xs: "block", md: "none" } }}
          component="ul"
          style={{ color: "white" }}
        >
          {pages.map((page, index) => (
            <li
              style={{
                borderBottom: "1px solid #1e2d3d",
                display: "flex",
              }}
              key={index}
            >
              <Link
                key={page.name}
                href={page.href}
                color="inherit"
                style={{
                  width: "100%",
                  textDecoration: "none",
                  padding: "1.125rem 1.125rem",
                }}
              >
                {page.name}
              </Link>
            </li>
          ))}
        </Box>
      )}
    </>
  );
};
