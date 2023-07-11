import './globals.scss';

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
