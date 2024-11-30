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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }:any) {
  const { slug } = await params;

  // Find the document data based on the slug
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    return {
      title: 'Document Not Found',
      description: 'The document you are looking for does not exist.',
    };
  }
  return {
    title: `${doc.title} - Bughook UI `, 
    description: doc.description || `Docs for how to use ${doc.title}`, 
    openGraph: {
      title: `${doc.title} - Bughook UI`,
      description: doc.description || `Docs for how to use ${doc.title}`,
      url: `${process.env.HOST_URL}/docs/${slug}`, // URL to the page
    },
    // twitter: {
    //   card: 'summary_large_image',
    //   title: `${doc.title} - My Website`,
    //   description: doc.description || 'Read this amazing document.',
    //   images: [doc.image || '/default-image.png'], // Fallback image
    // },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function DocsPage({ params }: any) {
  const { slug } = await params;

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
      <MDXContent code={doc.body.code} />
    </div>
  );
}

export async function generateStaticParams() {
  // Generate a list of all slugs to build static pages
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams,
  }));
}
