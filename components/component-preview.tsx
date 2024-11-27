import React, { lazy, Suspense } from "react";

interface ComponentPreviewProps {
  name: string;
}
export function ComponentPreview({ name }: ComponentPreviewProps) {
  const loadComponent = async () => {
    const modules = await import(`@/components/ui/${name}`);
    const componentName = name[0].toUpperCase() + name.slice(1); 
    if (modules[componentName]) {
      return modules[componentName]; // Ensure the named export exists
    }
    throw new Error(`Component '${componentName}' not found in the module.`);
  };
  const Component = React.lazy(() => loadComponent().then((component) => ({ default: component })));

  return (
    <div className="flex items-center justify-center border rounded-lg min-h-[350px]">

    <Suspense fallback={<div>Loading...</div>}> 
      <Component>
        Click Me
      </Component>
    </Suspense>
    </div>
  );
}
