"use client";

// Ensures this component is rendered on the client side
import { useEffect, useRef, useState } from "react";

import LoadingDots from "@/components/ui/loading-dots";

import { BudgetCounter } from "./components/BudgetCounter";
import { Community } from "./components/Community";
import { Community1 } from "./components/Community1";
import { Company } from "./components/Company";
import { Description } from "./components/Description";
import { Email } from "./components/Email";
import { Metric2 } from "./components/Metric2";
import { Mrr } from "./components/Mrr";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { Special1 } from "./components/Special1";
import { Special2 } from "./components/Special2";
import { Users } from "./components/Users";

const DeckPage = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState<string>("");
  const [media, setMedia] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [budget, setBudget] = useState<number>(100);
  const [solution, setSolution] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [problem, setProblem] = useState<string>("");
  const [users, setUsers] = useState<string>("");
  const [mrr, setMrr] = useState<string>("");
  const [metric2, setMetric2] = useState(100);
  const [community1, setCommunity1] = useState(100);
  const [community, setCommunity] = useState<string>("");
  const [special1, setSpecial1] = useState<string>("");
  const [special2, setSpecial2] = useState<string>("");

  // State to control the step of the form
  const [step, setStep] = useState(1);

  // Function to handle the Next button click
  const handleNextClick = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const handlePreviousClick = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const setItem = (key: string, value: string) => {
    iframeRef.current?.contentWindow?.postMessage(
      { type: "set", key, value },
      "https://shared.deck3.xyz",
    );
  };

  const saveData = () => {
    setLoading(true);
    setItem(
      "sharedKey",
      JSON.stringify({
        company,
        email,
        description,
        problem,
        solution,
        mrr,
        users,
        metric2,
        budget,
        community,
        community1,
        special1,
        special2,
      }),
    );

    setTimeout(() => {
      setLoading(false);

      window.location.href = "https://deck.deck3.xyz/loading";
    }, 2000);
  };

  // useEffect(() => {
  //   // Example usage
  //   const exampleData = JSON.stringify({
  //     company: "Papermark",
  //     email: "test@test.com",
  //     description:
  //       "Papermark is a platform that helps you create and share beautiful pitch decks.",
  //     problem:
  //       "Creating pitch decks is time-consuming and requires design skills.",
  //     solution:
  //       "Papermark provides a simple drag-and-drop interface to create beautiful pitch decks.",
  //     mrr: "10,000",
  //     users: "100",
  //     metric2: "10",
  //     budget: "10,000",
  //     community: "Papermark Community",
  //     community1: "Papermark Community",
  //     special1: "Special 1",
  //     special2: "Special 2",
  //   });
  //   setItem("sharedKey", exampleData);
  // }, []);

  return (
    <>
      <iframe
        ref={iframeRef}
        src="https://shared.deck3.xyz"
        style={{
          width: 0,
          height: 0,
          border: "none",
          position: "absolute",
        }}
      />
      <div>
        <section className="py-10 bg-white lg:py-36">
          {/* bg-[url('/image1.svg')] */}
          <div className="px-4 0">
            <div className="max-w-5xl mx-auto">
              <div className="w-full mx-auto">
                <div className="flex flex-col w-full md:flex-row md:space-x-20">
                  <div className="flex flex-col w-full mt-4 md:mt-0 md:w-1/2">
                    <h1 className="text-5xl text-balance md:text-7xl">
                      Pitch Deck AI Generator
                    </h1>

                    <p className="max-w-3xl mt-2 text-2xl text-balance">
                      Instantly create pitch deck and share via trackable link
                    </p>

                    <p className="max-w-3xl mt-2 text-sm text-gray-500 text-balance">
                      Inspired by the coolest
                      <button
                        className="px-2 py-1 ml-2 text-black bg-gray-100 rounded-3xl hover:bg-gray-200"
                        onClick={() =>
                          window.open(
                            "https://midday.ai/pitch",
                            "_blank",
                            "noopener,noreferrer",
                          )
                        }
                      >
                        Midday Deck
                      </button>
                    </p>

                    {/* <h2 className="mt-3 mb-4 text-lg font-normal text-pink-600">
                      Deck example link
                      <br />
                    </h2> */}

                    {/* <Accordion sections={sections} /> */}
                    {/* <div className="my-4">
                      <Link
                        href={"/"}
                        className="w-full px-4 py-2 text-xs font-medium text-pink-700 bg-pink-600 rounded-md hover:bg-purple-400 disabled:bg-purple-500 bg-opacity-20"
                      >
                        See wedding plan example
                      </Link>
                    </div> */}
                  </div>

                  <div className="flex flex-col w-full mt-4 md:mt-0 md:w-1/2">
                    <div className="p-4 bg-white rounded-lg shadow md:p-6">
                      <p className="max-w-3xl mx-1 my-2 text-sm font-normal text-balance">
                        Fill quick steps in 1 minute
                      </p>
                      {/* Fields and buttons based on the step */}
                      <div className="flex justify-between w-full">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <div
                            key={index}
                            className={`mx-1 h-2 w-1/4 overflow-hidden rounded-full ${
                              index < step ? "bg-orange-500" : "bg-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      {step === 1 && (
                        <>
                          <h3 className="mt-6 text-base font-semibold text-gray-700">
                            What is your startup name?
                          </h3>

                          <div className="w-full mx-auto my-1">
                            <div className="flex justify-between space-x-2">
                              <div className="grow">
                                <Company
                                  company={company}
                                  setCompany={setCompany}
                                />
                              </div>
                            </div>
                          </div>
                          <h3 className="py-1 mt-4 text-base font-semibold text-gray-700">
                            What is one line description?
                          </h3>
                          <div className="w-full mx-auto my-1">
                            <div className="flex justify-between space-x-2">
                              <div className="grow">
                                <Description
                                  description={description}
                                  setDescription={setDescription}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="my-4">
                            <button
                              onClick={handleNextClick}
                              className="w-full px-4 py-2 text-base text-white bg-black rounded-md hover:bg-orange-600"
                            >
                              To step 2 →
                            </button>
                          </div>
                        </>
                      )}
                      {step === 2 && (
                        <>
                          <div className="w-full mx-auto mt-6">
                            <h3 className="my-1 text-sm font-semibold text-gray-700">
                              What problem you solve?
                            </h3>

                            <div className="w-full mx-auto my-1">
                              <div className="flex justify-between space-x-2">
                                <div className="grow">
                                  <Problem
                                    problem={problem}
                                    setProblem={setProblem}
                                  />
                                </div>
                              </div>
                            </div>

                            <h3 className="py-1 mt-4 text-sm font-semibold text-gray-700">
                              How this solutions helps to solve the problem?
                            </h3>

                            <Solution
                              solution={solution}
                              setSolution={setSolution}
                            />
                          </div>

                          <div className="my-4">
                            <button
                              onClick={handleNextClick}
                              className="w-full px-4 py-2 text-base text-white bg-black rounded-md hover:bg-orange-600"
                            >
                              To step 3
                            </button>
                          </div>
                        </>
                      )}
                      {step === 3 && (
                        <>
                          <h3 className="py-1 mt-4 text-sm font-semibold text-gray-700">
                            What are your current metrics?
                          </h3>
                          <h3 className="py-1 mt-1 text-xs font-normal text-gray-500">
                            Revenue/MRR
                          </h3>
                          <div className="w-full mx-auto">
                            <div className="flex justify-between space-x-2">
                              <div className="grow">
                                <BudgetCounter
                                  budget={budget}
                                  setBudget={setBudget}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="">
                            {" "}
                            <Mrr mrr={mrr} setMrr={setMrr} />
                          </div>

                          <h3 className="py-1 mt-4 text-xs font-normal text-gray-500">
                            Users
                          </h3>
                          <div className="w-full mx-auto">
                            <div className="flex justify-between space-x-2">
                              <div className="grow">
                                <Metric2
                                  metric2={metric2}
                                  setMetric2={setMetric2}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="w-full mx-auto">
                            <div className="flex justify-between space-x-2">
                              <div className="grow">
                                <Users users={users} setUsers={setUsers} />
                              </div>
                            </div>
                          </div>
                          <div className="my-4">
                            <button
                              onClick={handleNextClick}
                              className="w-full px-4 py-2 text-base text-white bg-black rounded-md hover:bg-orange-600"
                            >
                              To step 3 →
                            </button>
                          </div>
                        </>
                      )}
                      {step === 4 && (
                        <>
                          <h3 className="py-1 mt-4 text-sm font-semibold text-gray-700">
                            Two more please
                          </h3>
                          <h3 className="py-1 mt-1 text-xs font-normal text-gray-500">
                            Community
                          </h3>

                          <div className="w-full mx-auto">
                            <div className="flex justify-between space-x-2">
                              <div className="grow">
                                <Community1
                                  community1={community1}
                                  setCommunity1={setCommunity1}
                                />
                              </div>
                            </div>
                          </div>
                          <div>
                            {" "}
                            <Community
                              community={community}
                              setCommunity={setCommunity}
                            />
                          </div>

                          <h3 className="py-1 mt-4 text-xs font-normal text-gray-500">
                            Your core metric specific to your businness
                          </h3>
                          <div className="w-full mx-auto">
                            <div className="flex justify-between space-x-2">
                              <div className="w-1/3 pr-2">
                                {/* This div takes 1/3 of the space */}
                                <Special2
                                  special2={special2}
                                  setSpecial2={setSpecial2}
                                />
                              </div>
                              <div className="w-2/3">
                                {" "}
                                {/* This div takes 2/3 of the space */}
                                <Special1
                                  special1={special1}
                                  setSpecial1={setSpecial1}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="my-4">
                            <button
                              onClick={handleNextClick}
                              className="w-full px-4 py-2 text-base text-white bg-black rounded-md hover:bg-orange-600"
                            >
                              To last step →
                            </button>
                          </div>
                        </>
                      )}
                      {step === 5 && (
                        <>
                          <h3 className="mt-6 text-base font-semibold text-gray-700">
                            What email to contact on the deck? (we not saving
                            your email)
                          </h3>

                          <div className="w-full mx-auto my-1">
                            <div className="flex justify-between space-x-2">
                              <div className="grow">
                                <Email email={email} setEmail={setEmail} />
                              </div>
                            </div>
                          </div>
                          {/* <button onClick={handlePreviousClick} className="...">
                            Previous
                          </button> */}
                          <div className="my-4">
                            <button
                              disabled={loading}
                              onClick={saveData}
                              className="w-full px-4 py-2 text-base text-white bg-black rounded-md hover:bg-orange-600"
                            >
                              {loading && <LoadingDots color="white" />}
                              {!loading && `Get my pitch deck`}
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DeckPage;
