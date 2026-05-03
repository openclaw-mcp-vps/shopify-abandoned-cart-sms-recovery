import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CartPulse — SMS Recovery for Shopify Abandoned Carts',
  description: 'Recover abandoned Shopify carts with AI-timed SMS messages. Boost revenue automatically with personalized recovery texts sent at the perfect moment.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cc44641c-8635-4ce9-bc0b-2070a1177918"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
