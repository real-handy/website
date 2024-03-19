import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Meta, { type MetaProps } from "../../components/Meta.tsx";
import { SITE_DESCRIPTION, SITE_NAME } from "../../utils/constants.ts";
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
  const imagePath = `/images/${article.slug}.png`;
  const hedStyle = {
    backgroundImage: `url(${imagePath})`
  };

  return (
    <>
      <Head>
        <title>Real Handy | {article.title}</title>
        <Meta
          title={article?.title ? `${props.title} ▲ ${SITE_NAME}` : SITE_NAME}
          description={article?.snippet ?? SITE_DESCRIPTION}
          href={`https://realhandy.tech/${article.slug}`}
          imageUrl={`https://realhandy.tech/images/${article.slug}.png` ?? "https://realhandy.tech/images/cover.png"}
        />
      </Head>
      <section class="px-4 pt-16 max-w-5xl mx-auto">
        <div class="h-96 w-auto rounded-t-md bg-cover bg-top mb-8" style={hedStyle}>
          <span class="sr-only">Header Image</span>
        </div>
        <h1 class="text-5xl font-bold text-amber-700 dark:text-amber-500">{article.title}</h1>
        <time class="text-gray-500">
          {new Date(article.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div class="mt-4">
          {article.tags.map((tag) => (
            <span className="inline-flex items-center rounded-full mr-2 bg-indigo-100 px-1.5 py-0.5 text-xs font-medium text-indigo-700">
              { tag }
            </span>
            ))}
        </div>
        <div
          class="mt-8 mx-auto max-w-5xl mb-16 prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: render(article.content) }}
        />
      </section>
    </>
  );
}