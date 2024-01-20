import Image from 'next/image'
import styles from './DiscoverAndExplore.module.css'

function DiscoverAndExplore() {
  return (
    <div className={styles.discoverContainer}>
      <div className={styles.imageContainer}>
        <Image
          width="0"
          height="0"
          sizes="100vw"
          className={styles.twoPhones}
          src="/twoPhonesLandingpage.svg"
          alt="Two phones showing off location finder"
          loading="lazy"
        />
      </div>
      <div className={styles.otherContentContainer}>
        <div className={styles.pin}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            loading="lazy"
            className={styles.pinImage}
            src="/tiltedPin.webp"
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
            loading="lazy"
            className={styles.dottedLineImage}
            src="/dottedLine.webp"
            alt="Travel route dotted line"
          />
        </div>
      </div>
    </div>
  )
}

export default DiscoverAndExplore
