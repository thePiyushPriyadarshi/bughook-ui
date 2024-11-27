// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
var Docs = defineDocumentType(() => ({
  name: "Docs",
  filePathPattern: `docs/**/*.mdx`,
  // Make sure this pattern matches the actual file path
  contentType: "mdx",
  fields: {
    title: { type: "string" },
    description: { type: "string" }
  },
  computedFields: {
    slug: { type: "string", resolve: (doc) => doc?.title?.toLowerCase().replace(/\s+/g, "-") }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  // This folder should contain your MDX files
  documentTypes: [Docs],
  // Register Docs document type here
  disableImportAliasWarning: true
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-VTYBCFML.mjs.map
