import Head from "next/head";
import Link from "next/link";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import DataRoom from "@/components/web/dataroom-component";
import Footer from "@/components/web/footer";
import Navbar from "@/components/web/navbar";
import Testimonials from "@/components/web/testimonials2";

const features = [
  "send unlimited documents",
  "email capture",
  "analytics on each page",
  "custom domain",
  "team access",
  "large files upload",
];

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [optimizedPost, setOptimizedPost] = useState<string>("");
  const [usecase, setUsecase] = useState<string>("");
  const [plan, setPlan] = useState<string>("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const shouldRenderSteps = () => {
    return selectedFeatures.length > 0;
  };

  return (
    <>
      <Head>
        <title>Virtual Data Room | Powered by Deck3</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="description"
          content="Secure and manage your business documents with Deck3 Virtual Data Room. Designed for optimal security and collaboration, our solution adapts to your unique needs."
        />

        <meta
          property="og:description"
          content="Deck3 Virtual Data Room offers a secure platform for your business’s document storage and collaboration needs. Enhance your operational efficiency with tailored features."
        />
        <meta
          property="og:title"
          content="Virtual Data Room Powered by Deck3 | Tailored for Your Business"
        />

        <meta property="og:image" content="https://deck3.xyz/cover.png" />
      </Head>

      <div className="flex flex-col flex-1 text-black bg-white">
        <Navbar />
        <main className="flex flex-col items-center w-full">
          <section className="w-full pt-24 bg-white lg:pt-24">
            <div className="w-full px-4 lg:px-2">
              <div className="w-full px-4 mx-auto max-w-7xl md:px-8">
                <div className="flex flex-col items-center w-full">
                  <div className="pb-1">
                    {/* <img
                      src="https://media.licdn.com/dms/image/C560BAQF0P4VJimYMZw/company-logo_200_200/0/1630615035618?e=1720656000&v=beta&t=gWnITXssNMEKBqbdPrGev6pbQf9iLywYEr404OFtKV0"
                      alt="App screenshot"
                      className="mx-auto"
                      width={100}
                      height={50}
                    /> */}
                  </div>
                  <div className="w-full prose text-center prose-headings:font-medium prose-h2:mb-2 prose-h2:mt-10 first:prose-h2:mt-0 sm:max-w-screen-md sm:pr-2 md:pr-0">
                    {/* <span className="inline-block px-2 py-1 text-xs text-sm text-gray-500 lg:text-base bg-gray-50 rounded-3xl text-balance">
                      Powered by Papermark
                    </span> */}
                    <div className="my-6 text-black text-balance lg:text-7xl">
                      <h1 className="mb-1 text-5xl lg:text-7xl">
                        Virtual Data Room
                      </h1>
                    </div>

                    <p className="my-4 text-gray-500 text-m text-balance sm:text-xl">
                      Learn more about Deck3 Data Room and all available
                      features on 4 core plans including custom domains,
                      branding and self-hosting
                    </p>
                  </div>
                  <div className="pt-8 space-x-2">
                    <Link href="/login">
                      <Button className="text-base text-white bg-black rounded-3xl hover:bg-black/90">
                        Create Data Room
                      </Button>
                    </Link>
                    <Link
                      href="https://cal.com/marcseitz/papermark"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="text-base bg-transparent border-black rounded-3xl"
                      >
                        Book a demo
                      </Button>
                    </Link>
                  </div>
                </div>
                {/* <DataRoomTable /> */}
              </div>
            </div>

            <div className="py-16 bg-white">
              <div className="px-4 mx-auto max-w-7xl md:px-8">
                <DataRoom />
              </div>

              <div className="w-full px-4 mx-auto max-w-7xl md:px-8">
                <div className="mx-auto my-4 rounded-xl bg-[#fb7a00] px-6 py-12">
                  <div className="flex flex-col justify-between space-y-10 item-center lg:flex-row lg:space-y-0">
                    <h2 className="text-3xl text-nowrap">
                      Create secure data room on Papermark
                    </h2>
                    <div className="flex items-center space-x-2">
                      <Link
                        href="/login"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          className="text-base bg-transparent border-black rounded-3xl hover:bg-gray-200 hover:text-black"
                        >
                          Create Data Room
                        </Button>
                      </Link>
                      <Link
                        href="https://cal.com/marcseitz/papermark"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="text-base text-gray-200 bg-black rounded-3xl hover:bg-gray-900">
                          Book a demo
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="py-24 overflow-hidden bg-white sm:py-24">
                  <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                      <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
                        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-lg">
                          <h2 className="mt-2 text-3xl text-gray-900 text-balance sm:text-4xl">
                            Track activity in your data room
                          </h2>
                          <p className="mt-6 text-lg leading-8 text-gray-600 text-balance">
                            Papermark let you share your data room from a link,
                            but track activity on each document insight the Data
                            Room. Including time and views per each page.
                          </p>
                        </div>
                        <div className="pt-8 space-x-2">
                          <Link href="/login">
                            <Button className="justify-center text-white bg-gray-900 text-balance rounded-3xl hover:bg-gray-800">
                              Get insights
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <div className="sm:px-6 lg:px-0">
                        <div
                          className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-orange-200 opacity-20 ring-1 ring-inset ring-white"
                          aria-hidden="true"
                        />
                        <div className="max-w-2xl mx-auto sm:mx-0 sm:max-w-none">
                          <img
                            src="https://assets.papermark.io/upload/file_Y1UuAt51v17QtBKTuP9Rj5-Screenshot-2024-05-18-at-12.56.35-PM.png"
                            alt="Product screenshot"
                            width={2432}
                            height={1442}
                            className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                          />

                          <div
                            className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-24 overflow-hidden bg-white sm:py-24">
                  <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                      <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
                        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-lg">
                          <h2 className="mt-2 text-3xl text-gray-900 text-balance sm:text-4xl">
                            Share branded data room via link
                          </h2>
                          <p className="mt-6 text-lg leading-8 text-gray-600 text-balance">
                            With Papermark you can have unlimited branded data
                            rooms for your business. Customize the design of
                            each data room and create white-labelling.
                          </p>
                        </div>
                        <div className="pt-8 space-x-2">
                          <Link href="/login">
                            <Button className="justify-center text-white bg-gray-900 text-balance rounded-3xl hover:bg-gray-800">
                              Create branded data room
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <div className="sm:px-6 lg:px-0">
                        <div
                          className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-orange-200 opacity-20 ring-1 ring-inset ring-white"
                          aria-hidden="true"
                        />
                        <div className="max-w-2xl mx-auto sm:mx-0 sm:max-w-none">
                          <img
                            src="https://assets.papermark.io/upload/file_7bRAcyf4H3FmSQ74Rh6rMN-Screenshot-2024-05-18-at-1.02.03-PM.png"
                            alt="Product screenshot"
                            width={2432}
                            height={1442}
                            className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                          />

                          <div
                            className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="py-24 overflow-hidden bg-white sm:py-24">
                  <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                      <div
                        className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-orange-200 opacity-20 ring-1 ring-inset ring-white"
                        aria-hidden="true"
                      />
                      <div className="max-w-2xl mx-auto sm:mx-0 sm:max-w-none">
                        <img
                          src="https://assets.papermark.io/upload/file_7bRAcyf4H3FmSQ74Rh6rMN-Screenshot-2024-05-18-at-1.02.03-PM.png"
                          alt="Product screenshot"
                          width={2432}
                          height={1442}
                          className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                        />

                        <div
                          className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div className="sm:px-6 lg:px-0">
                      <div
                        className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-orange-200 opacity-20 ring-1 ring-inset ring-white"
                        aria-hidden="true"
                      />
                      <div className="max-w-2xl mx-auto sm:mx-0 sm:max-w-none">
                        <img
                          src="https://assets.papermark.io/upload/file_Y1UuAt51v17QtBKTuP9Rj5-Screenshot-2024-05-18-at-12.56.35-PM.png"
                          alt="Product screenshot"
                          width={2432}
                          height={1442}
                          className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                        />

                        <div
                          className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
                      <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-lg">
                        <h2 className="mt-2 text-3xl text-gray-900 text-balance sm:text-4xl">
                          Share branded data room
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 text-balance">
                          With Papermark you can have unlimited branded data
                          rooms for your business. Customize the design of each
                          data room and create white-labelling.
                        </p>
                      </div>
                      <div className="pt-8 space-x-2">
                        <Link href="/login">
                          <Button className="justify-center text-white bg-gray-900 text-balance rounded-3xl hover:bg-gray-800">
                            Create branded data room
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div className="w-full mx-auto max-w-7xl">
                  <h2 className="py-12 text-4xl text-balance">
                    Secure data room with a modern UI
                    <br />
                    <span className="text-gray-500">See the demo below</span>
                  </h2>
                  <video
                    width="100%"
                    id="video1"
                    style={{ borderRadius: "6px" }}
                    aria-hidden="true"
                    playsInline
                    autoPlay
                    muted
                    loop
                    controls
                  >
                    <source
                      src="https://assets.papermark.io/upload/file_A4qNV68jr3MAUayMNi3WmY-Data-Room-demo-2.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>

            <Testimonials />
            {/* <CTA /> */}
          </section>
        </main>
        <div className="bg-[#fb7a00]">
          <div className="w-full px-4 py-32 mx-auto max-w-7xl md:px-8">
            <h2 className="text-4xl text-balance">
              Create secure and modern data room
            </h2>
            <div className="pt-8 space-x-2">
              <Link
                href="https://cal.com/marcseitz/papermark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="text-base bg-transparent border-black rounded-3xl"
                >
                  Book a demo
                </Button>
              </Link>
              <Link href="/login">
                <Button className="text-base rounded-3xl">Start now</Button>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
