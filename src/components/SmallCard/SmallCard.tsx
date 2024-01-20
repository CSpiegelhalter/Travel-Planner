import Image from 'next/image'
import { SmallCardProps } from '@/Types/types'
import styles from './SmallCard.module.css'

function SmallCard({ attraction }: SmallCardProps) {
  const { src, alt, name, location } = attraction
  return (
    <div className={styles.smallCardContainer}>
      <Image src={src} width="0" height="0" sizes="100vw" alt={alt} className={styles.image} />
      <div className={styles.cardImageOverlay}></div>
      <div className={styles.descriptionContainer}>
        <p className={styles.name}>{name}</p>
        <p className={styles.location}>{location}</p>
      </div>
    </div>
  )
}

export default SmallCard
