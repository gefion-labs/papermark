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

export default function EmailVerification({
  verificationURL = "deck3.xyz",
  email = "test@test.com",
}: {
  verificationURL: string;
  email: string;
}) {
  return (
    <Html>
      <Head />
      <Preview>Verify your email to view the document</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto font-sans bg-white">
          <Container className="mx-auto my-10 w-[465px] p-5">
            <Text className="p-0 mx-0 mt-4 mb-8 text-2xl font-normal text-center">
              <span className="font-bold tracking-tighter">Deck3</span>
            </Text>
            <Text className="p-0 mx-0 text-xl font-semibold text-center text-black my-7">
              Please verify your email
            </Text>
            <Text className="text-sm leading-6 text-black">
              Please click the verification link below to view the document.
            </Text>
            <Section className="my-8 text-center">
              <Button
                className="text-xs font-semibold text-center text-white no-underline bg-black rounded"
                href={verificationURL}
                style={{ padding: "12px 20px" }}
              >
                Verify Email
              </Button>
            </Section>
            <Text className="text-sm leading-6 text-black">
              or copy and paste this URL into your browser:
            </Text>
            <Text className="flex-wrap max-w-sm font-medium text-purple-600 no-underline break-words">
              {verificationURL.replace(/^https?:\/\//, "")}
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
                This email was intended for{" "}
                <span className="text-black">{email}</span>. If you were not
                expecting this email, you can ignore this email. If you have any
                feedback or questions about this email, simply reply to it.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
