import styles from './TripInfoModal.module.css'
import dynamic from 'next/dynamic'

function TripInfoModal(props: any) {
  const Card = dynamic(() => import('@/components/Card/Card'))
  return (
    <div>
      <div className={styles.darkBG} onClick={() => props.setShowDetails(false)} />
      <div className={styles.centered}>
        <div className={styles.modalContainer}>
          <div className={styles.modalHeader}>
            <h1 className={styles.heading}>View Trip Locations!</h1>
          </div>
          <button className={styles.closeBtn} onClick={() => props.setShowDetails(false)}>
            x
          </button>
          <div className={styles.cardContainer}>
            {props.locationDetails &&
              props.locationDetails.map((_location: any) => (
                <></>
                // <Card
                //   name={location.name}
                //   rating={location.rating}
                //   address={location.address}
                //   lat={location.lat}
                //   lng={location.lng}
                //   attractionType={location.attractionType}
                //   reviewCount={location.reviewCount}
                //   imageUrl={location.imageUrl}
                //   descriptionShort={location.descriptionShort}
                //   descriptionLong={location.descriptionLong}
                // className={'tripsCardDarkBG'}
                //   />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TripInfoModal
