import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const sahabat = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/data/sahabat' }) });
const articles = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/data/articles' }) });
const authors = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/data/authors' }) });

export const collections = { sahabat, articles, authors };
