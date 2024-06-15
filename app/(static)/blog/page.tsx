import Link from "next/link";

import { getPostsRemote as getPosts } from "@/lib/content/blog";

export default async function BlogIndex() {
  const posts = await getPosts();
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-6xl text-gray-900 text-balance sm:text-6xl">
            Deck3 Blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-500 text-balance">
            All insights on secure document sharing in 2024
          </p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 pt-10 mx-auto mt-10 border-t border-gray-200 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post?.data.slug}
              className="flex flex-col items-start justify-between max-w-xl"
            >
              <div className="flex items-center text-xs gap-x-4">
                <h1 className="text-2xl text-balance md:text-2xl">
                  {post?.data.title}
                </h1>
              </div>
              <p className="mt-1 text-xs text-gray-500 text-balance md:text-xs">
                {post?.data.summary}
              </p>

              <div className="relative group">
                <h3 className="mt-4 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link
                    href={`/blog/${post?.data.slug}`}
                    className="px-4 py-2 text-xs font-light text-gray-500 bg-transparent border border-gray-500 text-balance rounded-3xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </Link>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
