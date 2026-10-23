import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// No lastModified on purpose: the site shows no dates.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://cheatsheets.melkonsimonyan.com/", changeFrequency: "daily", priority: 1 }];
}
