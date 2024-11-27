"use client"
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
export function ModeToggle() {
  const { setTheme } = useTheme();

  const toggleHandler = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  

  return (
    <Button variant={"ghost"} onClick={toggleHandler}>
      <Sun className="hidden dark:block"/>
      <Moon className="dark:hidden block"/>
    </Button>
  );
}
