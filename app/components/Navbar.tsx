"use client";
import { Fragment, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import hero from "../../public/img/logo.png";

import { socialMediaIcons, menuLinks } from "../data";
import ButtonMenuHamburger from "./ui/ButtonMenuHamburger";
import ButtonLightMode from "./ui/ButtonLightMode";
import ButtonDarkMode from "./ui/ButtonDarkMode ";
import ButtonMenuClose from "./ui/ButtonMenuClose";

import { signOut, useSession } from "next-auth/react";
import ButtonLogout from "./ui/ButtonLogout";
import useLocalStorageState from "use-local-storage-state";

export default function Navbar() {
  const session = useSession();
  const pathName = usePathname();

  const mobileMenu = useRef<HTMLDivElement>(null);
  const bgMenuMobile = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useLocalStorageState("theme", {
    defaultValue: "light",
  });

  useEffect(() => {
    window.document.body.classList.add(theme);
  }, [theme]);

  function handleDark() {
    setTheme("dark");
    document.body.classList.remove("light");
  }
  function handleLight() {
    setTheme("light");
    document.body.classList.remove("dark");
  }

  function handleMenu() {
    mobileMenu.current?.classList.toggle("-top-[380px]");
    mobileMenu.current?.classList.toggle("top-0");
    bgMenuMobile.current?.classList.toggle("hidden");
  }
  function handlebgMenuMobile() {
    mobileMenu.current?.classList.toggle("-top-[380px]");
    mobileMenu.current?.classList.toggle("top-0");
    bgMenuMobile.current?.classList.toggle("hidden");
  }

  const handleLogout = () => {
    signOut();
  };

  return (
    <nav className="bg-white dark:bg-bg-color shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl flex items-center justify-between container">
        <a href="#" className="flex items-center">
          <Image src={hero} width={70} height={90} className="h-13 w-13 mr-3" alt="logo" />
          <span className="text-primary text-[22px] font-semibold">My portfolio</span>
        </a>
        <div className="hidden [@media(min-width:990px)]:flex justify-between items-center gap-6">
          <ul className="flex font-medium text-sm uppercase gap-1 dark:text-color-text">
            {menuLinks.map((link, index) => (
              <Fragment key={index}>
                <Link
                  href={`${link.path}`}
                  className={`px-3 py-2 rounded-md transition-colors duration-300 hover:text-primary ${
                    (link.id == 7 || link.id == 8) && session.status == "authenticated" ? "hidden" : ""
                  } ${link.path === pathName ? "text-primary font-semibold" : "dark:text-color-text text-color-text-light"}`}
                  aria-current="page"
                >
                  {link.title}
                </Link>
              </Fragment>
            ))}
          </ul>
          <div className="flex items-center gap-2 dark:text-color-text cursor-pointer">
            <ButtonDarkMode on_click={handleDark} />
            <ButtonLightMode on_click={handleLight} />
          </div>
          <div className="flex items-center gap-2">
            {socialMediaIcons.map((smIcon) => (
              <div key={smIcon.id} className="style-social-media-icon text-color-text-light dark:text-color-text">{smIcon.icon}</div>
            ))}
          </div>
          {session.status == "authenticated" && (
            <div className="flex gap-2 items-center">
              <Image src={session.data.user.image} alt="avatar" width={20} height={20} className="rounded-full cursor-pointer" title={session.data.user.name} />
              <ButtonLogout on_click={handleLogout} />
            </div>
          )}
        </div>

        <div className="hidden fixed w-screen h-[190%] z-30" onClick={handlebgMenuMobile} ref={bgMenuMobile}></div>
        <div
          className="fixed bg-white dark:bg-bg-color2 opacity-95 dark:opacity-95 dark:text-color-text w-full -top-[380px] left-0 z-50 transition-all ease-in-out duration-700 shadow-lg"
          ref={mobileMenu}
        >
          <div className="">
            <div className="bg-bg-color2-light dark:bg-bg-color flex justify-between items-center w-full p-4">
              <div className="flex gap-2">
                <ButtonDarkMode on_click={handleDark} />
                <ButtonLightMode on_click={handleLight} />
              </div>
              <div className="flex gap-3 dark:text-color-text">
                {socialMediaIcons.map((smIcon) => (
                  <div key={smIcon.id} className="style-social-media-icon">{smIcon.icon}</div>
                ))}
              </div>
              {session.status == "authenticated" && (
                <div className="flex gap-2 items-center">
                  <Image src={session.data.user.image} alt="avatar" width={20} height={20} className="rounded-full cursor-pointer" title={session.data.user.name} />
                  <button className="w-[30px] h-[30px] p-1 rounded-full hover:scale-110" title="Logout" onClick={handleLogout}>
                    <svg className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 15">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3" />
                    </svg>
                  </button>
                </div>
              )}
              <ButtonMenuClose handleMenu={handleMenu} />
            </div>
          </div>
          <ul className="text-xl gap-4 h-full uppercase tracking-[2px] bg-white dark:bg-bg-color2">
            <div className="flex flex-col justify-center items-center py-4">
              {menuLinks.map((link, index) => (
                <Link
                  key={index}
                  href={`${link.path}`}
                  className="py-2 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  onClick={handleMenu}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </ul>
        </div>
      </div>
      <ButtonMenuHamburger handleMenu={handleMenu} />
    </nav>
  );
}
