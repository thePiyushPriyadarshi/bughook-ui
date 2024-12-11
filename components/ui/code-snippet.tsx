"use client";

import * as React from "react";
import parse from "html-react-parser";
import { cn } from "@/lib/utils";
import { Check, Clipboard, FileCode } from "lucide-react";
import { bundledLanguages, codeToHtml } from "shiki";
import { useTheme } from "next-themes";
import { TextShimmer } from "@/components/ui/shimmer-text";

type ShikiLang = keyof typeof bundledLanguages;

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string; // The code to display
  language?: ShikiLang; // Language for syntax highlighting
  copyButton?: boolean; // To show the copy button
}

const CodeSnippet = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg shadow-md overflow-hidden w-full", className)}
    {...props}
  >
    {children}
  </div>
));
CodeSnippet.displayName = "CodeSnippet";

const CodeHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative w-full h-9 bg-[#eee] dark:bg-[#1e1e1e]", className)}
    {...props}
  >
    {/* Colored circles for window decoration */}
    <div className="absolute left-2.5 top-1/2 -translate-y-1/2 flex py-1.5 gap-2">
      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
      <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
    </div>
    {children}
  </div>
));
CodeHeader.displayName = "CodeHeader";

const CodeLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-muted-foreground font-semibold h-full flex items-center justify-center gap-1",
      className
    )}
    {...props}
  >
    <FileCode className="w-3 h-3" />
    <div className="font-mono font-light text-sm">{children}</div>
  </div>
));
CodeLabel.displayName = "CodeLabel";

const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    { className, code, copyButton = false, language = "tsx", ...props },
    ref
  ) => {
    const [highlightedCode, setHighlightedCode] = React.useState<string>("");
    const [isCopied, setIsCopied] = React.useState<boolean>(false);
    const { theme: currentTheme } = useTheme();
    React.useEffect(() => {
      const highlightCode = async () => {
        const html = await codeToHtml(code, {
          themes: {
            dark: "vitesse-dark",
            light: "vitesse-light",
          },
          lang: language,
          defaultColor: currentTheme || "dark",
        });
        setHighlightedCode(html);
      };
      highlightCode();
    }, [code, language, currentTheme]);

    const copyCodeHandler = async () => {
      try {
        // Ensure it's directly tied to a user event like a click
        await navigator?.clipboard?.writeText(code);
        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      } catch (err) {
        console.error("Clipboard write failed:", err);
        // Fallback method for older browsers or when clipboard API fails
        const textArea = document.createElement("textarea");
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.body.removeChild(textArea);

        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500);
      }
    };

    return (
      <div
        ref={ref}
        className={cn("text-sm relative font-mono w-full", className)}
        {...props}
      >
        {copyButton && (
          <button
            className={cn(
              "absolute top-2 right-2 p-1 rounded-md hover:bg-secondary text-muted-foreground hover:text-primary duration-300",
              className
            )}
            onClick={copyCodeHandler}
          >
            {isCopied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Clipboard className="w-4 h-4" />
            )}
          </button>
        )}
        {highlightedCode.length > 0 ? (
          parse(highlightedCode)
        ) : (
          <div className="flex items-center h-[250px] bg-background w-full text-lg justify-center">
            <TextShimmer>Loading...</TextShimmer>
          </div>
        )}
      </div>
    );
  }
);
CodeBlock.displayName = "CodeBlock";

export { CodeSnippet, CodeHeader, CodeBlock, CodeLabel };
