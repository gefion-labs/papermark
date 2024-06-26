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

export default function ViewedDataroom({
  dataroomId = "123",
  dataroomName = "Example Dataroom",
  viewerEmail,
}: {
  dataroomId: string;
  dataroomName: string;
  viewerEmail: string | null;
}) {
  return (
    <Html>
      <Head />
      <Preview>See who visited your dataroom</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto font-sans bg-white">
          <Container className="mx-auto my-10 w-[465px] p-5">
            <Text className="p-0 mx-0 mt-4 mb-8 text-2xl font-normal text-center">
              <span className="font-bold tracking-tighter">Deck3</span>
            </Text>
            <Text className="p-0 mx-0 text-xl font-semibold text-center text-black my-7">
              New Dataroom Visitor
            </Text>
            <Text className="text-sm leading-6 text-black">
              Your dataroom{" "}
              <span className="font-semibold">{dataroomName}</span> was just
              viewed by{" "}
              <span className="font-semibold">
                {viewerEmail ? `${viewerEmail}` : `someone`}
              </span>
              .
            </Text>
            <Text className="text-sm leading-6 text-black">
              You can get the detailed engagement analytics like time-spent per
              document page and total duration for this dataroom on Deck3.
            </Text>
            <Section className="my-8 text-center">
              <Button
                className="text-xs font-semibold text-center text-white no-underline bg-black rounded"
                href={`https://deck3.xyz/datarooms/${dataroomId}`}
                style={{ padding: "12px 20px" }}
              >
                See my dataroom insights
              </Button>
            </Section>
            <Text className="text-sm leading-6 text-black">
              Stay informed, stay ahead with Deck3.
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
              <Text className="text-xs">
                To stop email notifications for this link, edit the link and
                uncheck &quot;Receive email notification&quot;.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
