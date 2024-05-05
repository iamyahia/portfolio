"use client";

import { Typography, styled } from "@mui/material";

const Container = styled("header")({
  boxShadow: "none",
  borderBottom: "1px solid #1E2D3D",
  position: "relative",
  maxHeight: "56px",
});

const UserName = styled(Typography)({
  marginRight: "9.75rem",
});

export { Container, UserName };
