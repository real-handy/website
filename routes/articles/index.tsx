import { Handlers, PageProps } from "$fresh/server.ts";
import { getArticles, Article } from "../../utils/articles.ts";
import ArticleCard from "../../components/ArticleCard.tsx";

export const handler: Handlers<Article[]> = {
  async GET(_req, ctx) {
    const articles = await getArticles();
    return ctx.render(articles);
  },
};

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
