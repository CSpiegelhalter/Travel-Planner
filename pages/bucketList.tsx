import styles from '@/styles/pageStyles/bucketList.module.css'
import dynamic from 'next/dynamic'
import { testLocations } from '@/constants/test'
import { useEffect, useState } from 'react'
import BucketListDisplay from '@/components/BucketListPage/BucketListDisplay'
import ProfileDefault from '@/components/Profilepage/ProfileDefault'
import { useUser } from '@auth0/nextjs-auth0/client'
import { grabDataToDisplay } from '@/helperFunctions/grabDataToDisplay'

function bucketList(props: any) {
  const NavBar = dynamic(() => import('@/components/NavBar'))
  const BucketListDefault = dynamic(() => import('@/components/BucketListPage/BucketListDefault'))

  const [locationData, setLocationData] = useState({})
  const testData = testLocations
  const { user } = useUser()
  const userId: number | any = process.env.AUTH0_USER_ID ? user?.[process.env.AUTH0_USER_ID] : null

  useEffect(() => {
    if (!!user) {
      grabDataToDisplay(userId, 'bucketList').then((val) => {
        setLocationData(val)
      })
    }
  }, [])

  return (
    <>
      <NavBar bucketList={true} map={false} trips={false} profile={false} />

      {user ? (
        <div className={styles.mainContainer}>
          <div className={styles.contentContainer}>
            <header className={styles.header}>
              <h1 className={styles.headerCaption}>My Bucketlist:</h1>
            </header>
            {!!locationData ? <BucketListDisplay locationsDetails={locationData} /> : <BucketListDefault />}
          </div>
        </div>
      ) : (
        <ProfileDefault />
      )}
    </>
  )
}

export default bucketList
