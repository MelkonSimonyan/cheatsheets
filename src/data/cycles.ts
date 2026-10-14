import type { Site } from "./types";

/*
 * The whole content of the site.
 *
 * Add a post: put the preview in public/thumbs/, the PDF in public/pdf/<cycle>/, then add one line to `posts`.
 * Only PUBLISHED posts (with a `linkedin` URL) are listed. The "Coming soon" card, the NEW badge and the
 * published/total counter are added by the page. A cycle with no published posts is not shown.
 */
export const site: Site = {
  cycles: [
    {
      name: "Web Fundamentals Cheat Sheet",
      tags: "HTTP · browser · CORS · cookies",
      badge: "WF",
      color: "#72D76F",
      total: 7,
      // magazine: "/pdf/webfundamentals/Webfundamentals-Cheat-Sheet.pdf", // when the cycle is finished
      posts: [
        {
          n: 1,
          title: "How the Web Works",
          thumb: "/posts/webfundamentals/01-how-the-web-works.webp",
          text: "/posts/webfundamentals/01-how-the-web-works.txt",
          pdf: "/pdf/webfundamentals/01-how-the-web-works.pdf",
          linkedin: "",
        },
      ],
    },
    // { name: 'JavaScript Cheat Sheet', tags: '...', badge: 'JS', color: '#D4F04C', total: 14, posts: [ ... ] },
  ],
  next: { name: "JavaScript", sheets: 14 },
};
