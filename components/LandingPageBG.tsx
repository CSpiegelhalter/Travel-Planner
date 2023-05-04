import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/pageStyles/LandingPageBGDark.module.css'

interface BGprops{
    darkmode: boolean
}
const darkmode = true

function LandingPageBG(props: BGprops) {
   
    return (
        
        darkmode ? 
        <div className={styles.backgroundConatiner}>
            <div className={styles.darkmodeBackgroundContainer}>
                <Image src="/darkmode/darkmodeBackgroundMobile.svg" alt="background night sky" style={{objectFit: "contain"}} fill={true} className={styles.darkmodebackground} />
            </div>
            <div className={styles.backContainer}>
                <Image src="/darkmode/darkmodeBackMobile.svg" alt="farthest away mountain" fill={true} className={styles.darkmodeBack} />
            </div>
            <div className={styles.Front3Container}>
                <Image src="/darkmode/darkmodeFrontMobile3.svg" alt="front mountain 3" fill={true} className={styles.darkmodeFront3} />
            </div>
            <div className={styles.Front2Container}>
                <Image src="/darkmode/darkmodeFrontMobile2.svg" alt="front mountain 2" fill={true} className={styles.darkmodeFront2} />
            </div>
            <div className={styles.Front1Container}>
                <Image src="/darkmode/darkmodeFrontMobile1.svg" alt="front mountain 1" fill={true} className={styles.darkmodeFront1} />
            </div>
            <div className={styles.FrontContainer}>
                <Image src="/darkmode/darkmodeFrontMobile.svg" alt="first mountain" fill={true} className={styles.darkmodeFront} />
            </div>
        </div>
            :
            <div className={styles.backgroundConatiner}>
            <div className={styles.lightmodeBackgroundContainer}>
                <Image src="/lightmode/lightmodeBackgroundMobile.svg" alt="an svg of a mountain" fill={true} className={styles.darkmodebackground} />
            </div>
            <div className={styles.backContainer}>
                <Image src="/lightmode/lightmodeBackMobile.svg" alt="an svg of a mountain" fill={true} className={styles.lightmodeBack} />
            </div>
            <div className={styles.Front3Container}>
                <Image src="/lightmode/lightmodeFrontMobile3.svg" alt="an svg of a mountain" fill={true} className={styles.lightmodeFront3} />
            </div>
            <div className={styles.Front2Container}>
                <Image src="/lightmode/lightmodeFrontMobile2.svg" alt="an svg of a mountain" fill={true} className={styles.lightmodeFront2} />
            </div>
            <div className={styles.Front1Container}>
                <Image src="/lightmode/lightmodeFrontMobile1.svg" alt="an svg of a mountain" fill={true} className={styles.lightmodeFront1} />
            </div>
            <div className={styles.FrontContainer}>
                <Image src="/lightmode/lightmodeFrontMobile.svg" alt="an svg of a mountain" fill={true} className={styles.lightmodeFront} />
            </div>
        </div>
        
    )
}

export default LandingPageBG;