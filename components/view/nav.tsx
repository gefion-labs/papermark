import Image from "next/image";
import Link from "next/link";

import React, { MutableRefObject } from "react";

import { Brand, DataroomBrand } from "@prisma/client";
import {
  ArrowUpRight,
  Download,
  Slash,
  ZoomInIcon,
  ZoomOutIcon,
} from "lucide-react";
import { ReactZoomPanPinchContentRef } from "react-zoom-pan-pinch";
import { toast } from "sonner";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { determineTextColor } from "@/lib/utils/determine-text-color";

import PapermarkSparkle from "../shared/icons/papermark-sparkle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Button } from "../ui/button";
import { TDocumentData } from "./dataroom/dataroom-view";

export default function Nav({
  pageNumber,
  numPages,
  allowDownload,
  assistantEnabled,
  brand,
  viewId,
  linkId,
  type,
  embeddedLinks,
  documentName,
  isDataroom,
  setDocumentData,
  documentRefs,
}: {
  pageNumber?: number;
  numPages?: number;
  allowDownload?: boolean;
  assistantEnabled?: boolean;
  brand?: Partial<Brand> | Partial<DataroomBrand> | null;
  embeddedLinks?: string[];
  viewId?: string;
  linkId?: string;
  type?: "pdf" | "notion" | "sheet";
  documentName?: string;
  isDataroom?: boolean;
  setDocumentData?: React.Dispatch<React.SetStateAction<TDocumentData | null>>;
  documentRefs?: MutableRefObject<(ReactZoomPanPinchContentRef | null)[]>;
}) {
  const downloadFile = async () => {
    if (!allowDownload || type === "notion") return;
    try {
      const response = await fetch(`/api/links/download`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ linkId, viewId }),
      });

      if (!response.ok) {
        toast.error("Error downloading file");
        return;
      }

      const { downloadUrl } = await response.json();
      window.open(downloadUrl, "_blank");
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <nav
      className="bg-black"
      style={{
        backgroundColor: brand && brand.brandColor ? brand.brandColor : "black",
      }}
    >
      <div className="px-2 mx-auto sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-start flex-1">
            <div className="relative flex items-center flex-shrink-0 h-16 w-36">
              {brand && brand.logo ? (
                <Image
                  className="object-contain"
                  src={brand.logo}
                  alt="Logo"
                  fill
                  quality={100}
                  priority
                />
              ) : (
                <Link
                  href={`https://deck3.xyz?utm_campaign=navbar&utm_medium=navbar&utm_source=deck3-${linkId}`}
                  target="_blank"
                  className="text-2xl font-bold tracking-tighter text-white"
                >
                  Papermark
                </Link>
              )}
            </div>
            {isDataroom && setDocumentData ? (
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      className="underline cursor-pointer underline-offset-4 hover:font-medium"
                      onClick={() => setDocumentData(null)}
                      style={{
                        color:
                          brand && brand.brandColor
                            ? determineTextColor(brand.brandColor)
                            : "white",
                      }}
                    >
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <Slash />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage
                      className="font-medium"
                      style={{
                        color:
                          brand && brand.brandColor
                            ? determineTextColor(brand.brandColor)
                            : "white",
                      }}
                    >
                      {documentName ?? "Document"}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            ) : null}
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 space-x-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {embeddedLinks && embeddedLinks.length > 0 ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button className="text-sm font-medium text-white bg-gray-900 hover:bg-gray-900/80">
                    Links on Page
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="space-y-2" align="end">
                  <DropdownMenuLabel>Links on current page</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {embeddedLinks.map((link, index) => (
                    <Link
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index}
                    >
                      <DropdownMenuItem className="h-10 group">
                        <span className="w-[200px] truncate group-focus:overflow-x-auto group-focus:text-clip">
                          {link}
                        </span>
                        <DropdownMenuShortcut className="pl-2 opacity-0 group-hover:opacity-60 group-focus:opacity-60">
                          <ArrowUpRight />
                        </DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : null}
            {assistantEnabled ? (
              <Link href={`/view/${linkId}/chat`}>
                <Button
                  className="m-1 text-white bg-gray-900 hover:bg-gray-900/80"
                  variant={"special"}
                  size={"icon"}
                  style={{
                    backgroundSize: "200% auto",
                  }}
                  title="Open AI Document Assistant"
                >
                  <PapermarkSparkle className="w-5 h-5" />
                </Button>
              </Link>
            ) : null}
            {allowDownload ? (
              <Button
                onClick={downloadFile}
                className="m-1 text-white bg-gray-900 hover:bg-gray-900/80"
                size="icon"
                title="Download document"
              >
                <Download className="w-5 h-5" />
              </Button>
            ) : null}
            {documentRefs ? (
              <div className="flex gap-1">
                <Button
                  onClick={() =>
                    documentRefs.current[pageNumber! - 1]?.zoomIn()
                  }
                  className="text-white bg-gray-900 hover:bg-gray-900/80"
                  size="icon"
                  title="Zoom in"
                >
                  <ZoomInIcon className="w-5 h-5" />
                </Button>
                <Button
                  onClick={() =>
                    documentRefs.current[pageNumber! - 1]?.zoomOut()
                  }
                  className="text-white bg-gray-900 hover:bg-gray-900/80"
                  size="icon"
                  title="Zoom out"
                >
                  <ZoomOutIcon className="w-5 h-5" />
                </Button>
              </div>
            ) : null}
            {pageNumber && numPages ? (
              <div className="flex items-center h-10 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md">
                <span style={{ fontVariantNumeric: "tabular-nums" }}>
                  {pageNumber}
                </span>
                <span
                  className="text-gray-400"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {" "}
                  / {numPages}
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
}
