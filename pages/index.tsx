import LandingComponent from '@/components/LandingComponent'
import LandingPageBG from '@/components/LandingPageBG'
import styles from '../styles/pageStyles/LandingPage.module.css'
import NavBar from '@/components/NavBar'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useEffect, useState } from 'react'
import LandingPageAddtionalContent from '@/components/LandingPageAddtionalContent'

function LandingPage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    console.log(darkMode)
  }, [darkMode])
  return (
    <div className={styles.landingContainer}>
      <div className={styles.backContainer}>
        <LandingPageBG darkmode={darkMode} />
      </div>
        <LandingComponent darkmode={darkMode} />
      <div style={darkMode ? { backgroundColor: '#051c32' } : { backgroundColor: '#060047' }} className={styles.additionalContent}>
      <button className={styles.testButton} onClick={() => setDarkMode(!darkMode)}>Toggle Darkmode</button>
      <LandingPageAddtionalContent darkmode={darkMode} />   
      </div>   
    </div>
  )
}

export default LandingPage
