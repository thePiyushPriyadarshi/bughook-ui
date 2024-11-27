import React from "react";
import { ModeToggle } from "./mode-toggle";
import { navbarData } from "@/data/navbar-data";
import Link from "next/link"; 
import { SidebarTrigger } from "./ui/sidebar";

export default function Navbar() {
  return (
    <nav className="px-1.5 md:px-5 h-14 bg-opacity-30 z-50 backdrop-blur-lg fixed top-0 left-0 right-0 border-b flex justify-between items-center">
      <div className="flex gap-3 items-center justify-center">
        <SidebarTrigger className="md:hidden"/>
        <h1 className="font-bold text-lg">Bughook UI</h1>
      </div>
      <div className="hidden md:flex gap-3 items-center font-semibold text-muted-foreground justify-center">
        {
            navbarData.map((navItem) => (
                <Link key={navItem.href} href={navItem.href}
                className="hover:text-primary"
                >{navItem.label}</Link>
            ))
        }
      </div>

      <ModeToggle/>
    </nav>
  );
}
