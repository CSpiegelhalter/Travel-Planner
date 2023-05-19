import React, { useState } from 'react'
import styles from '../styles/componentStyles/NavBar.module.css'
import Image from 'next/image'

function NavBar(props: any) {
  const testList = ['spain', 'rome', 'vacay', 'our getaway']

  return (
    <header className={styles.mainHeader}>
      <div className={styles.buttonContainer}>
        <div className={styles.mapBtn}>
          <Image src="/mapIconSelected.svg" alt="Backpack Icon" width={50} height={50} />
          <p className={styles.btnLabels}>Maps</p>
        </div>
        <div className={styles.tripsBtn}>
          <Image src="/backpackIconSelected.svg" alt="Backpack Icon" width={50} height={50} />
          <p className={styles.btnLabels}>Trips</p>
        </div>
        <div className={styles.bucketListBtn}>
          <Image src="/saveIconSelected.svg" alt="Backpack Icon" width={50} height={50} />
          <p className={styles.btnLabels}>Saved</p>
        </div>
        <div className={styles.ProfileBtn}>
          <Image src="/backpackIconSelected.svg" alt="Backpack Icon" width={50} height={50} />
          <div className={styles.meLabel}>
            <p className={styles.btnLabels}>Me</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar
