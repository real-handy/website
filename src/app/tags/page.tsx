import { Metadata } from 'next';
import Link from 'next/link';
import { getAllTags } from '@/lib/tags';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Tags',
  description: 'Browse articles by tag',
};

export default async function TagsPage() {
  const tags = await getAllTags();

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Tags</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tags.map((tag) => (
          <Link key={tag} href={`/tags/${tag}`}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{tag}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}