import Script from 'next/script'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Top',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href="/">Top</Link>
          <Link href="/about">About</Link>
        </nav>
        {children}
      </body>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-V61XENS0YQ"></Script>
      <Script id="gtag-push" dangerouslySetInnerHTML={{ 
        __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-V61XENS0YQ');`
      }} />
    </html>
  )
}
