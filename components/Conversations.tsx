export interface Conversation {
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
  snippet: string;
  tags: Array<string>;
}


export default function Conversations() {}