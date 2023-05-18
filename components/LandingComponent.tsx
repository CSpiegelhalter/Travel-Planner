
import styles from '../styles/componentStyles/LandingComponent.module.css'
import Image from 'next/image'
import Button from './Button'
import type { NextRouter } from 'next/router'


interface LandingComponentProps {
  router: NextRouter
}
function LandingComponent({ router }: LandingComponentProps) {

  return (
    <>
    <section className={styles.landingContainer}>
      <div className={styles.landingContent}>
      <Image
        width={50}
        height={50}
        src="/Logo.svg"
        alt="Logo"
        style={{margin: 'auto'}}
      />
      <div className={styles.imageContainer}>
      <Image
        width={0}
        height={300}
        layout="responsive"
        src="/landingpageTopIllustration.svg"
        alt="Illustration of finding things to do on phones"
        style={{marginTop: '60px'}}

        priority
      />
      </div>
      <p style={{ fontWeight: '700', fontSize: 'xx-large', marginTop: '60px' }}>Discover hidden gems around you.</p>
      <Button style={{ marginTop: '60px' }} name="getStarted" value="Get Started" handler={() => router.push('/home')} disabled="" />
      </div>
      </section>
    </>
  )
}

export default LandingComponent
