import Image from "next/image";
import Link from "next/link";

import PapermarkPImg from "@/public/_static/papermark-p.svg";
import PlaceholderImg from "@/public/_static/placeholder.png";
import { GlobeIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const stages = [
  { id: "7", label: "All" },
  { id: "5", label: "Pre-Seed" },
  { id: "1", label: "Seed" },
  { id: "2", label: "Series A" },
  { id: "3", label: "Series B" },
  { id: "4", label: "Series C" },
];

export const FallbackInvestors = async ({
  allInvestors,
}: {
  allInvestors: any[];
}) => {
  const category = "7";

  const pageSize = 10; // Showing 10 investors per page
  const totalPages = Math.ceil(allInvestors.length / pageSize);

  const currentPage = 1;

  const indexOfLastInvestor = 10;
  const indexOfFirstInvestor = indexOfLastInvestor - 10;
  const paginatedInvestors = allInvestors.slice(
    indexOfFirstInvestor,
    indexOfLastInvestor,
  );

  return (
    <>
      <div className="flex-col justify-between mt-4 sm:flex md:flex-row">
        <span className="inline-flex px-2 mt-5 rounded-md shadow-sm isolate w-fit lg:px-2">
          {stages.map((stage) => (
            <Link
              href={
                stage.id !== "7"
                  ? `/investors?category=${stage.id}`
                  : "/investors"
              }
              key={stage.id}
              className={cn(
                category === stage.id || (!category && stage.id === "7")
                  ? "bg-gray-200"
                  : "bg-white hover:bg-gray-50",
                "relative -ml-px inline-flex items-center border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 first-of-type:-ml-0 first-of-type:rounded-l-md last-of-type:rounded-r-md focus:z-10 focus:outline-none focus:ring-gray-500",
              )}
            >
              {stage.label}
            </Link>
          ))}
        </span>
      </div>
      <div className="flex flex-col mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full px-6 py-2 align-middle lg:px-8">
            <div className="py-2">
              <span className="font-bold">{allInvestors.length}</span> investors
            </div>
            <div className="overflow-hidden rounded-lg md:shadow md:ring-1 md:ring-black md:ring-opacity-5">
              <table className="min-w-full overflow-hidden bg-gray-100 divide-gray-300 rounded-lg md:divide-y md:rounded-none md:bg-transparent">
                <thead className="hidden bg-gray-50 md:table-header-group">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Stage
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Sector
                    </th>
                  </tr>
                </thead>
                <tbody className="grid grid-cols-1 gap-3 divide-gray-200 sm:grid-cols-2 md:table-row-group md:divide-y md:bg-white">
                  {paginatedInvestors.map((investor: any) => (
                    <tr
                      key={investor.id}
                      className="grid grid-cols-3 gap-1 px-2 py-3 bg-white border border-gray-200 rounded-lg shadow group md:table-row md:rounded-none md:border-x-0 md:bg-transparent md:p-0 md:shadow-none"
                    >
                      <td className="col-span-3 pl-3 text-sm whitespace-nowrap sm:pl-6 md:h-24 md:py-2 md:pl-6">
                        <div className="flex items-center space-x-2">
                          <div className="flex-shrink-0 w-10 h-10">
                            {investor.imageUrl ? (
                              <img
                                className="object-contain w-10 h-10 rounded-full"
                                width={40}
                                height={40}
                                src={
                                  investor.imageUrl !== ""
                                    ? investor.imageUrl
                                    : PlaceholderImg
                                }
                                alt={investor.name}
                              />
                            ) : (
                              <Image
                                className="object-contain w-10 h-10 rounded-full"
                                width={40}
                                height={40}
                                src={PlaceholderImg}
                                alt={investor.name}
                              />
                            )}
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="font-medium text-gray-900">
                              {investor.name}
                            </div>
                            <div className="flex items-center space-x-2">
                              {investor.website && (
                                <a
                                  className="text-black"
                                  href={`${investor.website}?ref=deck3.xyz`}
                                  target="_blank"
                                  rel="noopener"
                                >
                                  <span className="sr-only">Website</span>
                                  <GlobeIcon className="w-4 h-4" />
                                </a>
                              )}
                              <Link
                                href={`https://deck3.xyz?ref=investors-list`}
                              >
                                <Image
                                  src={PapermarkPImg}
                                  width={18}
                                  height={18}
                                  alt="Deck3"
                                  className="block rounded-full ring-1 ring-gray-300"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="col-span-1 row-start-2 px-3 text-sm font-bold text-gray-500 whitespace-nowrap md:px-2 md:py-3 md:font-normal">
                        {investor.round ? investor.round : "Unknown"}
                      </td>
                      <td className="col-span-3 px-3 text-sm text-gray-500 whitespace-nowrap md:mt-0 md:px-2 md:py-3">
                        {investor.location ? investor.location : "Unknown"}
                      </td>
                      <td className="w-40 col-span-3 px-3 text-sm text-gray-500 truncate md:max-w-xs md:px-2 md:py-3">
                        {investor.sector ? investor.sector : "Unknown"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex items-center justify-between w-full px-4 my-4">
                <button
                  disabled={currentPage === 1}
                  className="px-2 py-2 text-xs border rounded"
                >
                  Previous
                </button>
                <div className="px-2 py-2 text-xs rounded">
                  Page {currentPage} of {totalPages}
                </div>
                <button
                  disabled={currentPage === totalPages}
                  className="px-2 py-2 text-xs border rounded"
                >
                  Next
                </button>
              </div>
              {allInvestors.length === 0 && (
                <div className="my-10 text-center">No results found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
