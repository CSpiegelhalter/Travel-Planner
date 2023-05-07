import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/pageStyles/LandingPageBGDark.module.css'

interface BGprops {
  darkmode: boolean
}
const darkmode = true

function LandingPageBG(props: BGprops) {
  return darkmode ? (
    <div className={styles.backgroundConatiner}>
      <Image
        src="/darkmode/darkmodeBackMobile.svg"
        alt="farthest away mountain"
        layout="responsive"
        width={100}
        height={0}
        style={{ position: 'absolute' }}
      />
      <Image
        src="/darkmode/darkmodeFrontMobile3.svg"
        alt="front mountain 3"
        layout="responsive"
        width={100}
        height={0}
        style={{ position: 'absolute' }}
      />
      <Image
        src="/darkmode/darkmodeFrontMobile2.svg"
        alt="front mountain 2"
        layout="responsive"
        width={100}
        height={0}
        style={{ position: 'absolute' }}
      />
      <Image
        src="/darkmode/darkmodeFrontMobile1.svg"
        alt="front mountain 1"
        layout="responsive"
        width={100}
        height={0}
        style={{ position: 'absolute' }}
      />
      <Image
        src="/darkmode/darkmodeFrontMobile.svg"
        alt="first mountain"
        layout="responsive"
        width={100}
        height={0}
        style={{ zIndex: 10, display: 'block', position: 'relative' }}
      />
    </div>
  ) : (
    <div className={styles.backgroundConatiner}>
      <div className={styles.lightmodeBackgroundContainer}>
        <Image
          src="/lightmode/lightmodeBackgroundMobile.svg"
          alt="an svg of a mountain"
          fill={true}
          className={styles.darkmodebackground}
        />
      </div>
      <div className={styles.backContainer}>
        <Image
          src="/lightmode/lightmodeBackMobile.svg"
          alt="an svg of a mountain"
          fill={true}
          className={styles.lightmodeBack}
        />
      </div>
      <div className={styles.Front3Container}>
        <Image
          src="/lightmode/lightmodeFrontMobile3.svg"
          alt="an svg of a mountain"
          fill={true}
          className={styles.lightmodeFront3}
        />
      </div>
      <div className={styles.Front2Container}>
        <Image
          src="/lightmode/lightmodeFrontMobile2.svg"
          alt="an svg of a mountain"
          fill={true}
          className={styles.lightmodeFront2}
        />
      </div>
      <div className={styles.Front1Container}>
        <Image
          src="/lightmode/lightmodeFrontMobile1.svg"
          alt="an svg of a mountain"
          fill={true}
          className={styles.lightmodeFront1}
        />
      </div>
      <div className={styles.FrontContainer}>
        <Image
          src="/lightmode/lightmodeFrontMobile.svg"
          alt="an svg of a mountain"
          fill={true}
          className={styles.lightmodeFront}
        />
      </div>
    </div>
  )
}

export default LandingPageBG
