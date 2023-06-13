import { useState } from 'react'
import Card from './Card'
import styles from '@/styles/componentStyles/SideBar.module.css'
import Image from 'next/image';


function SideBar(props: any) {

  console.log(props.placesInfo)

  return (

    <div className={styles.infoSidebar}>
        <div className={styles.btnContainer}>
          <button className={styles.closeBtn} onClick={() => props.setShowInfo(false)}>
            Close
          </button>
        </div>
          {props.placesInfo ? props.placesInfo.map((place: any, index: number) => (
            <Card
              key={index}
              imageUrl={place.imageUrl}
              name={place?.name}
              rating={place?.rating}
              address={place?.address}
              ratingsCount={place?.reviewCount}
              lat={place?.lat}
              lng={place?.lng}
              attractionType={place?.types}
              descriptionShort={place?.descriptionShort}
              descriptionLong={place?.descriptionLong}
              setIsOpen={props.setIsOpen}
              setShowInfo={props.setShowInfo}
            />
            )) : null}
          {/* <Card name="test" rating={69} address="42 wallaby way Sydney Aus" ratingsCount={420} setIsOpen={props.setIsOpen} setShowInfo={props.setShowInfo} lat={12.3123} lng={12.3123} attractionType={{}} /> */}
    </div>
  )
}

export default SideBar
