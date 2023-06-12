import './globals.css';

export const metadata = {
  title: 'ChatGPT Light',
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