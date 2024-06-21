"use client";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";

import { navItems } from "./navbarItems";
import CloseIcon from "../../assets/icons/CloseIcon";
import MenuIcon from "../../assets/icons/MenuIcon";

function Navbar() {
  const [open, setOpen] = useState(false);

  const pathName = usePathname();

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <div className="navbar__logo">
            <p className="navbar__logo-icon">yahia-hasan</p>
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
        </div>
        <Dialog.Root open={open} onOpenChange={setOpen} modal>
          <p className="navbar__dialog-logo-icon">yahia-hasan</p>
          <Dialog.Trigger className="navbar__dialog-trigger">
            <div className="icon-container">
              <MenuIcon
                className={clsx("icon-transition", {
                  hide: open,
                  show: !open,
                })}
              />
              <CloseIcon
                className={clsx("icon-transition", {
                  show: open,
                  hide: !open,
                })}
              />
            </div>
          </Dialog.Trigger>
          <Dialog.Portal>
            <div className="navbar__dialog-overlay" />
            <Dialog.Content
              className={clsx("navbar__dialog-content", {
                show: open,
                hide: !open,
              })}
            >
              <div className="navbar__dialog-description">
                {navItems.map((item) => (
                  <Link
                    href={item.href}
                    className={clsx("navbar__link", {
                      "navbar__link--active": pathName === item.href,
                    })}
                    key={item.key}
                    onClick={() => {
                      if (pathName !== item.href) setOpen(false);
                    }}
                  >
                    {item.value}
                  </Link>
                ))}
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </>
  );
}

export default Navbar;
