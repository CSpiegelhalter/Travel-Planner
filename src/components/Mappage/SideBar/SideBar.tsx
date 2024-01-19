import dynamic from 'next/dynamic'
import styles from './SideBar.module.css'

function SideBar(props: any) {
  const AttractionCard = dynamic(() => import('@/components/AttractionCard/AttractionCard'))

  return (
    <>
      <div className={styles.infoSidebar}>
        <header className={styles.sidebarHeader}>
          <button className={styles.closeBtn} onClick={() => props.setShowInfo(false)}>
            X
          </button>
        </header>
        <div className={styles.cardContainer}>
          {props.placesInfo
            ? props.placesInfo.map((place: any, index: number) => (
                <AttractionCard
                  key={index}
                  imageUrl={place.imageUrl}
                  name={place.name}
                  rating={place.rating}
                  address={place.address}
                  reviewCount={place.reviewCount}
                  lat={place.lat}
                  lng={place.lng}
                  attractionType={place.types}
                  id={place.id}
                  descriptionShort={place.descriptionShort}
                  descriptionLong={place.descriptionLong}
                />
              ))
            : null}
        </div>
      </div>
    </>
  )
}

export default SideBar
