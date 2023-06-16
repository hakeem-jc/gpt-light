import './globals.css';

export const metadata = {
  title: 'MiniGPT',
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
