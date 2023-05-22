import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

export default function App({ Component, pageProps }: AppProps) {
  const LoadingPage = dynamic(() => import('@/components/LoadingPage'))

  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`)
      setLoading(true)
    }

    const handleStop = () => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  if (loading) return <LoadingPage />
  return (
    <UserProvider>
      <Head>
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <Component {...pageProps} />
    </UserProvider>
  )
}
