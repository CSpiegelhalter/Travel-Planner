'use client'

import dynamic from 'next/dynamic'
import LandingComponent from '@/components/Landingpage/LandingComponent/LandingComponent'
import Head from 'next/head'
import LoadingComponent from '@/components/Loading/LoadingComponent/LoadingComponent'
import { Suspense } from 'react'

function LandingPage() {
  const DiscoverAndExplore = dynamic(() => import('@/components/Landingpage/DiscoverAndExplore/DiscoverAndExplore'), {
    loading: () => <LoadingComponent />,
    ssr: false,
  })
  const MemorableTrips = dynamic(() => import('@/components/Landingpage/MemorableTrips/MemorableTrips'), {
    loading: () => <LoadingComponent />,
    ssr: false,
  })
  const WhatMakesUsDifferent = dynamic(
    () => import('@/components/Landingpage/WhatMakesUsDifferent/WhatMakesUsDifferent'),
    { loading: () => <LoadingComponent />, ssr: false },
  )
  const Footer = dynamic(() => import('@/components/Footer/Footer'), {
    loading: () => <LoadingComponent />,
    ssr: false,
  })

  return (
    <div style={{ margin: 'auto', width: '100vw', justifySelf: 'center' }}>
      <Suspense fallback={<LoadingComponent />}>
        <Head>
          <title>Curious Visits</title>
          <meta name="description" content="Find cool things to do in... " />
        </Head>

        <LandingComponent />
        <DiscoverAndExplore />
        <WhatMakesUsDifferent />
        <MemorableTrips />
        <Footer />
      </Suspense>
    </div>
  )
}

export default LandingPage
