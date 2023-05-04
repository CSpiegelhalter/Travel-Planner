import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/pageStyles/LandingPageBGDark.module.css'

interface BGprops{
    darkmode: boolean
}

function LandingPageBG(props: BGprops) {
   
    return (
        
        props.darkmode ? 
        <div className={styles.backgroundConatiner}>
            <div className={styles.darkmodeBackgroundContainer}>
                <Image src="/darkmode/darkmodeBackground.svg" alt="an svg of a mountain" fill={true} className={styles.darkmodebackground} />
            </div>
            <div className={styles.backContainer}>
                <Image src="/darkmode/darkmodeBack.svg" alt="an svg of a mountain" fill={true} className={styles.darkmodeBack} />
            </div>
            <div className={styles.Front3Container}>
                <Image src="/darkmode/darkmodeFront3.svg" alt="an svg of a mountain" fill={true} className={styles.darkmodeFront3} />
            </div>
            <div className={styles.Front2Container}>
                <Image src="/darkmode/darkmodeFront2.svg" alt="an svg of a mountain" fill={true} className={styles.darkmodeFront2} />
            </div>
            <div className={styles.Front1Container}>
                <Image src="/darkmode/darkmodeFront1.svg" alt="an svg of a mountain" fill={true} className={styles.darkmodeFront1} />
            </div>
            <div className={styles.FrontContainer}>
                <Image src="/darkmode/darkmodeFront.svg" alt="an svg of a mountain" fill={true} className={styles.darkmodeFront} />
            </div>
        </div>
            :
            <div className={styles.backgroundConatiner}>
            <div className={styles.lightmodeBackgroundContainer}>
                <Image src="/lightmode/lightmodeBackground.svg" alt="an svg of a mountain" fill={true} className={styles.darkmodebackground} />
            </div>
            <div className={styles.backContainer}>
                <Image src="/lightmode/lightmodeBack.svg" alt="an svg of a mountain" fill={true} className={styles.lightmodeBack} />
            </div>
            <div className={styles.Front3Container}>
                <Image src="/lightmode/lightmodeFront3.svg" alt="an svg of a mountain" fill={true} className={styles.lightmodeFront3} />
            </div>
            <div className={styles.Front2Container}>
                <Image src="/lightmode/lightmodeFront2.svg" alt="an svg of a mountain" fill={true} className={styles.lightmodeFront2} />
            </div>
            <div className={styles.Front1Container}>
                <Image src="/lightmode/lightmodeFront1.svg" alt="an svg of a mountain" fill={true} className={styles.lightmodeFront1} />
            </div>
            <div className={styles.FrontContainer}>
                <Image src="/lightmode/lightmodeFront.svg" alt="an svg of a mountain" fill={true} className={styles.lightmodeFront} />
            </div>
        </div>
        
    )
}

export default LandingPageBG;