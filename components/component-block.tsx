"use server"

import { ComponentPreview } from "@/components/component-preview";
import { ComponentSource } from "@/components/component-source";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { readSourceCode } from "@/lib/read-source-code";
import { CopyButton } from "./copy-button";

interface ComponentBlockProps {
  directory:string;
  fileName: string;
  dottedBackground?:boolean
}
export async function ComponentBlock({ fileName,directory,dottedBackground=true }: ComponentBlockProps) {
  const code = await readSourceCode(`demo/components/${directory}/${fileName}.tsx`);
  return (
    <Tabs defaultValue="preview">
      <TabsList className="bg-transparent p-0 w-56 grid grid-cols-2 gap-5">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <Separator className="-mt-1 mb-5" />

      <div className="relative">
        <CopyButton className="absolute z-50 top-3 right-3" value={code} />
        <TabsContent value="preview">
          <ComponentPreview directory={directory} fileName={fileName} dottedBackground={dottedBackground}/>
        </TabsContent>
        <TabsContent value="code">
          <ComponentSource code={code} />
        </TabsContent>
      </div>
    </Tabs>
  );
}
