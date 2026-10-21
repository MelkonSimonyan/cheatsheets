import type { Site } from "./types";

/*
 * The whole content of the site.
 *
 * Add a post: put the preview in public/thumbs/, the PDF in public/pdf/<cycle>/, then add one line to `posts`.
 * Every post listed here is shown. The LinkedIn button appears only when `linkedin` is not empty. The "Coming soon"
 * card, the NEW badge and the listed/total counter are added by the page.
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
          linkedin: "https://lnkd.in/p/dhjGDSyi",
        },
        {
          n: 2,
          title: "HTTP & HTTPS",
          thumb: "/posts/webfundamentals/02-http-https.webp",
          text: "/posts/webfundamentals/02-http-https.txt",
          pdf: "/pdf/webfundamentals/02-http-https.pdf",
          linkedin: "https://lnkd.in/p/d_rHTUgi",
        },
        {
          n: 3,
          title: "How Browsers Work",
          thumb: "/posts/webfundamentals/03-how-browsers-work.webp",
          text: "/posts/webfundamentals/03-how-browsers-work.txt",
          pdf: "/pdf/webfundamentals/03-how-browsers-work.pdf",
          linkedin: "https://lnkd.in/p/dDR9kY65",
        },
        {
          n: 4,
          title: "DOM & Events",
          thumb: "/posts/webfundamentals/04-dom-events.webp",
          text: "/posts/webfundamentals/04-dom-events.txt",
          pdf: "/pdf/webfundamentals/04-dom-events.pdf",
          linkedin: "https://lnkd.in/p/djF8YmRq",
        },
        {
          n: 5,
          title: "CORS & Same-Origin Policy",
          thumb: "/posts/webfundamentals/05-cors-same-origin.webp",
          text: "/posts/webfundamentals/05-cors-same-origin.txt",
          pdf: "/pdf/webfundamentals/05-cors-same-origin.pdf",
          linkedin: "https://lnkd.in/p/dg8a_rau",
        },
        {
          n: 6,
          title: "Cookies, Storage & Sessions",
          thumb: "/posts/webfundamentals/06-cookies-storage.webp",
          text: "/posts/webfundamentals/06-cookies-storage.txt",
          pdf: "/pdf/webfundamentals/06-cookies-storage.pdf",
          linkedin: "https://lnkd.in/p/d4WET-at",
        },
        /* {
          n: 7,
          title: "Web Performance",
          thumb: "/posts/webfundamentals/07-web-performance.webp",
          text: "/posts/webfundamentals/07-web-performance.txt",
          pdf: "/pdf/webfundamentals/07-web-performance.pdf",
          linkedin: "",
        }, */
      ],
    },
    // { name: 'JavaScript Cheat Sheet', tags: '...', badge: 'JS', color: '#D4F04C', total: 14, posts: [ ... ] },
  ],
  next: { name: "JavaScript", sheets: 14 },
};
