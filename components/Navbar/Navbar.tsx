"use client";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    console.log(open);
  }, [open]);

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
            {/* {open ? <CloseIcon /> : <MenuIcon />} */}
            <div className="icon-container">
              <MenuIcon
                className={`icon-transition ${open ? "hide" : "show"}`}
              />
              <CloseIcon
                className={`icon-transition ${open ? "show" : "hide"}`}
              />
            </div>
          </Dialog.Trigger>
          <Dialog.Portal>
            {/* <Dialog.Overlay className="navbar__dialog-overlay" /> */}
            {/* //todo: add clsx for conditional class inserting */}
            <Dialog.Content
              className={`navbar__dialog-content ${open ? "show" : "hide"}`}
            >
              <div className="navbar__dialog-description">
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
              {/* <Dialog.Close className="navbar__dialog-close">x</Dialog.Close> */}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </>
  );
}
export default Navbar;
