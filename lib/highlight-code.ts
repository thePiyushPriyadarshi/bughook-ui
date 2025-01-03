import { codeToHtml } from 'shiki'

export async function highlightCode(code: string) {
    const html = codeToHtml(code, {
      lang: "tsx",
      theme: "vitesse-black",
      // transformers: [
      //   {
      //     code(node) {
      //       node.properties["data-line-numbers"] = ""
      //     },
      //   },
      // ],
    })
  
    return html
  }