import { Handlers, PageProps } from "$fresh/server.ts";
import { getArticle, getArticles, Article } from "../../utils/articles.ts";

export const handler: Handlers<Article[]> = {
  async GET(_req, ctx) {
    const articles = await getArticles();
    return ctx.render(articles);
  },
};

function ArticleCard(props: { article: Article }) {
  const { article } = props;
  return (
    <div class="py-8 border(t gray-200)">
      <a class="sm:col-span-2" href={`/articles/${article.slug}`}>
        <h3 class="text(3xl gray-900) font-bold">
          {article.title}
        </h3>
        <time class="text-gray-500">
          {new Date(article.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div class="mt-4 text-gray-900">
          {article.snippet}
        </div>
      </a>
    </div>
  );
}

export default function IndexPage(props: PageProps<Article[]>) {
  const Articles = props.data;
  return (
    <section class="max-w-screen-md px-4 pt-16 mx-auto">
      <h1 class="text-5xl font-bold">Articles</h1>
      <div class="mt-8">
        {Articles.map((article) => <ArticleCard article={article} />)}
      </div>
    </section>
  );
}
