import styles from './MoreInfoModal.module.css'
import Image from 'next/image'
import { ratingsTrimmer } from '@/helperFunctions/helperFunction'
import { MoreInfoModal } from '@/Types/types'

function MoreInfoModal({ selectedLocation, populateModal }: MoreInfoModal) {
  const { imageUrl, id, name, rating, address, reviewCount, attractionType, descriptionShort, descriptionLong } =
    selectedLocation
  return (
    <>
      <div className={styles.bucketListCardDarkBG} onClick={() => populateModal(undefined)}></div>
      <div className={styles.absoluteContainer}>
        <button className={styles.closeBtn} onClick={() => populateModal(undefined)}>
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
                  <Image src="/static/star.svg" alt="a start" height={15} width={15} />
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
