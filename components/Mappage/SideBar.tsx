import dynamic from 'next/dynamic'
import styles from '@/styles/componentStyles/SideBar.module.css'
import { testTrips } from '@/constants/test'
import Dropdown from '../Dropdown'

function SideBar(props: any) {
  const Card = dynamic(() => import('@/components/Card'))

  

  return (
    <div className={styles.infoSidebar}>
      <header className={styles.sidebarHeader} >
        <div className={styles.dropdownContainer}>
        <Dropdown 
        trips={Object.keys(testTrips)}
        placeHolder={'Select a trip!'}
        />
        </div>
        <button className={styles.closeBtn} onClick={() => props.setShowInfo(false)}>
          X
        </button>
      </header>
      <div className={styles.btnContainer}>
      </div>
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
  )
}

export default SideBar
