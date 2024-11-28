// contentlayer.config.ts
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer2/source-files";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var LinksProperties = defineNestedType(() => ({
  name: "LinksProperties",
  fields: {
    doc: { type: "string" },
    api: { type: "string" }
  }
}));
var Component = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    links: { type: "nested", of: LinksProperties }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Component]
  // mdx: {
  //   remarkPlugins: [remarkGfm, codeImport],
  //   rehypePlugins: [
  //     rehypeSlug,
  //     [
  //       rehypePrettyCode,
  //       {
  //         theme: "kanagawa-dragon",
  //         getHighlighter,
  //         onVisitLine(node: any) {
  //           if (!node.children.length) {
  //             node.children = [{ type: "text", value: " " }];
  //           }
  //         },
  //         onVisitHighlightedLine(node: any) {
  //           node.properties.className.push("line--highlighted");
  //         },
  //         onVisitHighlightedWord(node: any) {
  //           node.properties.className = ["word--highlighted"];
  //         },
  //       },
  //     ],
  //     customCodeBlockProcessor,
  //     [
  //       rehypeAutolinkHeadings,
  //       {
  //         properties: {
  //           className: ["subheading-anchor"],
  //           ariaLabel: "Link to section",
  //         },
  //       },
  //     ],
  //   ],
  // },
});
export {
  Component,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-PEA73WWN.mjs.map
