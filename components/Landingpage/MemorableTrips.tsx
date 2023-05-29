import Image from 'next/image'
import styles from '@/styles/componentStyles/MemorableTrips.module.css'
import { HandlerProps } from '@/Types/types'
import { exampleAttractions } from '@/constants/constants'
import dynamic from 'next/dynamic'

function MemorableTrips({ handler }: HandlerProps) {
  const ScrollablePicsHorizantal = dynamic(() => import('@/components/ScrollablePicsHorizantal'))
  const NavigationButton = dynamic(() => import('@/components/NavigationButton'))

  return (
    <div className={styles.memorableContainer}>
      <p className={styles.contentHeader}>Make your trips memorable!</p>
      <div className={styles.imageContainer}>
        <Image
          width={300}
          height={300}
          layout="responsive"
          src="/twoPhonesBlueBackground.webp"
          alt="Illustration of finding things to do on phones"
          onLoad={() => handler()}
        />
      </div>
      <div className={styles.scrollableContainer}>
        <ScrollablePicsHorizantal pictureArray={exampleAttractions} />
      </div>
      <p className={styles.boldedLastSentence}>
        These are just some examples of places to see. There are many more to explore!
      </p>
      <NavigationButton href="/map" displayText="Get Started" />
    </div>
  )
}

export default MemorableTrips
