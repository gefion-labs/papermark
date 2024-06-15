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

interface UpgradePlanEmailProps {
  name: string | null | undefined;
  planType: string;
}

const UpgradePlanEmail = ({
  name,
  planType = "Pro",
}: UpgradePlanEmailProps) => {
  const previewText = `The document sharing infrastructure for the modern web`;

  const features: any = {
    pro: [
      "Custom branding",
      "Unlimited link views",
      "Folder organization",
      "2 team members",
    ],
    business: [
      "Custom domains on document links",
      "Unlimited document uploads",
      "1 data room for multi-file sharing",
      "3 team members",
    ],
    datarooms: [
      "Custom domains on data room links",
      "Unlimited data rooms",
      "Unlimited document uploads",
      "5 team members",
    ],
  };

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
              Thanks for upgrading to Deck3 {planType}!
            </Text>
            <Text className="text-sm leading-6 text-black">
              Hey{name && ` ${name}`}!
            </Text>
            <Text className="text-sm">
              My name is Marc, and I&apos;m the creator of Deck3. I wanted to
              personally reach out to thank you for upgrading to Deck3{" "}
              {planType}!
            </Text>
            <Text className="text-sm leading-6 text-black">
              As you might already know, we are a bootstrapped and{" "}
              <Link
                href="https://github.com/gefion-labs/papermark"
                target="_blank"
                className="font-medium no-underline text-emerald-500"
              >
                open-source
              </Link>{" "}
              business. Your support means the world to us and helps us continue
              to build and improve Deck3.
            </Text>
            <Text className="text-sm leading-6 text-black">
              On the {planType} plan, you now have access to:
            </Text>
            {features[planType.toLowerCase()].map(
              (feature: string, index: number) => (
                <Text key={index} className="ml-1 text-sm leading-4 text-black">
                  ◆ {feature}
                </Text>
              ),
              [],
            )}
            <Section className="mb-[32px] mt-[32px] text-center">
              <Button
                className="text-xs font-semibold text-center text-white no-underline bg-black rounded"
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/documents`}
                style={{ padding: "12px 20px" }}
              >
                Share your documents
              </Button>
            </Section>
            <Section>
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

export default UpgradePlanEmail;
