import { Handlers, PageProps } from "$fresh/server.ts";
import { getArticles, Article } from "../../utils/articles.ts";

export const handler: Handlers<Article[]> = {
  async GET(_req, ctx) {
    const articles = await getArticles();
    return ctx.render(articles);
  },
};

function ArticleCard(props: { article: Article }) {
  const { article } = props;
  const imagePath = `/images/${article.slug}.png`;
  const hedStyle = {
    backgroundImage: `url(${imagePath})`
  };

  return (
    <section className="md:rounded-md bg-gray-300 text-indigo-900 dark:bg-gray-800 dark:text-indigo-100">
      <div className="w-full h-24 rounded-t-md bg-cover bg-top" style={hedStyle}>
        <div className="sr-only">{article.slug}</div>
      </div>
      <div className="m-2">
        <time class="text-xs text-gray-500">
          {new Date(article.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>
      <div className="my-2 md:m-4 mx-1">
        <h3 className="text-lg font-semibold leading-6 text-indigo-500 hover:text-indigo-700">
          <a href={`/articles/${article.slug}`}>
            <span className="absolute inset-0" />
            {article.title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-md leading-6">{article.snippet}</p>
      </div>
    </section>
  )
}

export default function IndexPage(props: PageProps<Article[]>) {
  const Articles = props.data;
  return (
    <div className="mx-auto max-w-5xl">
      <div className="my-16">
        <h2 className="text-4xl font-bold tracking-12 text-amber-500 sm:text-5xl">Conversations</h2>
        <p className="mt-2 text-lg leading-8 text-gray-400">
          Learn how to grow your business with our expert advice. Chose a conversation starter article.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Articles.map((article) => <ArticleCard article={article} />)}
      </div>
    </div>

  );
}
