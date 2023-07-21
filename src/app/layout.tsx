'use client';
import './globals.scss';
import './i18n';

export const metadata = {
  title: 'GPT Light',
  description: 'Minimal ChatGPT Clone',
  author: 'Hakeem Clarke',
  keywords: 'Next.js, ChatGPT Clone, AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
