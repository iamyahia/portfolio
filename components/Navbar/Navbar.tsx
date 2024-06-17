import React from "react";
import { navItems } from "./navbarItems";

function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #ffffff",
        height: "44px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <a
          href="/"
          style={{
            minWidth: "275px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: `$color-slate-blue`,
            borderRight: "1px solid #ffffff",
          }}
        >
          yahia-hasan
        </a>
        {navItems.map((item) => (
          <a
            href="/"
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "white",
              borderRight: "1px solid #ffffff",
            }}
            key={item.key}
          >
            {item.value}
          </a>
        ))}
      </div>
      <a
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          borderLeft: "1px solid #ffffff",
        }}
      >
        _contact-me
      </a>
    </nav>
  );
}

export { Navbar };
