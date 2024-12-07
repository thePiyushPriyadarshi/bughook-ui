import {
  CodeBlock, 
  CodeSnippet,
} from "@/components/ui/code-snippet";

export default function CodeSnippetDemo() {
  const codeString = `
    import React, { useState } from "react";

    export function Counter() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
          <h1>Counter: {count}</h1>
          <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        </div>
      );
    }
      `;
  return (
    <CodeSnippet>
      <CodeBlock code={codeString} />
    </CodeSnippet>
  );
}
