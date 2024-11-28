import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getArticleSlugs } from '@/lib/articles';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  return {
    title: article.title,
    description: article.snippet,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  let article;
  try {
    article = await getArticleBySlug(params.slug);
  } catch (error) {
    console.log('404' + error )
    notFound();
  }

  return (
    <article className="container mx-auto py-16 px-4 max-w-3xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="text-gray-600 mb-6">
          <time dateTime={article.published_at}>
            {formatDate(article.published_at)}
          </time>
        </div>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-xl text-gray-600 mt-6">
          {article.snippet}
        </p>
      </header>
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }} 
      />
    </article>
  );
}