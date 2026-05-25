"use client";
import Link from "next/link";
import Image from "next/image";
import { socialMediaIcons, menuLinks } from "../data";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathName = usePathname();
  return (
    <footer className="bg-color-text-light dark:bg-bg-color text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <ul className="flex flex-col sm:flex-row gap-4 uppercase text-sm">
            {menuLinks.map((link, index) => (
              <Link
                href={`${link.path}`}
                className={`hover:text-primary transition-colors duration-300 ${link.path === pathName ? "text-primary" : "text-gray-300"} ${link.id >= 7 ? "hidden" : ""}`}
                key={index}
              >
                {link.title}
              </Link>
            ))}
          </ul>
          <div className="flex gap-3">
            {socialMediaIcons.map((socialMediaIcon) => (
              <div
                key={socialMediaIcon.id}
                className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-700 hover:bg-primary transition-all duration-300 cursor-pointer text-gray-300 hover:text-white"
              >
                {socialMediaIcon.icon}
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-2 text-gray-400 text-sm">
            <p>&copy; 2023 - All Rights Reserved.</p>
            <p className="hidden sm:inline">|</p>
            <p>created by dev-adh</p>
            <Image src="/img/logo.png" alt="logo" width={24} height={24} className="object-fill rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
}
