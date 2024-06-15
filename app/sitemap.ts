import { MetadataRoute } from "next";



import { getAlternatives, getHelpArticles, getPages, getPosts } from "@/lib/content";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const solutions = await getPages();
  const alternatives = await getAlternatives();
  const helpArticles = await getHelpArticles();
  const blogLinks = posts.map((post) => ({
    url: `https://deck3.xyz/blog/${post?.data.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
  const solutionLinks = solutions.map((solution) => ({
    url: `https://deck3.xyz/solutions/${solution?.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
  const alternativeLinks = alternatives.map((alternative) => ({
    url: `https://deck3.xyz/alternatives/${alternative?.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
  const helpArticleLinks = helpArticles.map((article) => ({
    url: `https://deck3.xyz/help/article/${article?.data.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [
    {
      url: "https://deck3.xyz",
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: "https://deck3.xyz/pricing",
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: "https://deck3.xyz/privacy",
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: "https://deck3.xyz/terms",
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: "https://deck3.xyz/open-source-investors",
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: "https://deck3.xyz/docsend-alternatives",
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: "https://deck3.xyz/oss-friends",
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: "https://vc.deck3.xyz",
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: "https://deck3.xyz/investors",
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: "https://deck3.xyz/data-room",
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: "https://deck3.xyz/share-notion-page",
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: "https://deck3.xyz/ai",
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: "https://deck3.xyz/ai-pitch-deck-generator",
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: "https://deck3.xyz/blog",
      lastModified: new Date().toISOString().split("T")[0],
    },
    ...blogLinks,
    ...solutionLinks,
    ...alternativeLinks,
    ...helpArticleLinks,
  ];
}