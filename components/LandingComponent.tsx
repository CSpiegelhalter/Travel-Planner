'use-client'

import React from 'react'
import styles from '../styles/componentStyles/LandingComponent.module.css'
import Button from './Button'
import Hamburger from './Hamburger'
import { Darkmode } from '@/Types/types'




function LandingComponent({ darkmode, router }) {
 

  return (
    <>
    <div className={styles.ham}>
    <Hamburger style={{ background: 'none' }} />
    </div>
      <div className={styles.background}>
        <p className={styles.title}>A tool to help you find fun and unique things to do on your travels.</p>
        <Button style={darkmode ? {background: '#19376d', border: '1px solid #141e61', boxShadow: '4px 4px 0px #051c32'} : {background: '#E64089', border: '1px solid #060047', boxShadow: '4px 4px 0px #060047' }}  name="landingPageFindPlaces" value="Find Places >>" handler={() => router.push('/home')} />
      </div>
    </>
  )
}

export default LandingComponent
