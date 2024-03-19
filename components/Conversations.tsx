import { getArticles, Article } from "../utils/articles.ts";
import ArticleCard from "./ArticleCard.tsx";
import IconArrowBadgeRightFilled from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/arrow-badge-right-filled.tsx"

const conversations = await getArticles();

export const pickRandomItems = <T extends unknown> (arr: T[], n: number): T[] => {
  const shuffled = Array.from(arr).sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

export default function Conversations() {
  const three = pickRandomItems(conversations, 3)

  return (
    <div className="mx-auto max-w-5xl">
      <div className="my-16">
        <h2 className="text-4xl font-bold tracking-12 text-amber-500 sm:text-5xl">Conversations</h2>
        <p className="mt-2 text-lg leading-8 text-gray-400">
          Learn how to grow your business with our expert advice. Chose a conversation starter article.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {three.map((article) => <ArticleCard article={article} />)}
      </div>
      <div className="flex w-full mb-16 justify-end">
        <a href="/articles" className="flex items-center text-amber-600">
          <span className="text-2xl font-light tracking-wide">SEE MORE</span>
          <IconArrowBadgeRightFilled />
        </a>
      </div>
    </div>
  )
}