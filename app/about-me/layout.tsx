"use client";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import FilesIcon from "../../assets/icons/Files";
import TerminalIcon from "../../assets/icons/TerminalIcon";

function AboutMeLayout({ children }) {
  const pathName = usePathname();

  return (
    <div className="about-me__layout">
      <div className="about-me__sidebar">
        <Link
          href="/about-me"
          className={clsx("about-me__link", {
            "about-me__link--active": pathName === "/about-me",
          })}
        >
          <FilesIcon className="about-me__icon" />
        </Link>
        <Link
          href="/about-me/terminal"
          className={clsx("about-me__link", {
            "about-me__link--active": pathName === "/about-me/terminal",
          })}
        >
          <TerminalIcon className="about-me__icon" />
        </Link>
      </div>
      {children}
    </div>
  );
}

export default AboutMeLayout;
