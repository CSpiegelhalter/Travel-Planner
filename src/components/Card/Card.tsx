import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useUser } from '@auth0/nextjs-auth0/client'
import styles from './Card.module.css'
import { Card, locationObj } from '@/Types/types'
import Image from 'next/image'
import { addToBucketList, ratingsTrimmer } from '@/helperFunctions/helperFunction'

function Card({
  name,
  className,
  hideButtons,
  rating,
  address,
  lat,
  descriptionLong,
  lng,
  attractionType,
  reviewCount,
  descriptionShort,
  imageUrl,
}: Card) {
  const Button = dynamic(() => import('@/components/Button'))
  const MoreInfoModal = dynamic(() => import('@/components/MoreInfoModal/MoreInfoModal'))

  const { user } = useUser()
  const userId: number | any = process.env.NEXT_PUBLIC_AUTH0_USER_ID
    ? user?.[process.env.NEXT_PUBLIC_AUTH0_USER_ID]
    : null

  const [disabled, setDisabled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const timeStamp = new Date().getTime()

  const params: locationObj = {
    userId: userId,
    name,
    rating,
    address,
    lat,
    lng,
    attractionType,
    reviewCount,
    descriptionShort,
    imageUrl,
    timeStamp: timeStamp,
  }

  const addToBucketListHandler = async () => {
    await addToBucketList(userId, params)
  }

  useEffect(() => {}, [isOpen])

  const showMoreInfo = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {isOpen && (
        <MoreInfoModal
          imageUrl={imageUrl}
          name={name}
          rating={rating}
          address={address}
          lat={lat}
          lng={address}
          reviewCount={reviewCount}
          attractionType={attractionType}
          descriptionShort={descriptionShort}
          descriptionLong={descriptionLong}
          setIsOpen={setIsOpen}
          className={className}
        />
      )}
      <div className={styles.cardContainer}>
        <div className={styles.fillContainer} onClick={() => showMoreInfo()}>
          <Image src={imageUrl} alt={name} fill={true} className={styles.image} />
        </div>
        <div className={styles.cardContentContainer}>
          <div className={styles.infoContainer} onClick={() => showMoreInfo()}>
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
        {!hideButtons && (
          <div className={styles.cardBtnContainer}>
            <Button
              handler={addToBucketListHandler}
              name="cardBtn"
              buttonText="cardBtnText"
              value="Save Place"
              disabled={disabled}
            ></Button>
          </div>
        )}
      </div>
    </>
  )
}

export default Card
