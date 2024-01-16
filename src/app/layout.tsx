'use client'

import '@/styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import Head from 'next/head'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <UserProvider>
        <body>{children}</body>
      </UserProvider>
    </html>
  )
}
