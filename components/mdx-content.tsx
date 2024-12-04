import { useMDXComponent } from "next-contentlayer2/hooks"; 
import { cn } from "@/lib/utils"; 
import { ComponentBlock } from "@/components/component-block";
// Custom MDX Components
const components = { 
  ComponentBlock,
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "font-heading mt-2 scroll-m-20 text-4xl font-bold",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table
        className={cn(
          "relative w-full overflow-hidden border-none text-sm",
          className
        )}
        {...props}
      />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("last:border-b-none m-0 border-b", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "px-4 py-2 text-left text-blue-600 [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  // pre: ({
  //   className,
  //   __rawString__,
  //   ...props
  // }: React.HTMLAttributes<HTMLPreElement> & {
  //   __rawString__?: string;
  // }) => {
  //   return (
  //     <div className="relative">
  //       <pre className={""} {...props} />
        
  //         <CopyButton
  //           value={__rawString__ || ""}
  //           className={"absolute right-3 top-3"}
  //         />
  //     </div>
  //   );
  // },
  // code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  //   <code
  //     className={cn(
  //       "relative rounded bg-red-500 px-[0.3rem] py-[0.2rem] font-mono text-sm",
  //       className
  //     )}
  //     {...props}
  //   />
  // ),
};


interface MDXContentProps {
  code: string;
}

const MDXContent: React.FC<MDXContentProps> = ({ code }) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};

export default MDXContent;
