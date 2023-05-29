import styles from '@/styles/componentStyles/LandingComponent.module.css'
import Image from 'next/image'
import { HandlerProps } from '@/Types/types'
import dynamic from 'next/dynamic'

function LandingComponent({ handler }: HandlerProps) {
  const NavigationButton = dynamic(() => import('@/components/NavigationButton'))

  return (
    <>
      <section className={styles.landingContainer}>
        <div className={styles.landingContent}>
          <div className={styles.logoContainer}>
            <Image width={50} layout="responsive" height={50} src="/Logo.webp" alt="Logo" />
          </div>
          <div className={styles.imageContainer}>
            <Image
              width={0}
              height={300}
              layout="responsive"
              src="/landingpageTopIllustration.webp"
              alt="Illustration of finding things to do on phones"
              priority={true}
              loading="eager"
              onLoad={() => handler()}
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
