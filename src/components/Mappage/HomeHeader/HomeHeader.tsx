import styles from './HomeHeader.module.css'
import { HomeHeader } from '@/Types/types'
import { locationButtons } from '@/constants/constants'
import dynamic from 'next/dynamic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HomeHeader({ isLoaded, setUserLocation, user }: HomeHeader) {
  const Hamburger = dynamic(() => import('@/components/Hamburger/Hamburger'))
  const PlaceComponent = dynamic(() => import('@/components/Mappage/PlaceComponent/PlaceComponent'))

  return (
    <header className={styles.mainHeader}>
      <div className={styles.placeContainer}>
        <PlaceComponent
          isLoaded={isLoaded}
          style={{ paddingRight: '0', marginRight: '0' }}
          setUserLocation={setUserLocation}
        />
        <Hamburger user={user} />
      </div>
      <div className={styles.btnContainer}>
        {locationButtons.map((point, index) => (
          <button className={styles.attractionsFilterBtn} key={index} onClick={() => console.log(point.name)}>
            <FontAwesomeIcon className={styles.icon}  icon={point.img as any} />
            <p className={styles.buttonText}>{point.name}</p>
          </button>
        ))}
      </div>
    </header>
  )
}

export default HomeHeader
