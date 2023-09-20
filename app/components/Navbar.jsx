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
// import Link from "next/link";
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
export const Navbar = () => {
  return (
    <AppBar position="static" style={{ display: "flex" }}>
      <StyledToolbar>
        <Typography variant="p" component="p">
          yahia_hasan
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex", width: "100%" } }}>
          {pages.map((page, index) => (
            <Button
              key={page.name}
              onClick={() => {
                return alert("clicked");
              }}
              sx={{ my: 2, color: "white" }}
              style={{
                marginLeft: pages.length - 1 === index ? "auto" : "",
              }}
            >
              <Link href={page.href} color="inherit">
                {page.name}
              </Link>
            </Button>
          ))}
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};
