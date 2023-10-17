import "./globals.css";

import { ThemeProvider } from "@mui/material";

import theme from "./theme";

import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";

export const metadata = {
  title: "Yahia",
  description: "full stack developer",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
