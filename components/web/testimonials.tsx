import Image from "next/image";

import ProductHuntIcon from "@/components/shared/icons/producthunt";
import TwitterIcon from "@/components/shared/icons/twitter";

const testimonials: any[] = [
  // More testimonials...
];

export default function Testimonials() {
  return (
    <div className="py-24 bg-white">
      <div className="w-full px-4 mx-auto max-w-7xl md:px-8">
        <h2 className="text-4xl text-balance">
          Loved by over 5000 customers and users.
          <br />
          <span className="text-gray-500">
            Here&apos;s what they have to say about us.
          </span>
        </h2>
        <div className="max-w-2xl mx-auto mt-8 lg:max-w-none">
          <div className="py-8 space-y-6 sm:block sm:columns-2 sm:gap-6 lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className="relative flex w-full"
              >
                <div className="relative p-6 text-base leading-6 bg-white border border-gray-500 rounded-lg shadow-lg">
                  <div className="flex flex-col justify-between">
                    <div className="flex items-center justify-between gap-x-4">
                      <div className="flex items-center gap-x-4">
                        <Image
                          className="w-10 h-10 rounded-full bg-gray-50"
                          src={testimonial.author.imageUrl}
                          width={40}
                          height={40}
                          alt={testimonial.author.name}
                        />
                        <div>
                          <div className="font-semibold text-gray-900">
                            {testimonial.author.name}
                          </div>
                          <a
                            className="text-gray-600 hover:text-gray-800"
                            href={testimonial.author.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >{`@${testimonial.author.handle}`}</a>
                        </div>
                      </div>
                      <a
                        href={testimonial.author.link} // Using the link from the testimonial
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        {testimonial.producthunt ? (
                          <ProductHuntIcon className="w-6 h-6 text-gray-800" />
                        ) : (
                          <TwitterIcon className="w-5 h-5 text-gray-800" />
                        )}
                      </a>
                    </div>

                    <blockquote className="my-4 text-gray-900">
                      <p>{testimonial.body}</p>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
