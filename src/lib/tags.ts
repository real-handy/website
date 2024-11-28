import { cache } from 'react';
import { getAllArticles } from './articles';
import { Article } from '@/types/article';

export const getAllTags = cache(async (): Promise<string[]> => {
  const articles = await getAllArticles();
  const tagSet = new Set<string>();
  
  articles.forEach(article => {
    article.tags.forEach(tag => tagSet.add(tag));
  });
  
  return Array.from(tagSet).sort();
});

export const getArticlesByTag = cache(async (tag: string): Promise<Article[]> => {
  const articles = await getAllArticles();
  return articles.filter(article => article.tags.includes(tag));
});
