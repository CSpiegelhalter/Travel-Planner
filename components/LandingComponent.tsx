'use-client'

import React from 'react'
import styles from '../styles/componentStyles/LandingComponent.module.css'
import Button from './Button'
import { useRouter } from 'next/router'
import Hamburger from './Hamburger'

function LandingComponent() {
  const router = useRouter()

  return (
    <>
    <div className={styles.ham}>
    <Hamburger />
    </div>
      <div className={styles.background}>
        <p className={styles.title}>A tool to help you find fun and unique things to do on your travels.</p>
        <Button name="landingPageFindPlaces" value="Find Places >>" handler={() => router.push('/home')} />
      </div>
    </>
  )
}

export default LandingComponent
