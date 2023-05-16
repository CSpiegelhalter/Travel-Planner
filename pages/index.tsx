import LandingComponent from '@/components/LandingComponent'
import LandingPageBG from '@/components/LandingPageBG'
import styles from '../styles/pageStyles/LandingPage.module.css'
import { useEffect, useState } from 'react'
import LandingPageAddtionalContent from '@/components/LandingPageAddtionalContent'
import { useRouter } from 'next/router'


function LandingPage() {
  const router = useRouter()

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    console.log(darkMode)
  }, [darkMode])
  return (
    <div className={styles.landingContainer}>
      <div className={styles.backContainer}>
        <LandingPageBG darkmode={darkMode} />
      </div>
        <LandingComponent router={router} darkmode={darkMode} />
      <div style={darkMode ? { backgroundColor: '#051c32' } : { backgroundColor: '#060047' }} className={styles.additionalContent}>
      {/* <button className={styles.testButton} onClick={() => setDarkMode(!darkMode)}>Toggle Darkmode</button> */}
      <LandingPageAddtionalContent router={router} darkmode={darkMode} />   
      </div>   
    </div>
  )
}

export default LandingPage
