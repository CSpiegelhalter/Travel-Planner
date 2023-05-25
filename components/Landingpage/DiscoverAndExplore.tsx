import Image from 'next/image'
import styles from '@/@/styles/componentStyles/DiscoverAndExplore.module.css'
import { HandlerProps } from '@/Types/types'

function DiscoverAndExplore({ handler }: HandlerProps) {
  return (
    <div className={styles.discoverContainer}>
      <Image
        width={50}
        height={50}
        layout="responsive"
        src="/twoPhonesLandingpage.webp"
        alt="Two phones showing off location finder"
        loading="lazy"
        onLoad={() => handler()}
      />
      <Image className={styles.pin} width={60} height={60} loading="lazy" src="/tiltedPin.svg" alt="Map pin" />
      <p className={styles.contentHeader}>Discover and Explore</p>
      <p className={styles.contentDescription}>
        Whether you're an adventurous explorer, a cultural enthusiast, or a food lover, our tool is designed to help you
        discover unique and captivating destinations. With just a few clicks, you'll unlock a world of extraordinary
        places, each offering distinct adventures, memories, and experiences.
      </p>
      <div className={styles.dotContainer}>
        <Image
          width={50}
          height={50}
          loading="lazy"
          layout="responsive"
          src="/dottedLine.svg"
          alt="Travel route dotted line"
        />
      </div>
    </div>
  )
}

export default DiscoverAndExplore
