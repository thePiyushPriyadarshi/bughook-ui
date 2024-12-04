import remarkGfm from 'remark-gfm';
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer2/source-files";




// Define nested type for `links`
const LinksProperties = defineNestedType(() => ({
  name: "LinksProperties",
  fields: {
    doc: { type: "string" },
    api: { type: "string" },
  },
}));

// Main document type definition
export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    links: { type: "nested", of: LinksProperties },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

// // Custom rehype plugin to process code blocks
// const customCodeBlockProcessor: Plugin = () => (tree) => {
//   visit(tree, (node: any) => {
//     if (node?.type === "element" && node?.tagName === "pre") {
//       const codeElement = node.children?.[0];
//       if (codeElement?.tagName !== "code") return;

//       // Extract metadata
//       if (codeElement.data?.meta) {
//         const eventMatch = codeElement.data.meta.match(/event="([^"]*)"/);
//         if (eventMatch) {
//           node.__event__ = eventMatch[1];
//           codeElement.data.meta = codeElement.data.meta.replace(/event="[^"]*"/, "");
//         }
//       }
//       console.log(codeElement)
//       node.__rawString__ = codeElement.children?.[0]?.value;
//     }
//   });
// };

// Contentlayer source configuration
export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    // remarkPlugins: [remarkGfm, codeImport],
    // rehypePlugins: [
    //   rehypeSlug,
    //   [
    //     rehypePrettyCode,
    //     {
    //       theme: "kanagawa-dragon",
    //       getHighlighter,
    //       onVisitLine(node: any) {
    //         if (!node.children.length) {
    //           node.children = [{ type: "text", value: " " }];
    //         }
    //       },
    //       onVisitHighlightedLine(node: any) {
    //         node.properties.className.push("line--highlighted");
    //       },
    //       onVisitHighlightedWord(node: any) {
    //         node.properties.className = ["word--highlighted"];
    //       },
    //     },

    //   ],
    //   customCodeBlockProcessor,
    //   [
    //     rehypeAutolinkHeadings,
    //     {
    //       properties: {
    //         className: ["subheading-anchor"],
    //         ariaLabel: "Link to section",
    //       },
    //     },
    //   ],
    // ],
  },
});
