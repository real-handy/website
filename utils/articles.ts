import { extract } from "https://deno.land/std@0.219.0/front_matter/any.ts";
import { join } from "https://deno.land/std@0.219.0/path/posix/join.ts";

const DIRECTORY = "./articles";

export interface Article {
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
  snippet: string;
  tags: Array<string>;
}

export async function getArticles(): Promise<Article[]> {
  const files = Deno.readDir(DIRECTORY);
  const promises = [];
  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    promises.push(getArticle(slug));
  }
  const articles = await Promise.all(promises) as Article[];
  articles.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return articles;
}

export async function getArticle(slug: string): Promise<Article | null> {
  const text = await Deno.readTextFile(join(DIRECTORY, `${slug}.md`));
  const { attrs, body } = extract(text);
  return {
    slug,
    title: attrs.title as string,
    publishedAt: new Date(attrs.published_at as string),
    content: body,
    snippet: attrs.snippet as string,
    tags: attrs.tags as Array<string>
  };
}