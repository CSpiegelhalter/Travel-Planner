import { useState } from 'react'
import dynamic from 'next/dynamic'
import styles from '@/styles/componentStyles/SideBar.module.css'

function SideBar(props: any) {
  const Card = dynamic(() => import('@/components/Card'))

  return (
    <div className={styles.infoSidebar}>
      <div className={styles.btnContainer}>
        <button className={styles.closeBtn} onClick={() => props.setShowInfo(false)}>
          Close
        </button>
      </div>
      <div className={styles.cardContainer} >
      {props.placesInfo
        ? props.placesInfo.map((place: any, index: number) => (
            <Card
              key={index}
              imageUrl={place.imageUrl}
              name={place.name}
              rating={place.rating}
              address={place.address}
              reviewCount={place.reviewCount}
              lat={place.lat}
              lng={place.lng}
              attractionType={place.types}
              descriptionShort={place.descriptionShort}
              descriptionLong={place.descriptionLong}
              setIsOpen={props.setIsOpen}
              setShowInfo={props.setShowInfo}
              setLocationDetails={props.setLocationDetails}
              setModalDisplay={props.setModalDisplay}
              className='tripsCardDarkBG'
            />
          ))
        : null}
        </div>
    </div>
  )
}

export default SideBar
