import { Article } from "../utils/articles.ts";

export default function ArticleCard(props: { article: Article }) {
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
            {article.title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-md leading-6">{article.snippet}</p>
      </div>
    </section>
  )
}