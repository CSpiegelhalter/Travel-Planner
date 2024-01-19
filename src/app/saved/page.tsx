'use client'

import styles from './Saved.module.css'
import dynamic from 'next/dynamic'
import { testLocations } from '@/constants/test'
import { useEffect, useState } from 'react'
import { Location } from '@/Types/types'
import ProfileDefault from '@/components/Profilepage/ProfileDefault'
import { useUser } from '@auth0/nextjs-auth0/client'
import LoadingComponent from '@/components/Loading/LoadingComponent/LoadingComponent'

function Saved() {
  const Card = dynamic(() => import('@/components/Card/Card'))
  const NothingSavedPage = dynamic(() => import('@/components/NothingSavedPage/NothingSavedPage'))

  const [locationData, setLocationData] = useState<Location[]>([])
  const { user, isLoading } = useUser()
  const userId: number | any = process.env.AUTH0_USER_ID ? user?.[process.env.AUTH0_USER_ID] : null

  useEffect(() => {
    if (!!userId) {
      fetch(`api/getSavedPlaces/${userId}`).then((res) => {
        res.json().then((val) => {
          const places = val.message
          if (places) {
            setLocationData(places)
          }
        })
      })
    }
  }, [isLoading, user])

  //I AM FOR TESTING!
  useEffect(() => {
    // setLocationData([])
    setLocationData(testLocations)
  }, [])

  if (isLoading) {
    return <LoadingComponent />
  }

  return (
    <>
      {user ? (
        <>
          <div className={styles.mainContainer}>
            <header>
              <h1 className={styles.headerCaption}>Saved Places:</h1>
            </header>
            <>
              {locationData?.length > 0 ? (
                <div className={styles.contentContainer}>
                  <div className={styles.innercontent}>
                    {locationData?.map((location: any, index: number) => (
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
                        key={index}
                        id={location.id}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className={styles.noSavedContainer}>
                  <NothingSavedPage />
                </div>
              )}
            </>
          </div>
        </>
      ) : (
        <ProfileDefault />
      )}
    </>
  )
}

export default Saved
