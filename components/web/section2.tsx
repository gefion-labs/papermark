import Link from "next/link";

import GitHubIcon from "@/components/shared/icons/github";

export default function Section2() {
  return (
    <div className="bg-white">
      <div className="px-6 py-12 sm:px-6 sm:py-12 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Build strong relationships with investors
            <br />
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-600">
            By sending presentations via Deck3
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Link
              href="/login"
              className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start now
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-black hover:text-gray-800 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              href="https://github.com/gefion-labs/papermark"
            >
              <GitHubIcon className="w-5 h-5 mr-2" /> Star on GitHub
            </Link>
          </div>
          {/* Image added below */}
          <div className="w-full max-w-md mx-auto mt-10">
            <img
              src="https://deck3.xyz/_static/image2.png"
              alt="Description of Image"
              className="object-cover w-full h-auto mx-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
