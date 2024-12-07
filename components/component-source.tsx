import { highlightCode } from "@/lib/highlight-code";
import parse from "html-react-parser";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

interface CodeSourceProps {
  code: string;
}

export async function ComponentSource({ code }: CodeSourceProps) {
  const highlightedCode = await highlightCode(code);

  return (
    <ScrollArea className="rounded-lg border">
      <div className="max-h-[350px]">{parse(highlightedCode)}</div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
