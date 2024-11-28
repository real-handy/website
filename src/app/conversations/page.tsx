import { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticles } from '@/lib/articles';
import { formatDate } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Conversations',
  description: 'Start a conversation about a topic your new startup needs.',
};

export default async function ArticlesPage() {
  const articles = await getAllArticles();

  return (
    <>
      <Header
        title="real Handy"
        navigation={[]}
      />
      <div className="container mx-auto py-16 px-4 bg-gray-900 text-gray-50">
        <h1 className="text-4xl font-bold mb-8">Articles</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.slug} href={`/conversations/${article.slug}`}>
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
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}