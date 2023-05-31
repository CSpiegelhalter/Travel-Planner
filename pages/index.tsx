import dynamic from 'next/dynamic'
import LandingComponent from '@/components/Landingpage/LandingComponent'
import Head from 'next/head'
import { useState } from 'react'

function LandingPage() {
  const LandingpageAddtionalContent = dynamic(() => import('@/components/Landingpage/LandingpageAddtionalContent'))
  const Footer = dynamic(() => import('@/components/Footer'))

  const [loadFooter, setLoadFooter] = useState(false)
  const [loadAdditionalContent, setLoadAdditionalContent] = useState(false)

  const triggerLoadFooter = () => {
    setLoadFooter(true)
  }

  const triggerAdditionalContent = () => {
    setLoadAdditionalContent(true)
  }

  return (
    <div style={{ margin: 'auto', width: '100vw', justifySelf: 'center' }}>
      <Head>
        <title>Curious Visits</title>
        <meta name="description" content="Find cool things to do in... " />
      </Head>

      <LandingComponent handler={() => triggerAdditionalContent()} />
      {loadAdditionalContent && <LandingpageAddtionalContent handler={() => triggerLoadFooter()} />}
      {loadFooter && <Footer />}
    </div>
  )
}

export default LandingPage
