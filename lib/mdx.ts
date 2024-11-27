// src/lib/mdx.ts
import path from 'path';
import fs from 'fs'; 
// import { ComponentDoc } from './types';

export async function getComponentDoc(slug: string) {
  const filePath = path.join(process.cwd(), 'content/components', `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');

  const { frontmatter, content } = await compileMDX({
    source,
    options: { parseFrontmatter: true }
  });

  return {
    slug,
    content,
    ...frontmatter
  };
}

export async function getAllComponentDocs() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/docs'));
  const components = files.map((file) => {
    return {
      slug: file.replace('.mdx', ''),
      path: `/components/${file.replace('.mdx', '')}`
    };
  });

  return components;
}