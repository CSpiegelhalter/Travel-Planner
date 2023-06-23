import { useState } from 'react'
import dynamic from 'next/dynamic'
import { useUser } from '@auth0/nextjs-auth0/client'
import styles from '@/styles/componentStyles/Card.module.css'
import { Card } from '@/Types/types'
import Image from 'next/image'
import { ratingsTrimmer } from '@/helperFunctions/helperFunction'

function Card(props: Card) {
  const Button = dynamic(() => import('@/components/Button'))
  const MoreInfoModal = dynamic(() => import('@/components/MoreInfoModal'))

  const [disabled, setDisabled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const locationData = [
    props?.name,
    props?.rating,
    props?.address,
    props?.lat,
    props?.lng,
    props?.attractionType,
    props?.reviewCount,
  ]

  const addAttractionToDB = async () => {
    const params = {
      userId: locationData?.[8],
      name: locationData?.[0],
      rating: locationData?.[1],
      address: locationData?.[2],
      lat: locationData?.[3],
      lng: locationData?.[4],
      attraction_type: locationData?.[5],
      rating_count: locationData?.[6],
      email: locationData?.[7],
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(params),
    }
    const data = await fetch('/api/saveAttraction', options)
    // setDisabled(true)
  }

  // const clickHandler = async () => {
  //   props.setIsOpen(true)
  //   props.setShowInfo(false)
  // }

  const showMoreInfo = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.cardContainer}>
      {isOpen && (
        <MoreInfoModal
          imageUrl={props.imageUrl}
          name={props.name}
          rating={props.rating}
          address={props.address}
          lat={props.lat}
          lng={props.address}
          reviewCount={props.reviewCount}
          attractionType={props.attractionType}
          descriptionShort={props.descriptionShort}
          descriptionLong={props.descriptionLong}
          setIsOpen={setIsOpen}
          className={props.className}
        />
      )}

      <div className={styles.imageContainer}>
        <div className={styles.fillContainer} onClick={() => showMoreInfo()}>
          <Image src={props.imageUrl} alt={props.name} fill />
        </div>
      </div>
      <div className={styles.cardContentContainer}>
        <div className={styles.infoContainer} onClick={() => showMoreInfo()}>
          <div className={styles.cardContentHeader}>
            <p className={styles.placeName}>{props.name}</p>
            {props.rating ? (
              <div className={styles.reviewContainer}>
                <p className={styles.rating}>{props.rating}</p>
                <Image src="/star.svg" alt="a start" height={15} width={15} />
                <p className={styles.reviewCount}>({ratingsTrimmer(props.reviewCount)})</p>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <p className={styles.descriptionShort}>{props.descriptionShort}</p>
          <p className={styles.showMore}>...show more</p>
          {!props.hideButtons && (
            <div className={styles.cardBtnContainer}>
              <Button
                handler={addAttractionToDB as any}
                name="cardBtn"
                buttonText="cardBtnText"
                value="Add to profile!"
                disabled={disabled}
              ></Button>
              <Button
                // handler={() => clickHandler()}
                name="cardBtn"
                buttonText="cardBtnText"
                value="Add to trip!"
                disabled=""
              ></Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
