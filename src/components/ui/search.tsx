'use client';

import React, { useState, useCallback } from 'react';
import { Article } from '@/types/article';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import debounce from 'lodash/debounce';

interface SearchProps {
  articles: Article[];
}

export function Search({ articles }: SearchProps) {
  const [searchResults, setSearchResults] = useState<Article[]>(articles);
  const [searchTerm, setSearchTerm] = useState('');

  const performSearch = useCallback(
    (term: string) => {
      if (!term.trim()) {
        setSearchResults(articles);
        return;
      }

      const searchLower = term.toLowerCase();
      const filtered = articles.filter((article) => {
        const titleMatch = article.title.toLowerCase().includes(searchLower);
        const snippetMatch = article.snippet.toLowerCase().includes(searchLower);
        const tagMatch = article.tags.some(tag => 
          tag.toLowerCase().includes(searchLower)
        );
        
        return titleMatch || snippetMatch || tagMatch;
      });

      setSearchResults(filtered);
    },
    [articles]
  );

  // Debounce search to improve performance
  const debouncedSearch = debounce(performSearch, 300);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = e.target.value;
    setSearchTerm(newTerm);
    debouncedSearch(newTerm);
  };

  return (
    <div className="space-y-6">
      <div className="max-w-md mx-auto">
        <Input
          type="search"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {searchResults.length > 0 ? (
          searchResults.map((article) => (
            <Link key={article.slug} href={`/articles/${article.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="space-y-1">
                    <CardTitle>{article.title}</CardTitle>
                    <CardDescription>
                      {formatDate(article.published_at)}
                    </CardDescription>
                  </div>
                  <p className="text-gray-600 mt-2">{article.snippet}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            No articles found matching &#34;{searchTerm}&#34;
          </div>
        )}
      </div>
    </div>
  );
}