"use strict";

import "../styles/main.scss";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Yahia",
  description: "front stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
