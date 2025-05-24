import { getArticleBySlug } from "@/lib/articles";
import { formatDate } from "@/lib/utils";
import { Article } from "@/types/article";
import Link from 'next/link';

type ArticleCardProps = {
  slug: string;
};

export const ArticleCard: React.FC<ArticleCardProps> = async ({ slug }) => {
  const article: Article = await getArticleBySlug(slug);
  const imagePath = `/images/${slug}.png`;
  const hedStyle = {
    backgroundImage: `url(${imagePath})`,
  };

  return (
    <article className="md:rounded-md bg-gray-300 text-indigo-900 dark:bg-gray-800 dark:text-indigo-100">
      <div className="w-full h-24 rounded-t-md bg-cover bg-top" style={hedStyle}>
        <div className="sr-only">{slug}</div>
      </div>
      <div className="m-2">
        <time className="text-sm text-slate-500">
          {formatDate(article.published_at)}
        </time>
      </div>
      <div className="my-2 md:m-4 mx-1">
        <h3 className="text-lg font-semibold leading-6 text-indigo-500 hover:text-indigo-700">
          <Link href={`/conversations/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-md leading-6">{article.snippet}</p>
      </div>
    </article>
  );
};
