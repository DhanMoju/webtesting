import { Analytics } from '@vercel/analytics/next'
import { DM_Sans, IBM_Plex_Mono } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', weight: ['400', '500', '600', '700'] })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], variable: '--font-plex-mono', weight: ['400', '500', '600'] })

export const metadata: Metadata = {
  title: 'MFY Consulting Ltd | Integrated Oil & Gas Engineering Services',
  description: 'MFY Consulting Ltd delivers integrated oil & gas engineering, procurement, construction, commissioning and technical support services from Abuja, Nigeria.',
  generator: 'MFY Consulting Ltd',
  icons: {
    icon: '/mfy-logo.png',
    shortcut: '/mfy-logo.png',
    apple: '/mfy-logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${plexMono.variable}`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
