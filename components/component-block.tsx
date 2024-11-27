import { ComponentPreview } from "@/components/component-preview";
import { ComponentSource } from "@/components/component-source";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { readSourceCode } from "@/lib/read-source-code";
import { CopyButton } from "./copy-button";

interface ComponentBlockProps {
  name: string;
}
export async function ComponentBlock({ name }: ComponentBlockProps) {
  const code = await readSourceCode(name);
  return (
    <Tabs defaultValue="preview">
      <TabsList className="bg-transparent w-56 grid grid-cols-2 gap-5">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <Separator className="-mt-0.5" />

      <div className="relative">
        <CopyButton className="absolute z-50 top-3 right-3" value={code} />
        <TabsContent value="preview">
          <ComponentPreview name={name} />
        </TabsContent>
        <TabsContent value="code">
          <ComponentSource code={code} />
        </TabsContent>
      </div>
    </Tabs>
  );
}
