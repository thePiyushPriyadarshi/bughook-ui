// import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

// const Docs = defineDocumentType(() => ({
//   name: 'Docs',
//   filePathPattern: `docs/**/*.mdx`,  // Make sure this pattern matches the actual file path
//   contentType: 'mdx',
//   fields: {
//     title: { type: 'string' },
//     description: { type: 'string' },
//   },
//   computedFields: {
//     slug: { type: 'string', resolve: (doc) => doc?.title?.toLowerCase().replace(/\s+/g, '-') },
//   },
// }));

// export default makeSource({
//   contentDirPath: './content',  // This folder should contain your MDX files
//   documentTypes: [Docs],      // Register Docs document type here
//   disableImportAliasWarning: true,
// });

import { getHighlighter } from "@shikijs/compat";
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
  ComputedFields,
  DocumentGen,
} from "contentlayer2/source-files";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { codeImport } from "remark-code-import";
import remarkGfm from "remark-gfm";
import { Plugin } from "unified";
import { visit } from "unist-util-visit";

// Types for computed fields
const computedFields: ComputedFields<DocumentGen> = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

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
    published: { type: "boolean", default: true },
    links: { type: "nested", of: LinksProperties },
    featured: { type: "boolean", default: false },
    component: { type: "boolean", default: false },
    toc: { type: "boolean", default: true },
  },
  computedFields,
}));

// Custom rehype plugin to process code blocks
const customCodeBlockProcessor: Plugin = () => (tree) => {
  visit(tree, (node: any) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const codeElement = node.children?.[0];
      if (codeElement?.tagName !== "code") return;

      // Extract metadata
      if (codeElement.data?.meta) {
        const eventMatch = codeElement.data.meta.match(/event="([^"]*)"/);
        if (eventMatch) {
          node.__event__ = eventMatch[1];
          codeElement.data.meta = codeElement.data.meta.replace(/event="[^"]*"/, "");
        }
      }
      console.log(codeElement)
      node.__rawString__ = codeElement.children?.[0]?.value;
    }
  });
};

// Contentlayer source configuration
export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm, codeImport],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "kanagawa-dragon",
          getHighlighter,
          onVisitLine(node: any) {
            if (!node.children.length) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ["word--highlighted"];
          },
        },
        
      ],
      customCodeBlockProcessor,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});



// import { getHighlighter } from "@shikijs/compat"
// import {
//   defineDocumentType,
//   defineNestedType,
//   makeSource,
// } from "contentlayer2/source-files"
// import rehypeAutolinkHeadings from "rehype-autolink-headings"
// import rehypePrettyCode from "rehype-pretty-code"
// import rehypeSlug from "rehype-slug"
// import { codeImport } from "remark-code-import"
// import remarkGfm from "remark-gfm"
// import { visit } from "unist-util-visit"

// import { rehypeComponent } from "./lib/rehype-component"
// import { rehypeNpmCommand } from "./lib/rehype-npm-command"

// /** @type {import('contentlayer/source-files').ComputedFields} */
// const computedFields = {
//   slug: {
//     type: "string",
//     resolve: (doc) => `/${doc._raw.flattenedPath}`,
//   },
//   slugAsParams: {
//     type: "string",
//     resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
//   },
// }

// const LinksProperties = defineNestedType(() => ({
//   name: "LinksProperties",
//   fields: {
//     doc: {
//       type: "string",
//     },
//     api: {
//       type: "string",
//     },
//   },
// }))

// export const Doc = defineDocumentType(() => ({
//   name: "Doc",
//   filePathPattern: `docs/**/*.mdx`,
//   contentType: "mdx",
//   fields: {
//     title: {
//       type: "string",
//       required: true,
//     },
//     description: {
//       type: "string",
//       required: true,
//     },
//     published: {
//       type: "boolean",
//       default: true,
//     },
//     links: {
//       type: "nested",
//       of: LinksProperties,
//     },
//     featured: {
//       type: "boolean",
//       default: false,
//       required: false,
//     },
//     component: {
//       type: "boolean",
//       default: false,
//       required: false,
//     },
//     toc: {
//       type: "boolean",
//       default: true,
//       required: false,
//     },
//   },
//   computedFields,
// }))

// export default makeSource({
//   contentDirPath: "./content",
//   documentTypes: [Doc],
//   mdx: {
//     remarkPlugins: [remarkGfm, codeImport],
//     rehypePlugins: [
//       rehypeSlug,
//       // rehypeComponent,
//       () => (tree) => {
//         visit(tree, (node) => {
//           if (node?.type === "element" && node?.tagName === "pre") {
//             const [codeEl] = node.children
//             if (codeEl.tagName !== "code") {
//               return
//             }

//             if (codeEl.data?.meta) {
//               // Extract event from meta and pass it down the tree.
//               const regex = /event="([^"]*)"/
//               const match = codeEl.data?.meta.match(regex)
//               if (match) {
//                 node.__event__ = match ? match[1] : null
//                 codeEl.data.meta = codeEl.data.meta.replace(regex, "")
//               }
//             }

//             node.__rawString__ = codeEl.children?.[0].value
//             node.__src__ = node.properties?.__src__
//             node.__style__ = node.properties?.__style__
//           }
//         })
//       },
//       [
//         rehypePrettyCode,
//         {
//           theme: "kanagawa-dragon",
//           getHighlighter,
//           onVisitLine(node) {
//             // Prevent lines from collapsing in `display: grid` mode, and allow empty
//             // lines to be copy/pasted
//             if (node.children.length === 0) {
//               node.children = [{ type: "text", value: " " }]
//             }
//           },
//           onVisitHighlightedLine(node) {
//             node.properties.className.push("line--highlighted")
//           },
//           onVisitHighlightedWord(node) {
//             node.properties.className = ["word--highlighted"]
//           },
//         },
//       ],
//       () => (tree) => {
//         visit(tree, (node) => {
//           if (node?.type === "element" && node?.tagName === "div") {
//             if (!("data-rehype-pretty-code-fragment" in node.properties)) {
//               return
//             }

//             const preElement = node.children.at(-1)
//             if (preElement.tagName !== "pre") {
//               return
//             }

//             preElement.properties["__withMeta__"] =
//               node.children.at(0).tagName === "div"
//             preElement.properties["__rawString__"] = node.__rawString__

//             if (node.__src__) {
//               preElement.properties["__src__"] = node.__src__
//             }

//             if (node.__event__) {
//               preElement.properties["__event__"] = node.__event__
//             }

//             if (node.__style__) {
//               preElement.properties["__style__"] = node.__style__
//             }
//           }
//         })
//       },
//       rehypeNpmCommand,
//       [
//         rehypeAutolinkHeadings,
//         {
//           properties: {
//             className: ["subheading-anchor"],
//             ariaLabel: "Link to section",
//           },
//         },
//       ],
//     ],
//   },
// })
