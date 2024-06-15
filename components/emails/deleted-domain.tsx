import React from "react";

import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function DomainDeleted({
  domain = "deck3.xyz",
}: {
  domain: string;
}) {
  return (
    <Html>
      <Head />
      <Preview>Domain Deleted</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto font-sans bg-white">
          <Container className="mx-auto my-10 w-[465px] p-5">
            <Text className="p-0 mx-0 mt-4 mb-8 text-2xl font-normal text-center">
              <span className="font-bold tracking-tighter">Deck3</span>
            </Text>
            <Text className="p-0 mx-0 mt-4 mb-8 text-xl text-center font-seminbold">
              Domain Deleted
            </Text>
            <Text className="text-sm leading-6 text-black">
              Your domain <code className="text-purple-600">{domain}</code> for
              your Deck3 account has been invalid for 30 days. As a result, it
              has been deleted from Deck3.
            </Text>
            <Text className="text-sm leading-6 text-black">
              If you would like to restore the domain, you can easily create it
              again on Deck3 with the link below.
            </Text>
            <Section className="my-8 text-center">
              <Button
                className="text-xs font-semibold text-center text-white no-underline bg-black rounded"
                href={`https://deck3.xyz/settings/domains`}
                style={{ padding: "12px 20px" }}
              >
                Set up your custom domain
              </Button>
            </Section>
            <Text className="text-sm leading-6 text-black">
              If you did not want to keep using this domain on Papermark anyway,
              you can simply ignore this email.
            </Text>
            <Hr />
            <Section className="mt-8 text-gray-400">
              <Text className="text-xs">
                © {new Date().getFullYear()}{" "}
                <a
                  href="https://deck3.xyz"
                  className="text-gray-400 no-underline visited:text-gray-400 hover:text-gray-400"
                  target="_blank"
                >
                  deck3.xyz
                </a>
              </Text>
              <Text className="text-xs">
                If you have any feedback or questions about this email, simply
                reply to it. I&apos;d love to hear from you!
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
