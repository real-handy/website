import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import { cache } from 'react';
import { Article } from '@/types/article';

const articlesDirectory = path.join(process.cwd(), 'content');

export const getArticleSlugs = cache(() => {
  return fs.readdirSync(articlesDirectory)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));
});

export const getArticleBySlug = cache(async (slug: string): Promise<Article> => {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .use(remarkGfm)
    .process(content);

  return {
    slug,
    content: processedContent.toString(),
    title: data.title,
    published_at: data.published_at,
    snippet: data.snippet,
    tags: data.tags || [],
  };
});

export const getAllArticles = cache(async (): Promise<Article[]> => {
  const slugs = getArticleSlugs();
  const articles = await Promise.all(
    slugs.map(async (slug) => {
      const article = await getArticleBySlug(slug);
      return article;
    })
  );

  return articles.sort((a, b) => 
    new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
  );
});