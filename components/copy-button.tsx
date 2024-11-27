"use client";
import { Check, Clipboard } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  value: string;
  className?: string;
}
export function CopyButton({ value,className }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);
  const copyCodeHandler = async () => {
    await navigator.clipboard.writeText(value); 
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };
  return (
    <Button variant={"ghost"} className={cn("p-0 h-7 text-white hover:bg-neutral-800 hover:text-white w-7",className)} onClick={copyCodeHandler}>
      {isCopied ? <Check className="w-4 h-4"/> : <Clipboard className="w-4 h-4" />}
    </Button>
  );
}
