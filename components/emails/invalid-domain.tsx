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

export default function InvalidDomain({
  domain = "deck3.xyz",
  invalidDays = 14,
}: {
  domain: string;
  invalidDays: number;
}) {
  return (
    <Html>
      <Head />
      <Preview>Invalid Domain Configuration</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto font-sans bg-white">
          <Container className="mx-auto my-10 w-[465px] p-5">
            <Text className="p-0 mx-0 mt-4 mb-8 text-2xl font-normal text-center">
              <span className="font-bold tracking-tighter">Deck3</span>
            </Text>
            <Text className="p-0 mx-0 text-xl font-semibold text-center text-black my-7">
              {invalidDays >= 14
                ? `Invalid Domain Configuration`
                : `Finish configuring your domain`}
            </Text>
            <Text className="text-sm leading-6 text-black">
              Your domain <code className="text-purple-600">{domain}</code> for
              your Deck3 account{" "}
              {invalidDays >= 14
                ? `has been invalid for ${invalidDays} days.`
                : `is still unconfigured.`}
            </Text>
            <Text className="text-sm leading-6 text-black">
              If your domain remains unconfigured for 30 days, it will be
              automatically deleted from Deck3. Please click the link below to
              configure your domain.
            </Text>
            <Section className="my-8 text-center">
              <Button
                className="text-xs font-semibold text-center text-white no-underline bg-black rounded"
                href={`https://deck3.xyz/settings/domains`}
                style={{ padding: "12px 20px" }}
              >
                Configure domain
              </Button>
            </Section>
            <Text className="text-sm leading-6 text-black">
              If you do not want to keep this domain on Papermark, you can{" "}
              <Link
                href={`https://deck3.xyz/settings/domains`}
                className="font-medium text-blue-600 no-underline"
              >
                delete it
              </Link>{" "}
              or simply ignore this email.{" "}
              {invalidDays >= 14
                ? `To respect your inbox,${" "} 
                  ${
                    invalidDays < 28
                      ? `we will only send you one more email about this in ${
                          28 - invalidDays
                        } days.`
                      : `this will be the last time we will email you about this.`
                  }`
                : ""}
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
