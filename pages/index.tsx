import LandingComponent from '@/components/LandingComponent'
import LandingPageBG from '@/components/LandingPageBG'
import styles from '../styles/pageStyles/LandingPage.module.css'
import NavBar from '@/components/NavBar'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useEffect, useState } from 'react'

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
        <LandingComponent />
      {darkMode ? <div className={styles.additionalContentDark}>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Darkmode</button>
      </div> :
      <div className={styles.additionalContent}>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Darkmode</button>
      </div>}
      
    </div>
  )
}

export default LandingPage
