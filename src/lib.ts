import type { Cycle, Post } from "./data/types";

export const pad = (n: number) => String(n).padStart(2, "0");

export const isPublished = (p: Post) => Boolean(p.linkedin);

export function publishedPosts(c: Cycle): Post[] {
  return c.posts.filter(isPublished);
}
