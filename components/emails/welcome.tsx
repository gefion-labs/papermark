import React from "react";

import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface WelcomeEmailProps {
  name: string | null | undefined;
}

const WelcomeEmail = ({ name }: WelcomeEmailProps) => {
  const previewText = `The document sharing infrastructure for the modern web`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto font-sans bg-white">
          <Container className="mx-auto my-10 w-[465px] p-5">
            <Text className="p-0 mx-0 mt-4 mb-8 text-2xl font-normal text-center">
              Welcome to{" "}
              <span className="font-bold tracking-tighter">Deck3</span>
            </Text>
            <Text className="text-sm">
              Thanks for signing up{name && `, ${name}`}!
            </Text>
            <Text className="text-sm">
              My name is Marc, and I&apos;m the creator of Deck3 – the
              open-source DocSend alternative! I&apos;m excited to have you on
              board!
            </Text>
            <Text className="text-sm">
              Here are a few things you can do to get started:
            </Text>
            <Text className="text-sm">
              <ul className="text-sm list-disc list-inside">
                <li>Upload a document</li>
                <li>
                  Share a link{" "}
                  <span className="italic">(with your custom domain)✨</span>
                </li>
                <li>Watch the views come in real-time</li>
              </ul>
            </Text>
            <Section className="mb-[32px] mt-[32px] text-center">
              <Button
                className="text-xs font-semibold text-center text-white no-underline bg-black rounded"
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/welcome`}
                style={{ padding: "12px 20px" }}
              >
                Get Started
              </Button>
            </Section>
            <Section>
              <Text className="text-sm">
                If you would like to keep up to date, you can do:
              </Text>
              <Text className="text-sm">
                <ul className="text-sm list-disc list-inside">
                  <li>
                    Star the repo on{" "}
                    <Link
                      href="https://github.com/gefion-labs/papermark"
                      target="_blank"
                    >
                      GitHub
                    </Link>
                  </li>
                  <li>
                    Follow the journey on{" "}
                    <Link href="https://twitter.com/mfts0" target="_blank">
                      Twitter
                    </Link>
                  </li>
                </ul>
              </Text>
            </Section>
            <Section className="mt-4">
              <Text className="text-sm">
                Let me know if you have any questions or feedback. I&apos;m
                always happy to help!
              </Text>
              <Text className="text-sm text-gray-400">Logan from Deck3</Text>
            </Section>
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
};

export default WelcomeEmail;
