import { ScrollableProps, Attraction, SmallCardProps } from '@/Types/types'
import SmallCard from './SmallCard'
import styles from '../styles/componentStyles/ScrollablePicsHorizontal.module.css'

function ScrollablePicsHorizantal({ pictureArray }: ScrollableProps) {
  return (
    <div className={styles.scrollableContainer}>
      {pictureArray?.length &&
        pictureArray.map((item: Attraction, index: number) => <SmallCard attraction={item} key={index} />)}
    </div>
  )
}

export default ScrollablePicsHorizantal
