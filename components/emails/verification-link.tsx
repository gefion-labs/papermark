import React from "react";

import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

const VerificationLinkEmail = ({
  url = "https://deck3.xyz",
}: {
  url: string;
}) => {
  return (
    <Html>
      <Head />
      <Preview>Your Deck3 Login Link</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto font-sans bg-white">
          <Container className="mx-auto my-10 max-w-[500px] rounded border border-solid border-gray-200 px-10 py-5">
            <Text className="p-0 mx-0 mt-4 mb-8 text-2xl font-normal text-center">
              <span className="font-bold tracking-tighter">Deck3</span>
            </Text>
            <Text className="p-0 mx-0 text-xl font-semibold text-center text-black my-7">
              Your Deck3 Login Link
            </Text>

            <Text className="text-sm leading-6 text-black">
              Welcome to Deck3!
            </Text>
            <Text className="text-sm leading-6 text-black">
              Please click the magic link below to sign in to your account.
            </Text>
            <Section className="my-8 text-center">
              <Button
                className="text-xs font-semibold text-center text-white no-underline bg-black rounded"
                href={url}
                style={{ padding: "12px 20px" }}
              >
                Sign in
              </Button>
            </Section>
            <Text className="text-sm leading-6 text-black">
              or copy and paste this URL into your browser:
            </Text>
            <Text className="flex-wrap max-w-sm font-medium text-purple-600 no-underline break-words">
              {url.replace(/^https?:\/\//, "")}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerificationLinkEmail;
