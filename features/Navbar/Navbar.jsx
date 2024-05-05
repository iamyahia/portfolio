"use client";
import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Link,
  IconButton,
  Drawer,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { pages } from "./utils/contant";

import * as Styled from "./Navbar.styled";

const Navbar = (props) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [bottom, setBottom] = useState(false);

  const handleOpenNavMenu = (event) => {
    setIsSmallScreen((prevBoolian) => !prevBoolian);
    setBottom((prevBoolean) => !prevBoolean);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={() => setBottom(false)}
      onKeyDown={() => setBottom(false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Styled.Container position="static" color="transparent">
        <Toolbar>
          <Styled.UserName component="p">yahia_hasan</Styled.UserName>
          <Box
            sx={{ display: { xs: "none", md: "flex", width: "100%" } }}
            // component="ul"
          >
            {pages.map((page, index) => (
              <li
                style={{
                  borderLeft: "1px solid #1e2d3d",
                  // marginLeft: pages.length - 1 === index ? "auto" : "",
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
                  <Typography component="p">{page.name}</Typography>
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
              {!bottom ? <MenuIcon /> : <CloseIcon />}
            </IconButton>
          </Box>
        </Toolbar>
        <SwipeableDrawer
          anchor="top"
          open={bottom}
          onClose={() => setBottom(false)}
        >
          {list("top")}
        </SwipeableDrawer>
      </Styled.Container>
    </>
  );
};

export default Navbar;
