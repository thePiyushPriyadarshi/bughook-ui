import React, { Suspense } from "react";
import DotPattern from "./ui/dot-pattern";
import { cn } from "@/lib/utils";
import { TextShimmer } from "./ui/text-shimmer";

interface ComponentPreviewProps {
  directory: string;
  fileName: string;
  dottedBackground: boolean;
}
export function ComponentPreview({
  directory,
  fileName,
  dottedBackground,
}: ComponentPreviewProps) {
  const loadComponent = async () => {
    return await import(`@/demo/components/${directory}/${fileName}`);
  };
  const Component = React.lazy(() => loadComponent());

  return (
    <div className="flex relative items-center p-4 py-10 justify-center border rounded-lg min-h-[350px]">
      {/* <div className="z-10 w-full"> */}
        <Suspense
          fallback={
            <div className="flex items-center text-lg justify-center">
              <TextShimmer>Loading...</TextShimmer>
            </div>
          }
        >
          <Component />
        </Suspense>
      {/* </div> */}
      {dottedBackground && (
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)] -z-10 md:[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
          )}
        />
      )}
    </div>
  );
}
