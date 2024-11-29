import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import MDXContent from "@/components/mdx-content";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
// import { Metadata } from "next";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function DocsPage({ params }: any) {
  const {slug} = await params; 

  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    return notFound();
  }

  return (
    <div className="w-11/12 mx-auto my-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>Docs</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{doc.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="my-6">
        <h1 className="text-3xl font-bold">{doc.title}</h1>
        <p className="text-muted-foreground">{doc.description}</p>
      </div>
      {doc.body?.code && <MDXContent code={doc.body.code} />}
    </div>
  );
}

export async function generateStaticParams() {
  // Generate a list of all slugs to build static pages
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams, 
  }));
}
