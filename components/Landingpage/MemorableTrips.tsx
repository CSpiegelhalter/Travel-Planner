import Image from 'next/image'
import ScrollablePicsHorizantal from '../ScrollablePicsHorizantal'
import styles from '../../styles/componentStyles/MemorableTrips.module.css'
import Button from '../Button'
import { RouterProps } from '@/Types/types'
import { exampleAttractions } from '@/constants/constants'

function MemorableTrips({ router }: RouterProps) {
  
  return (
    <div className={styles.memorableContainer}>
      <p className={styles.contentHeader}>Make your trips memorable!</p>
      <div className={styles.imageContainer}>
      <Image
        width={300}
        height={300}
        layout="responsive"
        src="/twoPhonesBlueBackground.png"
        alt="Illustration of finding things to do on phones"
      />
      </div>
      <div className={styles.scrollableContainer}>
      <ScrollablePicsHorizantal pictureArray={exampleAttractions} />
      </div>
      <p className={styles.boldedLastSentence}>These are just some examples of places to see. There are many more to explore!</p>
      <Button
        style={{ marginTop: '60px' }}
        name="getStarted"
        value="Get Started"
        handler={() => router.push('/home')}
        disabled=""
      />
    </div>
  )
}

export default MemorableTrips
