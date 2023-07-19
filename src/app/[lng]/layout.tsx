import './globals.scss';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export const metadata = {
  title: 'GPT Light',
  description: 'Minimal ChatGPT Clone',
  author: 'Hakeem Clarke',
  keywords: 'Next.js, ChatGPT Clone, AI',
}

export default function RootLayout({
  // @ts-ignore
  children, params: {
    lng
  }
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>{children}</body>
    </html>
  )
}
