
import { allDocs } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";  
import { ComponentBlock } from "@/components/component-block";
import { getAllFiles } from "@/lib/get-all-files"; 
import MDXContent from "@/components/mdx-content";

interface Props {
  params: Promise<Record<string, string>>;
}
export default async function Page({ params }: Props) { 
  const { slug:componentName } = await params; 
  const doc = allDocs.find((doc) => doc.slugAsParams === componentName);

  if (!doc) {
    return notFound();
  } 

  const files = getAllFiles("demo/components/button")
  console.log(files)
   
  return (
    <div>
      <h1 className="text-2xl font-bold">{doc.title}</h1>

      <MDXContent code={doc?.body?.code} />

      <ComponentBlock directory={componentName} fileName="index"/>
      <ComponentBlock directory={componentName} fileName="default"/> 
    </div>
  );
}
