import LandingComponent from '@/components/LandingComponent'
import LandingPageBG from '@/components/LandingPageBG'
import styles from '../styles/pageStyles/LandingPage.module.css'
import NavBar from '@/components/NavBar'
import { useUser } from '@auth0/nextjs-auth0/client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

function LandingPage() {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.backContainer}>
        <Image
          src="/darkmode/darkmodeBackgroundMobile.svg"
          alt="background night sky"
          layout="responsive"
          width={100}
          height={0}
          style={{ position: 'absolute' }}
        />
        <LandingComponent />
        <LandingPageBG darkmode={false} />
      </div>
      <div className={styles.additionalContent}>
        {/* <p >onvonwoeinvw</p> */}
      </div>
    </div>
  )
}

export default LandingPage
