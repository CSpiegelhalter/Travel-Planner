import Image from 'next/image'
import { SmallCardProps } from '@/Types/types'
import styles from '@/styles/componentStyles/SmallCard.module.css'

function SmallCard({ attraction }: SmallCardProps) {
  const { src, alt, name, location } = attraction
  return (
    <div className={styles.smallCardContainer}>
      <div className={styles.cardImageOverlay}>
        <Image fill src={src} alt={alt} style={{ zIndex: '-1', borderRadius: '25px' }} />
        <div className={styles.descriptionContainer}>
          <p className={styles.name}>{name}</p>
          <p className={styles.location}>{location}</p>
        </div>
      </div>
    </div>
  )
}

export default SmallCard
