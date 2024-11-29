import { allDocs } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import MDXContent from "@/components/mdx-content";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Props {
  params: Promise<Record<string, string>>;
}
export default async function Page({ params }: Props) {
  const { slug: componentName } = await params;
  const doc = allDocs.find((doc) => doc.slugAsParams === componentName);

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

      <MDXContent code={doc?.body?.code} />
    </div>
  );
}
