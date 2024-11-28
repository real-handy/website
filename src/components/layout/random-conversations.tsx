import { getAllArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/ui/article-card";
import { SignpostBig } from "lucide-react";

const pickRandomItems = <T,>(arr: T[], n: number): T[] => {
  const shuffled = Array.from(arr).sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

export const RandomConversations = async() => {
  const articles = await getAllArticles();
  const three = pickRandomItems(articles, 3);

  return (
    <div id="conversations" className="mx-auto max-w-5xl">
      <div className="my-16">
        <h2 className="text-4xl font-bold tracking-12 text-amber-500 sm:text-5xl">Conversations</h2>
        <p className="mt-2 text-lg leading-8 text-gray-400">
          Learn how to grow your business with our expert advice. Chose a conversation starter article.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {three.map((article) => <ArticleCard key={article.slug} slug={article.slug} />)}
      </div>
      <div className="flex w-full mb-16 justify-end">
        <a href="/conversations" className="flex items-center text-amber-600">
          <span className="text-2xl font-light tracking-wide pr-4">SEE MORE</span> <SignpostBig />
        </a>
      </div>
    </div>
  )
}