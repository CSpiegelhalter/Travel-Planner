import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useUser } from '@auth0/nextjs-auth0/client'
import styles from './Card.module.css'
import { Location } from '@/Types/types'
import Image from 'next/image'
import { ratingsTrimmer } from '@/helperFunctions/helperFunction'

function Card({
  name,
  id,
  rating,
  address,
  lat,
  descriptionLong,
  lng,
  attractionType,
  reviewCount,
  descriptionShort,
  imageUrl,
  saved
}: Location) {
  const MoreInfoModal = dynamic(() => import('@/components/MoreInfoModal/MoreInfoModal'))

  const [selectedLocation, setSelectedLocation] = useState<Location>()

  const { user } = useUser()
  const userId: number | any = process.env.NEXT_PUBLIC_AUTH0_USER_ID
    ? user?.[process.env.NEXT_PUBLIC_AUTH0_USER_ID]
    : null

  const params: Location = {
    userId: userId,
    saved,
    name,
    rating,
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

  useEffect(() => {}, [selectedLocation])

  const remove = async (_params: Location) => {
    // await saveAttraction(userId, params)
  }

  const populateModal = (params: Location) => {
    setSelectedLocation(params)
  }

  return (
    <>
      {selectedLocation && <MoreInfoModal selectedLocation={selectedLocation} populateModal={populateModal} />}

      <div className={styles.cardContainer}>
        <div className={styles.fillContainer} onClick={() => populateModal(params)}>
          <Image src={imageUrl} alt={name} fill={true} className={styles.image} />
        </div>
        <div className={styles.cardContentContainer}>
          <div className={styles.infoContainer} onClick={() => populateModal(params)}>
            <div className={styles.cardContentHeader}>
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
            <p className={styles.descriptionShort}>{descriptionShort}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
