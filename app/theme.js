"use client";
import { createTheme } from "@mui/material";
import { Fira_Code } from "next/font/google";
const firaCode = Fira_Code({ subsets: ["latin"] });

const theme = createTheme({
  typography: {
    fontFamily: firaCode.style.fontFamily,
    h1: {
      fontSize: "3.875rem",
      fontWeight: "500",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "450",
    },
    h6: {
      fontSize: "1.125rem",
      fontWeight: "450",
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

export default theme;
