"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import parse from "html-react-parser";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const CodeExpandable = ({ children }: { children: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded((prev) => !prev);

  const linesToShowInitially = 20;
  const codeLines = children.split("\n");

  return (
    <div className="relative">
      <ScrollArea
        className={`relative rounded-lg border transition-all ${
          isExpanded ? "max-h-[500px]" : "max-h-[350px] pointer-events-none"
        }`}
      > 

        {isExpanded
          ? parse(children)
          : parse(codeLines.slice(0, linesToShowInitially).join("\n"))}


        {/* Gradient overlay for blur effect */}
        {!isExpanded && (
          <div className="absolute -bottom-2 left-0 right-0 h-[200px] bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none"></div>
        )}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className={cn("absolute bottom-8 left-[50%] translate-x-[-50%]",isExpanded && "-bottom-12")}>
        <Button
          variant="secondary"
          className="text-xs bg-neutral-900 text-white hover:bg-neutral-800 font-semibold"
          onClick={toggleExpanded}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      </div>
    </div>
  );
};

export default CodeExpandable;
