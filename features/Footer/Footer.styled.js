"use client";

import Link from "next/link";

import { Typography, styled, IconButton } from "@mui/material";

const Container = styled("footer")({
  width: "100%",
  display: "flex",
  borderTop: "1px solid #1E2D3D",
  position: "absolute",
  bottom: 0,
});

const Wrapper = styled("div")({
  width: "100%",
  display: "flex",
  padding: "0 24px",
  alignItems: "center",
});

const ContactsBox = styled("ul")({
  width: "100%",
  display: "flex",
});

const ContactBox = styled("li")(({ theme, key, contactLength }) => ({
  padding: "11px 14px",
  listStyleType: "none",
  borderLeft: "1px solid #1e2d3d",
  [theme.breakpoints.up("xs")]: {
    marginLeft: key === 0 && "auto",
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: contactLength - 1 === key && "auto",
  },
}));

const ContactLink = styled(Link)({
  color: "#607B96",
  textDecoration: "none",
});

const UsernameTypography = styled(Typography)({
  marginRight: "1rem",
});

const ContactIconButton = styled(IconButton)({
  padding: 0,
});

const FooterInfoTypography = styled(Typography)({
  whiteSpace: "nowrap",
});

export {
  Wrapper,
  Container,
  ContactBox,
  ContactsBox,
  ContactLink,
  ContactIconButton,
  UsernameTypography,
  FooterInfoTypography,
};
