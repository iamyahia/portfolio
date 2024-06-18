"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "./navbarItems";
import clsx from "clsx";

function Navbar() {
  const pathName = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <p
          className="navbar__logo-icon"
          style={{
            minWidth: "275px",
          }}
        >
          yahia-hasan
        </p>
        {navItems.map((item) => (
          <Link
            href={item.href}
            className={clsx("navbar__link", {
              "navbar__link--active": pathName === item.href,
            })}
            key={item.key}
          >
            {item.value}
          </Link>
        ))}
      </div>
      <a href="/" className="navbar__contact">
        _contact-me
      </a>
    </nav>
  );
}

export { Navbar };
