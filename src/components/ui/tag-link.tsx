'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface TagLinkProps {
  tag: string;
}

export function TagLink({ tag }: TagLinkProps) {
  return (
    <Link 
      href={`/tags/${tag.toLowerCase()}`}
      onClick={(e) => e.stopPropagation()}
    >
      <Badge variant="secondary">
        {tag}
      </Badge>
    </Link>
  );
} 