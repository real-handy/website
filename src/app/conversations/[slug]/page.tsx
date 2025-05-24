import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getArticleSlugs } from '@/lib/articles';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/header';
import Image from 'next/image';

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
  const img = `/images/${article.slug}.png`;
  const imageExists = await fetch(img)
    .then((response) => response.ok)
    .catch(() => false);
  if (!imageExists) {
    console.log('Image not found: ' + img);
  }

  return (
    <>
      <Header 
        title="real handy" 
        navigation={[
          { label: "home", href: '/#top' },
          { label: "roles", href: '/#roles' },
          { label: "conversations", href: '/#conversations' },
          { label: "connect", href: '/#connect' },
        ]}
      />
      <article className="container mx-auto py-8 px-4 max-w-3xl">
        {img && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <Image 
              src={img} 
              alt={article.title}
              width={1200}
              height={630}
              className="w-full h-auto"
              priority
            />
          </div>
        )}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-slate-50">{article.title}</h1>
          <div className="text-slate-400 mb-6">
            <time dateTime={article.published_at}>
              {formatDate(article.published_at)}
            </time>
          </div>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-indigo-700 hover:bg-indigo-600 text-slate-100">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-xl text-slate-300 mt-6">
            {article.snippet}
          </p>
        </header>
        <div 
          className="prose prose-lg max-w-none prose-invert prose-headings:text-slate-50 prose-p:text-slate-300 prose-a:text-indigo-400 prose-strong:text-amber-400"
          dangerouslySetInnerHTML={{ __html: article.content }} 
        />
      </article>
    </>
  );
}