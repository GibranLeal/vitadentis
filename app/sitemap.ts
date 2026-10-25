import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { services } from "@/lib/services";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/nosotros",
    "/servicios",
    "/blog",
    "/contacto",
    "/agendar",
    "/valoracion",
    "/aviso-de-privacidad",
    "/terminos",
  ];

  return [
    ...staticPaths.map((path) => ({
      url: `${siteUrl}${path || "/"}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: `${siteUrl}/servicios/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
