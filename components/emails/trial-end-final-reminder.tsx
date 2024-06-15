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

interface TrialEndFinalReminderEmail {
  name: string | null | undefined;
}

const TrialEndFinalReminderEmail = ({ name }: TrialEndFinalReminderEmail) => {
  const previewText = `Upgrade to Deck3 Pro`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto font-sans bg-white">
          <Container className="mx-auto my-10 w-[465px] p-5">
            <Text className="p-0 mx-0 mt-4 mb-8 text-2xl font-normal text-center">
              <span className="font-bold tracking-tighter">Deck3</span>
            </Text>
            <Text className="p-0 mx-0 mt-4 mb-8 text-xl text-center font-seminbold">
              Your pro trial expires in 24 hours
            </Text>
            <Text className="text-sm leading-6 text-black">
              Hey{name && ` ${name}`}!
            </Text>
            <Text className="text-sm leading-6 text-black">
              Your Deck3 Pro trial expires in 24 hours.{" "}
              <Link href={`https://deck3.xyz/settings/billing`}>
                Upgrade now
              </Link>{" "}
              to:
            </Text>
            <Text className="ml-1 text-sm leading-4 text-black">
              ◆ Send documents with your{" "}
              <span className="font-bold">custom domain</span>
            </Text>
            <Text className="ml-1 text-sm leading-4 text-black">
              ◆ Invite your <span className="font-bold">team members</span>
            </Text>
            <Text className="ml-1 text-sm leading-4 text-black">
              ◆ Share <span className="font-bold">unlimited documents</span>
            </Text>
            <Text className="ml-1 text-sm leading-4 text-black">
              ◆ Upload <span className="font-bold">large</span> files
            </Text>
            <Section className="mb-[32px] mt-[32px] text-center">
              <Button
                className="text-xs font-semibold text-center text-white no-underline bg-black rounded"
                href={`https://deck3.xyz/settings/billing`}
                style={{ padding: "12px 20px" }}
              >
                Upgrade now
              </Button>
            </Section>
            <Text className="text-sm font-semibold">
              <span className="text-red-500">⚠️</span> Links with custom domains
              will be <span className="underline">disabled</span> after your
              trial.
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
};

export default TrialEndFinalReminderEmail;
