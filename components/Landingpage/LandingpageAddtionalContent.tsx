import styles from '@/styles/componentStyles/LandingpageAdditionalContent.module.css'
import { HandlerProps } from '@/Types/types'
import dynamic from 'next/dynamic'
import { useState } from 'react'

function LandingpageAddtionalContent({ handler }: HandlerProps) {
  const DiscoverAndExplore = dynamic(() => import('@/components/Landingpage/DiscoverAndExplore'))
  const MemorableTrips = dynamic(() => import('@/components/Landingpage/MemorableTrips'))
  const WhatMakesUsDifferent = dynamic(() => import('@/components/Landingpage/WhatMakesUsDifferent'))
  const [loadMemorableTrips, setLoadMemorableTrips] = useState(false)
  const [loadDifferent, setLoadDifferent] = useState(false)

  const triggerMemorableTrips = () => {
    setLoadMemorableTrips(true)
  }
  const triggerDifferent = () => {
    setLoadDifferent(true)
  }

  return (
    <div className={styles.additionalContentContainer}>
      <DiscoverAndExplore handler={() => triggerDifferent()} />
      {loadDifferent && <WhatMakesUsDifferent handler={() => triggerMemorableTrips()} />}
      {loadMemorableTrips && <MemorableTrips handler={() => handler()} />}
    </div>
  )
}

export default LandingpageAddtionalContent
