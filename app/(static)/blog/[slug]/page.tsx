import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import BlurImage from "@/components/blur-image";
import { ContentBody } from "@/components/mdx/post-body";
import TableOfContents from "@/components/mdx/table-of-contents";

import { getPost, getPostsRemote as getPosts } from "@/lib/content/blog";
import { constructMetadata, formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post?.data.slug }));
}

export const generateMetadata = async ({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> => {
  const post = (await getPosts()).find(
    (post) => post?.data.slug === params.slug,
  );
  const { title, summary: description, image } = post?.data || {};

  return constructMetadata({
    title: `${title} - Deck3`,
    description,
    image,
  });
};

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  if (!post) return notFound();

  return (
    <>
      <div className="w-full px-4 mx-auto mb-10 max-w-7xl md:px-8">
        <div className="flex flex-col max-w-screen-sm pt-16 space-y-4">
          <div className="flex items-center space-x-4">
            <time dateTime={post.data.publishedAt} className="text-sm">
              {formatDate(post.data.publishedAt)}
            </time>
          </div>
          <h1 className="text-4xl text-balance md:text-6xl">
            {post.data.title}
          </h1>
          <p className="text-xl text-gray-600">{post.data.summary}</p>

          <div className="flex flex-col items-center self-start space-x-4">
            <Link
              href={`https://twitter.com/mfts0`}
              className="flex items-center space-x-3 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BlurImage
                src={`https://pbs.twimg.com/profile_images/1176854646343852032/iYnUXJ-m_400x400.jpg`}
                alt={`Marc Seitz`}
                width={40}
                height={40}
                className="transition-all rounded-full group-hover:brightness-90"
              />
              <div className="flex flex-col">
                <p className="font-semibold text-gray-700">Marc Seitz</p>
                <p className="text-sm text-gray-500">@mfts0</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="grid w-full grid-cols-4 gap-10 px-4 py-10 mx-auto max-w-7xl md:px-8">
          <div className="relative flex flex-col col-span-4 mb-10 space-y-8 bg-white sm:border-r sm:border-orange-500 md:col-span-3">
            <div
              data-mdx-container
              className="prose prose-headings:font-medium prose-h2:mb-2 prose-h2:mt-10 first:prose-h2:mt-0 sm:max-w-screen-md sm:pr-2 md:pr-0"
            >
              <ContentBody>{post.body}</ContentBody>
            </div>
          </div>

          <div className="sticky flex-col self-start hidden col-span-1 divide-y divide-gray-200 top-14 sm:flex">
            <div className="flex flex-col space-y-4">
              <TableOfContents items={post.toc} />
            </div>
          </div>

          {/* <div className="sticky flex-col self-start hidden col-span-1 divide-y divide-gray-200 top-14 sm:flex">
            <div className="flex flex-col space-y-4">
              <p className="text-sm text-gray-500">Written by</p>
              <Link
                href={`https://twitter.com/mfts0`}
                className="flex items-center space-x-3 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BlurImage
                  src={`https://pbs.twimg.com/profile_images/1176854646343852032/iYnUXJ-m_400x400.jpg`}
                  alt={`Marc Seitz`}
                  width={40}
                  height={40}
                  className="transition-all rounded-full group-hover:brightness-90"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-700">Marc Seitz</p>
                  <p className="text-sm text-gray-500">@mfts0</p>
                </div>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
