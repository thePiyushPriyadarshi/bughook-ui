import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { navbarData } from "@/data/navbar-data";
import Link from "next/link";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="px-1.5 md:px-5 h-14 bg-opacity-30 z-50 backdrop-blur-lg fixed top-0 left-0 right-0 border-b flex justify-between items-center">
      <div className="flex gap-1 items-center justify-center">
        <SidebarTrigger className="md:hidden" />
        <Link href={"/"} className="md:flex hidden items-center">
          <Image src={"/light-logo.png"} alt="logo" className="hidden dark:block" width={50} height={50}/>
          <Image src={"/dark-logo.png"} alt="logo" className="block dark:hidden" width={50} height={50}/>
          <h1 className="font-bold text-xl hidden font-sans sm:block">Bughook UI</h1>
        </Link>
      </div>
      <div className="hidden md:flex gap-3 items-center font-medium text-muted-foreground justify-center">
        {navbarData.map((navItem) => (
          <Link
            key={navItem.href}
            href={navItem.href}
            className="hover:text-foreground duration-300"
          >
            {navItem.label}
          </Link>
        ))}
      </div>

      <ModeToggle />
    </nav>
  );
}
