import Image from 'next/image'
import styles from '../../styles/componentStyles/DiscoverAndExplore.module.css'

function DiscoverAndExplore() {
  return (
    <div className={styles.discoverContainer}>
      <Image
        width={50}
        height={50}
        layout="responsive"
        src="/twoPhonesLandingpage.png"
        alt="Two phones showing off location finder"
      />
      <Image className={styles.pin} width={60} height={60} src="/tiltedPin.svg" alt="Map pin" />
      <p className={styles.contentHeader}>Discover and Explore</p>
      <p className={styles.contentDescription}>
        Whether you're an adventurous explorer, a cultural enthusiast, or a food lover, our tool is designed to help you
        discover unique and captivating destinations. With just a few clicks, you'll unlock a world of extraordinary
        places, each offering distinct adventures, memories, and experiences.
      </p>
      <div className={styles.dotContainer}>
        <Image width={50} height={50} layout="responsive" src="/dottedLine.svg" alt="Travel route dotted line" />
      </div>
    </div>
  )
}

export default DiscoverAndExplore
