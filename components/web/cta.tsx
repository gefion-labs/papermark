import Link from "next/link";

export default function CTA() {
  return (
    <div className="bg-gray-100">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get actionable insights from your shared documents
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-600">
            It takes only two clicks to convert your document into sharable link
            and track the progress on each page
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Link
              href="/login"
              className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Upload document
            </Link>
            <Link
              href="https://github.com/gefion-labs/papermark"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Self-host <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
