import { ScrollableProps, Attraction } from '@/Types/types'
import SmallCard from '../SmallCard/SmallCard'
import styles from './ScrollablePicsHorizontal.module.css'

function ScrollablePicsHorizantal({ pictureArray }: ScrollableProps) {
  return (
    <div className={styles.scrollableContainer}>
      {pictureArray?.length &&
        pictureArray.map((item: Attraction, index: number) => <SmallCard attraction={item} key={index} />)}
    </div>
  )
}

export default ScrollablePicsHorizantal
