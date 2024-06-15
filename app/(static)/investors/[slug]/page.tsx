import Head from "next/head";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Disclosure } from "@headlessui/react";
import { CheckIcon } from "lucide-react";
import { XIcon } from "lucide-react";
import {
  RefreshCw as ArrowPathIcon,
  GitPullRequestArrow as CloudArrowUpIcon,
  Settings as Cog6ToothIcon,
  Fingerprint as FingerPrintIcon,
  Lock as LockClosedIcon,
  Minus as MinusSmallIcon,
  Plus as PlusSmallIcon,
  HardDrive as ServerIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Footer from "@/components/web/footer";
import { LogoCloud } from "@/components/web/landing-page/logo-cloud";
import Navbar from "@/components/web/navbar";

import { getInvestor } from "@/lib/content/investor";
import { cn } from "@/lib/utils";
import { classNames } from "@/lib/utils";

export default async function InvestorPage({
  params,
}: {
  params: { slug: string };
}) {
  const investor = await getInvestor(params.slug);
  if (!investor) return notFound();

  return (
    <>
      <div>
        <Head>
          <title>{investor.name} details and fundraising information </title>
          <meta
            name="description"
            content="Looking to raise capital, check profile of {investor.name} investor "
          />
          <meta
            property="og:title"
            content="{investor.name} investor page and information"
          />
          <meta
            property="og:description"
            content="Looking to raise capital, check profile of one of the venture capital funds {investor.name}"
          />
          <meta
            property="og:image"
            content="https://deck3.xyz/_static/meta-image.png"
          />
          <meta property="og:url" content="https://deck3.xyz" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        {/* Hero section */}
        <div className="flex flex-col justify-center flex-1 text-black bg-white">
          <div className="w-full max-w-5xl px-4 mx-auto text-center md:px-8">
            <div className="pt-32">
              {/* <div className="pb-4 ">
                <img
                  src={investor.imageUrl}
                  alt="App screenshot"
                  className="mx-auto"
                  width={100}
                  height={50}
                />
              </div> */}
              <div className="relative inline-block my-4 rounded-full">
                <span className="px-3 py-1 text-sm leading-6 text-green-600 bg-green-100 border border-green-200 rounded-full text-balance">
                  Active
                </span>
              </div>

              <h1 className="text-6xl text-balance">{investor.name}</h1>
              <p className="max-w-3xl mx-auto mt-8 text-xl text-balance md:text-2xl">
                Venture capital and investor firm
              </p>
              <div className="pt-8 space-x-2">
                <Link href={investor.website || "/investors"}>
                  <Button className="justify-center text-white bg-gray-800 rounded-3xl hover:bg-gray-500">
                    {investor.name} website link
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Comparison section */}
          <div className="w-full max-w-5xl px-4 mx-auto md:px-8"></div>
          <div className="py-16 bg-white">
            <div className="max-w-5xl px-4 mx-auto md:px-8">
              <div className="grid grid-cols-1 overflow-hidden border border-black isolate rounded-xl md:grid-cols-2">
                {/* First hardcoded tier */}
                <div className="flex flex-col justify-between border-r-0 border-black md:odd:border-r xl:last:!border-r-0 xl:even:border-r">
                  <div>
                    <div className="p-6 bg-gray-100 border-b border-black">
                      <h3 className="text-xl leading-8 text-gray-800 text-balance">
                        Rounds {investor.name} invests
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="mt-4 text-sm leading-6 text-gray-500 text-balance">
                        Investor stage information
                      </p>
                      <p className="flex items-baseline mt-6 gap-x-1">
                        <span className="text-4xl font-medium text-gray-800 text-balance">
                          {investor.round}
                        </span>
                      </p>
                    </div>
                  </div>
                  <a href={investor.website || "/investors"} className="p-6">
                    <Button
                      className="rounded-3xl hover:bg-gray-100"
                      style={{
                        backgroundColor: "#f3f4f6",
                        borderColor: "#e5e7eb",
                        color: "#1f2937",
                        borderWidth: "1px",
                      }}
                    >
                      Get all details
                    </Button>
                  </a>
                </div>

                {/* Second hardcoded tier */}
                <div className="flex flex-col justify-between border-black">
                  <div>
                    <div className="p-6 bg-gray-100 border-b border-black">
                      <h3 className="text-xl leading-8 text-gray-800 text-balance">
                        Location {investor.name} invests
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="mt-4 text-sm leading-6 text-gray-500 text-balance">
                        Investor primarily location but not limited
                      </p>
                      <p className="flex items-baseline mt-6 gap-x-1">
                        <span className="text-4xl font-medium text-gray-800 text-balance">
                          {investor.location}
                        </span>
                      </p>
                    </div>
                  </div>
                  <a href={investor.website || "/investors"} className="p-6">
                    <Button
                      className="rounded-3xl hover:bg-gray-100"
                      style={{
                        backgroundColor: "#f3f4f6",
                        borderColor: "#e5e7eb",
                        color: "#1f2937",
                        borderWidth: "1px",
                      }}
                    >
                      Learn about all locations
                    </Button>
                  </a>
                </div>
              </div>

              <div className="my-8 overflow-hidden border border-black isolate rounded-xl">
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="p-6 bg-gray-100 border-b border-black">
                      <h3 className="text-xl leading-8 text-gray-800 text-balance">
                        Sector {investor.name} invests
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="mt-4 text-sm leading-6 text-gray-500 text-balance">
                        Sectors primarily invested in
                      </p>
                      <p className="flex items-baseline mt-6 gap-x-1">
                        <span className="text-4xl font-medium text-gray-800 text-balance">
                          {investor.sector}
                        </span>
                      </p>
                    </div>
                  </div>
                  <a href={investor.website || "/investors"} className="p-6">
                    <Button
                      className="rounded-3xl hover:bg-gray-100"
                      style={{
                        backgroundColor: "#f3f4f6",
                        borderColor: "#e5e7eb",
                        color: "#1f2937",
                        borderWidth: "1px",
                      }}
                    >
                      All sectors {investor.name}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-5xl px-4 mx-auto md:px-8">
            <div className="mx-auto rounded-3xl bg-[#fb7a00] px-6 py-12">
              <div className="flex flex-col justify-between space-y-10 item-center lg:flex-row lg:space-y-0">
                <h2 className="text-3xl text-nowrap">
                  Looking for more investors? <br />
                  <p className="my-2 text-xl text-gray-800">
                    Access our investor database with 10k+ venture capital firms
                  </p>
                </h2>

                <div className="flex items-center space-x-2">
                  <Link
                    href="/investors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="text-base text-gray-200 bg-black rounded-3xl hover:bg-gray-900">
                      Full investor database
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* /* Feature Section*/}
          <div
            className="w-full max-w-5xl px-4 py-20 mx-auto md:px-8"
            id="features"
          >
            <h2 className="max-w-3xl pt-12 pb-20 text-4xl text-balance">
              Powered by Deck3{" "}
              <span className="text-gray-500">
                Open Source DocSend alternative to share your pitchdeck and
                create a Data Room
              </span>
            </h2>

            {/* Testimonial section */}
            <div
              className="w-full max-w-5xl px-4 py-20 mx-auto bg-gray-100 rounded-3xl md:px-8"
              id="features"
            >
              <div className="flex flex-col items-center px-6 mx-auto gap-x-8 gap-y-10 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div className="flex items-center justify-center w-full max-w-2xl my-6 -mt-8 xl:-mb-8 xl:w-96 xl:flex-none">
                  <div className="relative w-64 h-64">
                    {" "}
                    <img
                      className="absolute inset-0 object-cover bg-gray-800 shadow-2xl rounded-2xl"
                      src="https://deck3.xyz/_static/testimonials/jaski.jpeg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-12 xl:py-16">
                  <figure className="relative pt-6 isolate sm:pt-12">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute top-0 left-0 h-32 -z-10 stroke-white/20"
                    >
                      <path
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use
                        href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        x={86}
                      />
                    </svg>
                    <blockquote className="text-xl font-medium leading-8 text-black text-gray-800 text-balance sm:text-2xl sm:leading-9">
                      <p>
                        Deck3 solved a big pain point for me. DocSend monopoly
                        will end soon!
                      </p>
                    </blockquote>
                    <figcaption className="mt-8 text-balance">
                      <div className="font-semibold text-black">Jaski</div>
                      <div className="my-6 mt-1 text-gray-500">
                        Founder in web3 space
                      </div>
                    </figcaption>
                  </figure>
                  <Link href="/login" target="_blank" rel="noopener noreferrer">
                    <Button className="rounded-3xl bg-[#fb7a00] text-base text-gray-800 hover:bg-gray-200">
                      Join Jaski now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
