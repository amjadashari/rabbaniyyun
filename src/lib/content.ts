import { getCollection } from 'astro:content';

export async function resolveAuthors(slugs: string[] = []) {
  const authors = await getCollection('authors');
  return slugs.map(slug => authors.find(a => a.data.slug === slug)).filter(Boolean);
}

export function articlePath(entry: any) {
  const d = entry.data;
  if (d.section === 'sahabiyah') return `/sahabiyah/${d.slug}/`;
  if (d.section === 'sahabat') return `/sahabat/${d.slug}/`;
  return `/articles/${d.slug}/`;
}
