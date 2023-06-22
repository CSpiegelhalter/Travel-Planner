import styles from '@/styles/pageStyles/bucketList.module.css'
import dynamic from 'next/dynamic'
import { testLocations } from '@/constants/test'
import { useEffect, useState } from 'react'
import { locationObj } from '@/Types/types'

function bucketList(props: any) {
  const NavBar = dynamic(() => import('@/components/NavBar'))
  const BucketListDefault = dynamic(() => import('@/components/BucketListPage/BucketListDefault'))
  const Card = dynamic(() => import('@/components/Card'))

  const [locationData, setLocationData] = useState<locationObj[]>([])
  const [display, setDisplay] = useState(false)
  const testData = testLocations

  useEffect(() => {
    if (testData) {
      setLocationData(testData)
      setDisplay(true)
    }
  }, [])

  return (
    <div className={styles.mainContainer}>
      <header className={styles.header}>
        <h1 className={styles.headerCaption}>My Bucketlist:</h1>
      </header>
      <div className={styles.scrollableArea}>
        {display ? (
          locationData.map((location: any, index: number) => (
            <Card
              name={location.name}
              rating={location.rating}
              address={location.address}
              lat={location.lat}
              lng={location.lng}
              attractionType={location.attractionType}
              reviewCount={location.reviewCount}
              imageUrl={location.imageUrl}
              descriptionShort={location.descriptionShort}
              descriptionLong={location.descriptionLong}
              hideButtons={true}
            />
          ))
        ) : (
          <BucketListDefault />
        )}
      </div>
      <NavBar bucketList={true} map={false} trips={false} profile={false} />
    </div>
  )
}

export default bucketList
