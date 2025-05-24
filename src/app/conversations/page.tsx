import { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticles } from '@/lib/articles';
import { formatDate } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { TagLink } from '@/components/ui/tag-link';

export const metadata: Metadata = {
  title: 'Conversations',
  description: 'Start a conversation about a topic your new startup needs.',
};

const navigation = [
  { label: "home", href: "/" },
  { label: "roles", href: "/#roles" },
  { label: "conversations", href: "/conversations" },
  { label: "connect", href: "/#connect" },
];

export default async function ArticlesPage() {
  const articles = await getAllArticles();

  return (
    <>
      <Header
        title="real Handy"
        navigation={navigation}
      />
      <div className="container mx-auto py-16 px-4 bg-gray-900 text-gray-50">
        <h1 className="text-6xl font-bold mb-8 text-amber-500">Conversations</h1>
        <p className="mb-8 text-xl leading-8 text-gray-300">A collection of conversation starters for founders, CEOs, and tech leaders. Find a topic that resonates with you? Feel free to reach out to us to start an assesment.</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.slug} href={`/conversations/${article.slug}`}>
              <Card className="h-full border-none">
                <CardHeader>
                  <div className="relative h-[200px] -mt-6 -mx-6 mb-6">
                    <Image
                      src={`/images/${article.slug}.png`}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10 p-6">
                      <div className="space-y-1 text-white">
                        <CardTitle>{article.title}</CardTitle>
                        <CardDescription className="text-slate-200">
                          {formatDate(article.published_at)}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <TagLink key={tag} tag={tag} />
                    ))}
                  </div>
                  <p className="text-gray-600">{article.snippet}</p>
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