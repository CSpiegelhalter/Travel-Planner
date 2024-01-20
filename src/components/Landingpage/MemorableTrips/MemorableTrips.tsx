import styles from './MemorableTrips.module.css'
import { exampleAttractions } from '@/constants/constants'
import dynamic from 'next/dynamic'

function MemorableTrips() {
  const ScrollablePicsHorizantal = dynamic(
    () => import('@/components/ScrollablePicsHorizantal/ScrollablePicsHorizantal'),
  )
  const NavigationButton = dynamic(() => import('@/components/NavigationButton/NavigationButton'))

  return (
    <div className={styles.memorableContainer}>
      <p className={styles.contentHeader}>Make your trips memorable!</p>
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
