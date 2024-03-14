import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { getArticle, Article } from "../../utils/articles.ts";
import { render } from "$gfm";

export const handler: Handlers<Article> = {
  async GET(_req, ctx) {
    try {
      const article = await getArticle(ctx.params.slug);
      return ctx.render(article as Article);
    } catch {
      return ctx.renderNotFound();
    }
  },
};

export default function ArticlePage(props: PageProps<Article>) {
  const article = props.data;
  return (
    <>
      <Head>
        <title>Real Handy | {article.title}</title>
      </Head>
      <section class="px-4 pt-16 max-w-5xl mx-auto">
        <h1 class="text-5xl font-bold text-amber-500">{article.title}</h1>
        <time class="text-gray-500">
          {new Date(article.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div
          class="mt-8 text-blue-100 mx-auto max-w-4xl mb-16 prose"
          dangerouslySetInnerHTML={{ __html: render(article.content) }}
        />
      </section>
    </>
  );
}