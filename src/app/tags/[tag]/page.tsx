import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllTags, getArticlesByTag } from '@/lib/tags';
import { formatDate } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map((tag) => ({
    tag,
  }));
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const tag = decodeURIComponent(params.tag);
  return {
    title: `Articles tagged "${tag}"`,
    description: `Browse all articles tagged with "${tag}"`,
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const tag = decodeURIComponent(params.tag);
  const articles = await getArticlesByTag(tag);

  if (articles.length === 0) {
    notFound();
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Articles tagged &#34;{tag}&#34;
        </h1>
        <p className="text-gray-600">
          {articles.length} article{articles.length === 1 ? '' : 's'}
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.slug} href={`/articles/${article.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="space-y-1">
                  <CardTitle>{article.title}</CardTitle>
                  <CardDescription>
                    {formatDate(article.published_at)}
                  </CardDescription>
                </div>
                <p className="text-gray-600 mt-2">{article.snippet}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {article.tags.map((t) => (
                    <Badge 
                      key={t} 
                      variant={t === tag ? "default" : "secondary"}
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}