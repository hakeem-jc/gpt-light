'use client';
import './globals.scss';
import './i18n';

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
