import "@/app/globals.scss";
import { defaultLocale } from "../../../middleware";

export const metadata = {
  title: "GPT Light",
  description: "Minimal ChatGPT Clone",
  author: "Hakeem Clarke",
  keywords: "Next.js, ChatGPT Clone, AI",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang ?? defaultLocale}>
      <body>{children}</body>
    </html>
  );
}
