import LandingComponent from '@/components/LandingComponent';
import LandingPageBG from '@/components/LandingPageBG';
import styles from '../styles/pageStyles/LandingPage.module.css'
import NavBar from '@/components/NavBar'
import { useUser } from '@auth0/nextjs-auth0/client'
import React, { useEffect, useState } from 'react'


function LandingPage() {




  return (
    <div>
      <div className={styles.wordsContainer}>
        <LandingComponent />
      </div>
      <div className={styles.backgroundContainer}>
        <LandingPageBG darkmode={false} />
      </div>
    </div>
  );
}

export default LandingPage;