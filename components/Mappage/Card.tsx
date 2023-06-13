import React, { useState } from 'react'
import Button from '@/components/Button'
import { useUser } from '@auth0/nextjs-auth0/client'
import styles from '@/styles/componentStyles/Card.module.css'
import { Card } from '@/Types/types'
import Image from 'next/image';


function Card(props: Card) {

  const [disabled, setDisabled] = useState(false)
  const locationData = [props?.name, props?.rating, props?.address, props?.lat, props?.lng, props?.attractionType, props?.ratingsCount]

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
    setDisabled(true)
  }

  const clickHandler = async () => {
    props.setIsOpen(true)
    props.setShowInfo(false)
  }
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={props.imageUrl}
          alt={props.name}
          fill
        />
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.infoContent}>{props.name}</p>
        <p className={styles.infoContent}>{props.address}</p>
        <p className={styles.infoContent}>{props.descriptionShort}</p>
      </div>
      <div className={styles.cardBtnContainer}>
        <Button handler={addAttractionToDB as any} name="card-btn-addToProfile" value="Add to profile!" disabled={disabled}></Button>
        <Button handler={() => clickHandler()} name="card-btn-addToTrip" value="Add to trip!" disabled=''></Button>
      </div>
    </div>
  )
}

export default Card
