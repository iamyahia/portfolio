"use strict";

import "../styles/main.scss";

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
