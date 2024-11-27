import { highlightCode } from "@/lib/highlight-code"; 
import CodeExpandable from "./code-expandable"; 

interface CodeSourceProps {
  code: string;
}

export async function ComponentSource({ code }: CodeSourceProps) {
  const highlightedCode = await highlightCode(code);

  return ( 
      <CodeExpandable>{highlightedCode}</CodeExpandable> 
  );
}
