import MDXContent from "@/components/mdx-content";
import { allDocs } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";  
import { ComponentBlock } from "@/components/component-block";

interface Props {
  params: Record<string, string | string[]>;
}
export default async function Page({ params }: Props) {
  const { slug } = await params;

  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    return notFound();
  }

  console.log(doc);
  return (
    <div>
      {/* {doc.title} */}

      {/* <MDXContent code={doc?.body?.code} /> */}

      <ComponentBlock name="button"/>
      <ComponentBlock name="breadcrumb"/>
    </div>
  );
}
