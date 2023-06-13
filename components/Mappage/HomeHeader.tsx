import styles from '@/styles/componentStyles/HomeHeader.module.css'
import { callPointsOfInterestsApi } from '@/helperFunctions/helperFunction'
import { HomeHeader, PointsOfInterestApiParams } from '@/Types/types'
import { locationButtons } from '@/constants/constants'
import dynamic from 'next/dynamic'

function HomeHeader(props: HomeHeader) {
  const Hamburger = dynamic(() => import('@/components/Hamburger'))
  const Button = dynamic(() => import('@/components/Button'))
  const PlaceComponent = dynamic(() => import('@/components/Mappage/PlaceComponent'))


  const params: PointsOfInterestApiParams = {
    callback: props.callback,
    city: props.city,
  }
  return (
    <header className={styles.mainHeader}>
      <div className={styles.placeContainer}>
        <PlaceComponent
          isLoaded={props.isLoaded}
          style={{ paddingRight: '0', marginRight: '0' }}
          locationHandler={props.locationHandler}
          displayHandler={props.displayHandler}
        />
        <Hamburger
          user={props.user}
        />
      </div>
      <div className={styles.btnContainer}>
        {locationButtons.map((point, index) => (
          <Button
            key={index}
            name="attractionsFilterBtn"
            handler={callPointsOfInterestsApi}
            value={point.name}
            img={point.img}
            alt={point.alt}
            params={{ typeOfInterest: point, ...params }}
            disabled=""
          />
        ))}
      </div>
    </header>
  )
}

export default HomeHeader
