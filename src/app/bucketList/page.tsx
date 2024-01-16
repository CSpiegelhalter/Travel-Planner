'use client'

import styles from './bucketList.module.css'
import dynamic from 'next/dynamic'
import { testLocations } from '@/constants/test'
import { useEffect, useState } from 'react'
import { locationObj } from '@/Types/types'
import ProfileDefault from '@/components/Profilepage/ProfileDefault'
import { useUser } from '@auth0/nextjs-auth0/client'
import { grabDataToDisplay } from '@/helperFunctions/grabDataToDisplay'
import LoadingComponent from '@/components/Loading/LoadingComponent/LoadingComponent'

function bucketList() {
  const NavBar = dynamic(() => import('@/components/Navbar/NavBar'))
  const BucketListDefault = dynamic(() => import('@/components/BucketListPage/BucketListDefault'))
  const Card = dynamic(() => import('@/components/Card/Card'))

  const [locationData, setLocationData] = useState<locationObj[]>([])
  const [display, setDisplay] = useState(false)
  const testData = testLocations
  const { user, isLoading } = useUser()
  const userId: number | any = process.env.AUTH0_USER_ID ? user?.[process.env.AUTH0_USER_ID] : null

  useEffect(() => {
    if (!!user) {
      grabDataToDisplay(userId, 'trips').then((val) => {
        if (val) {
          setLocationData(val)
        }
      })
      if (locationData.length > 0) {
        setDisplay(true)
      }
    }
  }, [isLoading, user])

  //I AM FOR TESTING!
  useEffect(() => {
    setLocationData(testData)
    setDisplay(true)
  })

  if (isLoading) {
    return <LoadingComponent />
  }

  return (
    <>
      {user ? (
        <div className={styles.mainContainer}>
          <header className={styles.header}>
            <h1 className={styles.headerCaption}>My Bucketlist:</h1>
          </header>
          <>
            {locationData.length ? (
              <div className={styles.scrollableArea}>
                {locationData.map((location: any, index: number) => (
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
                    key={index}
                    className="bucketListCardDarkBG"
                  />
                ))}
              </div>
            ) : (
              <BucketListDefault />
            )}
          </>
        </div>
      ) : (
        <ProfileDefault />
      )}
      <NavBar bucketList={true} map={false} trips={false} profile={false} />
    </>
  )
}

export default bucketList
