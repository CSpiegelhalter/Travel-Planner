import styles from '@/styles/componentStyles/LocationDetailsCard.module.css'
import Image from 'next/image'
import { useState } from 'react'

function LocationDetailsCard(props: any) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className={styles.detailsContainer}>
      {props.locationDetails.map((value: any, index: number) => (
        <div key={index} className={styles.locationContainer}>
          <div className={styles.locationFlexContainer}>
            <div className={styles.imageContainer}>
              <Image src={value.imageUrl} alt={value.name} fill />
            </div>
            <ul className={styles.tripList}>
              <li className={`${styles.listItem} ${styles.title}`}>{value.name}</li>
              <li className={styles.listItem}>{value.descriptionShort}</li>
              <li className={styles.listItem}>{value.address}</li>
              <li className={styles.listItem}>{value.rating} stars</li>
              <li className={styles.listItem}>{value.reviewCount}</li>
              {showDetails && <li className={styles.listItem}>{value.descritptionLong}</li>}
            </ul>
          </div>
          {showDetails ? (
            <div className={styles.moreDetailsContainer} onClick={() => setShowDetails((prevVal) => !prevVal)}>
              <p className={styles.seeMoreDetails}>Show less details..</p>
            </div>
          ) : (
            <div className={styles.moreDetailsContainer} onClick={() => setShowDetails((prevVal) => !prevVal)}>
              <p className={styles.seeMoreDetails}>See more details..</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default LocationDetailsCard
