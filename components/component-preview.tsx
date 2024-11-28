import React, { Suspense } from "react";

interface ComponentPreviewProps {
  directory: string;
  fileName: string;
}
export function ComponentPreview({ directory, fileName }: ComponentPreviewProps) {
  const loadComponent = async () => {
    return await import(`@/demo/components/${directory}/${fileName}`); 
  };
  const Component = React.lazy(() => loadComponent()); 

  return (
    <div className="flex items-center justify-center border rounded-lg min-h-[350px]">
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    </div>
  );
}

import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return <Button>Button</Button>;
}
