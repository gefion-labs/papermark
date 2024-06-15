"use client";

import { Disclosure } from "@headlessui/react";
import { Minus as MinusSmallIcon, Plus as PlusSmallIcon } from "lucide-react";

const faqs = [
  {
    question: "What is Deck3?",
    answer:
      "Deck3 is a dynamic, open-source alternative to DocSend. It enables secure document sharing, tracking, and storage, providing users with real-time analytics. Like your Pitchdeck.",
  },
  {
    question: "How can I use Deck3?",
    answer:
      "You can subscribe to one of our plans or use it for free and host it yourself. Simply visit our GitHub page, clone the repository, follow the setup instructions and start using Deck3. You can customize it according to your specific needs as it is open-source. https://github.com/mfts/papermark",
  },
  {
    question: "Is Deck3 free?",
    answer:
      "Yes, Deck3 is completely open-source. This means you are free to use, modify, and distribute it as you see fit according to the terms of our license.",
  },
  {
    question: "Can I add my custom domain to look professional?",
    answer:
      "Yes, with Deck3 you can connect your custom domain and send your Pitchdeck or document via it. While continue tracking the analytics",
  },
  {
    question: "How I can reach more investors with Deck3?",
    answer:
      "Deck3 has recommendations for more similar investors for your specific startup build in.",
  },
  {
    question: "How I can use Deck3 as a VC?",
    answer:
      "You can use it to summarise and analyse data for different Pitchdecks",
  },
  {
    question: "Can I contribute to the Deck3 project?",
    answer:
      "Yes, contributions are welcome! Please visit our GitHub repository to learn about how you can contribute. Whether it&apos;s by improving the code, adding new features, or even reporting bugs, all contributions are appreciated. https://github.com/mfts/papermark",
  },
];

export default function Faq() {
  return (
    <div className="">
      <dl className="mt-10 space-y-6 divide-y divide-gray-800/10">
        {faqs.map((faq) => (
          <Disclosure as="div" key={faq.question} className="pt-6">
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-800">
                    <span className="font-medium leading-7 text-balance">
                      {faq.question}
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      {open ? (
                        <MinusSmallIcon
                          className="w-6 h-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusSmallIcon className="w-6 h-6" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="pr-12 mt-2">
                  <p className="leading-7 text-gray-500 text-balance">
                    {faq.answer}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  );
}
