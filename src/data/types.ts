export type Post = {
  /** Position inside the cycle, starting at 1. */
  n: number;
  title: string;
  /** Preview image under /public, e.g. "/posts/webfundamentals/01-how-the-web-works.webp". */
  thumb: string;
  /** Post text under /public, e.g. "/posts/webfundamentals/01-how-the-web-works.txt". */
  text: string;
  /** Printable A4 PDF under /public, e.g. "/pdf/webfundamentals/01-how-the-web-works.pdf". */
  pdf: string;
  /** URL of the LinkedIn post. Empty or missing means "not published yet". */
  linkedin: string;
};

export type Cycle = {
  name: string;
  tags: string;
  badge: string;
  color: string;
  /** Number of posts in the whole cycle (7 or 14). */
  total: number;
  /** PDF with every page of the cycle, set when the cycle is finished. */
  magazine?: string;
  posts: Post[];
};

export type Site = {
  cycles: Cycle[];
  /** The cycle that starts after the last one. Omit to hide the row. */
  next?: { name: string; sheets: number };
};
