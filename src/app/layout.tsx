import './globals.css';

export const metadata = {
  title: 'MiniGPT Light',
  description: 'Minimal ChatGPT Clone',
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
