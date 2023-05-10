'use-client'

import React from 'react'
import styles from '../styles/componentStyles/LandingComponent.module.css'
import Button from './Button'
import { useRouter } from 'next/router'
import Hamburger from './Hamburger'

function LandingComponent({ darkmode }) {
  const router = useRouter()

  return (
    <>
    <div className={styles.ham}>
    <Hamburger style={{ background: 'none' }} />
    </div>
      <div className={styles.background}>
        <p className={styles.title}>A tool to help you find fun and unique things to do on your travels.</p>
        <Button style={darkmode ? {background: '#19376d', border: '1px solid #060047'} : {background: '#E64089', border: '1px solid #051c32'}}  name="landingPageFindPlaces" value="Find Places >>" handler={() => router.push('/home')} />
      </div>
    </>
  )
}

export default LandingComponent
