"use strict";

import "./globals.css";

export const metadata = {
  title: "Yahia",
  description: "front stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
