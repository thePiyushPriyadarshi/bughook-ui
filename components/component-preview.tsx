import React, { Suspense } from "react";
import DotPattern from "./ui/dot-pattern";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  directory: string;
  fileName: string;
  dottedBackground: boolean;
}
export function ComponentPreview({
  directory,
  fileName,
  dottedBackground
}: ComponentPreviewProps) {
  const loadComponent = async () => {
    return await import(`@/demo/components/${directory}/${fileName}`);
  };
  const Component = React.lazy(() => loadComponent());

  return (
    <div className="flex relative items-center justify-center border rounded-lg min-h-[350px]">
      <div className="z-10">
        <Suspense fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
      </div>
      {dottedBackground && (
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
          )}
        />
      )}
    </div>
  );
}
