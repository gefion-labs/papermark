import { Metadata } from "next";
import Script from "next/script";

const data = {
  description:
    "The largest investors database. This list of investors includes ten thousand of different venture funds based on stage, sector and location.",
  title: "Investor Search | Deck3",
  url: "/investors",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://deck3.xyz"),
  title: data.title,
  description: data.description,
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.url,
    siteName: "Deck3",
    images: [
      {
        url: "/_static/investor-meta.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: data.title,
    description: data.description,
    creator: "@deck3",
    images: ["/_static/investor-meta.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Script src="https://iuliia2.marbleflows.com/flows/8687" />
    </>
  );
}
