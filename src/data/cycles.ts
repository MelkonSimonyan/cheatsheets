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
        {
          n: 7,
          title: "Web Performance",
          thumb: "/posts/webfundamentals/07-web-performance.webp",
          text: "/posts/webfundamentals/07-web-performance.txt",
          pdf: "/pdf/webfundamentals/07-web-performance.pdf",
          linkedin: "https://lnkd.in/p/dPJHJEzt",
        },
        {
          n: 8,
          title: "Recap",
          thumb: "/posts/webfundamentals/08-recap.webp",
          text: "/posts/webfundamentals/08-recap.txt",
          pdf: "/pdf/webfundamentals/08-recap.pdf",
          linkedin: "https://lnkd.in/p/dX-n8PkJ",
        },
      ],
    },
    {
      name: "JavaScript Cheat Sheet",
      tags: "closures · this · event loop · prototypes · async / await",
      badge: "JS",
      color: "#D4F04C",
      total: 14,
      posts: [
        {
          n: 1,
          title: "var vs let vs const",
          thumb: "/posts/javascript/01-var-let-const.webp",
          text: "/posts/javascript/01-var-let-const.txt",
          pdf: "/pdf/javascript/01-var-let-const.pdf",
          linkedin: "",
        },
      ],
    },
  ],
  next: { name: "TypeScript", sheets: 14 },
};
