"use client";
import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Link,
} from "@mui/material";
import React from "react";

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

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  textTransform: "lowercase",
  fontWeight: "normal",
  listStyle: "none",
});
export const Navbar = () => {
  return (
    <AppBar
      position="static"
      style={{
        display: "flex",
        borderBottom: "1px solid #1E2D3D",
        boxShadow: "none",
      }}
      color="transparent"
    >
      <StyledToolbar>
        <Typography
          variant="p"
          component="p"
          style={{ marginRight: "9.75rem" }}
        >
          yahia_hasan
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex", width: "100%" } }}>
          {pages.map((page, index) => (
            <StyledLink
              key={page.name}
              href={page.href}
              color="inherit"
              // variant="li"
              // component="li"
              sx={{ my: 2, color: "white" }}
              style={{
                padding: "0 32px",
                marginLeft: pages.length - 1 === index ? "auto" : "",
                // borderRight: "1px double #ff6550",
                borderLeft: "1px double #1e2d3d",
              }}
            >
              {page.name}
            </StyledLink>
          ))}
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};
