import styles from './LandingComponent.module.css'
import Image from 'next/image'
import NavigationButton from '@/components/NavigationButton/NavigationButton'

function LandingComponent() {
  return (
    <>
      <section className={styles.landingContainer}>
        <div className={styles.landingContent}>
          <div className={styles.logoContainer}>
            <Image width={50} layout="responsive" height={50} src="/Logo.webp" alt="Logo" />
          </div>
          <div className={styles.imageContainer}>
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className={styles.image}
              src="/landingpageTopIllustration.svg"
              alt="Illustration of finding things to do on phones"
              priority={true}
              loading="eager"
            />
          </div>
          <p className={styles.headerText}>Discover hidden gems around you.</p>
          <NavigationButton href="/map" displayText="Get Started" />
          <p className={styles.followupText}>
            Our aim is to provide you with a platform to discover remarkable hidden gems that may not appear on the 1st
            page of your Google search.
          </p>
        </div>
      </section>
    </>
  )
}

export default LandingComponent
