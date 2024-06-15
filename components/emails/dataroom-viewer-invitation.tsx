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

export default function DataroomViewerInvitation({
  dataroomName,
  senderEmail,
  url,
}: {
  dataroomName: string;
  senderEmail: string;
  url: string;
}) {
  return (
    <Html>
      <Head />
      <Preview>View dataroom on Deck3</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto font-sans bg-white">
          <Container className="mx-auto my-10 w-[465px] p-5">
            <Text className="p-0 mx-0 mt-4 mb-8 text-2xl font-normal text-center">
              <span className="font-bold tracking-tighter">Deck3</span>
            </Text>
            <Text className="p-0 mx-0 mt-4 mb-8 text-xl text-center font-seminbold">
              {`View ${dataroomName}`}
            </Text>
            <Text className="text-sm leading-6 text-black">Hey!</Text>
            <Text className="text-sm leading-6 text-black">
              You have been invited to view the{" "}
              <span className="font-semibold">{dataroomName}</span> dataroom on{" "}
              <span className="font-semibold">Deck3</span>.
              <br />
              The invitation was sent by{" "}
              <span className="font-semibold">{senderEmail}</span>.
            </Text>
            <Section className="mb-[32px] mt-[32px] text-center">
              <Button
                className="text-xs font-semibold text-center text-white no-underline bg-black rounded"
                href={`${url}`}
                style={{ padding: "12px 20px" }}
              >
                View the dataroom
              </Button>
            </Section>
            <Text className="text-sm text-black">
              or copy and paste this URL into your browser: <br />
              {`${url}`}
            </Text>
            <Text className="text-sm text-gray-400">Deck3</Text>
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
                reply to it.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
