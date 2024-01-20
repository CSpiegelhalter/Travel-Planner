import { useEffect, useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'
import styles from './AttractionCard.module.css'
import { Location } from '@/Types/types'
import Image from 'next/image'
import { ratingsTrimmer, truncateString } from '@/helperFunctions/helperFunction'
import dynamic from 'next/dynamic'

function AttractionCard({
  name,
  rating,
  address,
  lat,
  descriptionLong,
  lng,
  attractionType,
  reviewCount,
  descriptionShort,
  imageUrl,
  id,
  saved,
}: Location) {
  const MoreInfoModal = dynamic(() => import('@/components/MoreInfoModal/MoreInfoModal'))

  const { user } = useUser()
  const userId: number | any = process.env.NEXT_PUBLIC_AUTH0_USER_ID
    ? user?.[process.env.NEXT_PUBLIC_AUTH0_USER_ID]
    : null

  const [selectedLocation, setSelectedLocation] = useState<Location>()

  const save = async (_params: Location) => {
    // await saveAttraction(userId, params)
  }

  const populateModal = (params: Location) => {
    setSelectedLocation(params)
    // await saveAttraction(userId, params)
  }

  useEffect(() => {}, [selectedLocation])
  const [disabled, setDisabled] = useState(false)

  const params: Location = {
    userId: userId,
    name,
    rating,
    saved,
    address,
    lat,
    lng,
    attractionType,
    reviewCount,
    descriptionShort,
    descriptionLong,
    imageUrl,
    id,
  }

  return (
    <>
      {selectedLocation && <MoreInfoModal selectedLocation={selectedLocation} populateModal={populateModal} />}
      <div className={styles.contain}>
        <div className={styles.heart}>
          <Image
            className={styles.image}
            src={saved ? '/heart-filled.svg' : '/heart-outline.svg'}
            onClick={() => (save ? save(params) : console.log('No save function available'))}
            fill={true}
            alt={saved ? 'Unsave' : 'Save'}
          />
        </div>
        <div className={styles.cardContainer} onClick={() => populateModal(params)}>
          <div className={styles.cardContentHeader}>
            <div className={styles.fillContainer}>
              <Image src={imageUrl} alt={name} fill={true} className={styles.image} />
            </div>
            <div className={styles.info}>
              <p className={styles.placeName}>{name}</p>
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
          </div>
          <p className={styles.descriptionShort}>{truncateString(descriptionShort)}</p>
        </div>
      </div>
    </>
  )
}

export default AttractionCard
