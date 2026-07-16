import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    // TODO: replace with real production domain
    sitemap: "https://example.com/sitemap.xml",
  };
}
