import styles from './MoreInfoModal.module.css'
import Image from 'next/image'
import { ratingsTrimmer } from '@/helperFunctions/helperFunction'

function MoreInfoModal({
  setIsOpen,
  className,
  imageUrl,
  name,
  rating,
  reviewCount,
  attractionType,
  address,
  descriptionShort,
  descriptionLong,
}: any) {
  return (
    <>
      <div className={className} onClick={() => setIsOpen(false)}></div>
      <div className={styles.absoluteContainer}>
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
          x
        </button>
        <div className={styles.mainContainer}>
          <div className={styles.fillContainer}>
            <Image
              src={imageUrl}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.header}>
              <p className={styles.nameLabel}>{name}</p>
              {rating ? (
                <div className={styles.reviewContainer}>
                  <p className={styles.rating}>{rating}</p>
                  <Image src="/star.svg" alt="a start" height={15} width={15} />
                  <p className={styles.reviewCount}>({ratingsTrimmer(reviewCount)})</p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <p className={styles.sideInfo}>{attractionType}</p>
            <address className={styles.sideInfo}>{address}</address>

            <p className={styles.content}>{descriptionShort}</p>

            <p className={styles.content}>{descriptionLong}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MoreInfoModal
