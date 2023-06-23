import dynamic from 'next/dynamic'
import styles from '@/styles/componentStyles/SideBar.module.css'
import { testTrips } from '@/constants/test'
import { useState } from 'react'

function SideBar(props: any) {
  const Card = dynamic(() => import('@/components/Card'))
  const Dropdown = dynamic(() => import('@/components/Dropdown'))
  const Modal = dynamic(() => import('@/components/Modal'))

  const [createNewTrip, setCreateNewTrip] = useState(false)
  const [selectedValue, setSelectedValue] = useState(null)

  return (
    <div className={styles.infoSidebar}>
      <header className={styles.sidebarHeader}>
        <div className={styles.dropdownContainer}>
          <Dropdown
            trips={Object.keys(testTrips)}
            placeHolder={'Select a trip!'}
            createNewTrip={setCreateNewTrip}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
        </div>
        <button className={styles.closeBtn} onClick={() => props.setShowInfo(false)}>
          X
        </button>
      </header>
      {createNewTrip && <Modal setIsOpen={setCreateNewTrip} setSelectedValue={setSelectedValue} />}
      <div className={styles.cardContainer}>
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
                className="tripsCardDarkBG"
                tripName={selectedValue}
              />
            ))
          : null}
      </div>
    </div>
  )
}

export default SideBar
