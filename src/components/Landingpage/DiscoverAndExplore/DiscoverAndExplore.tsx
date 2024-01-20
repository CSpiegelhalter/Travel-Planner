import LoadingComponent from '@/components/Loading/LoadingComponent/LoadingComponent'
import Image from 'next/image'
import { Suspense } from 'react'
import styles from './DiscoverAndExplore.module.css'

function DiscoverAndExplore() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <div className={styles.discoverContainer}>
        <div className={styles.imageContainer}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            className={styles.twoPhones}
            priority={true}
            loading="eager"
            src="/static/twoPhonesLandingpage.svg"
            alt="Two phones showing off location finder"
          />
        </div>
        <div className={styles.otherContentContainer}>
          <div className={styles.pin}>
            <Image
              width="0"
              height="0"
              sizes="100vw"
              priority={true}
              loading="eager"
              className={styles.pinImage}
              src="/static/tiltedPin.webp"
              alt="Map pin"
            />
          </div>
          <p className={styles.contentHeader}>Discover and Explore</p>
          <p className={styles.contentDescription}>
            Whether you're an adventurous explorer, a cultural enthusiast, or a food lover, our tool is designed to help
            you discover unique and captivating destinations. With just a few clicks, you'll unlock a world of
            extraordinary places, each offering distinct adventures, memories, and experiences.
          </p>
          <div className={styles.dotContainer}>
            <Image
              width="0"
              height="0"
              sizes="100vw"
              priority={true}
              loading="eager"
              className={styles.dottedLineImage}
              src="/static/dottedLine.webp"
              alt="Travel route dotted line"
            />
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default DiscoverAndExplore
