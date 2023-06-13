import styles from '@/styles/pageStyles/bucketList.module.css'
import dynamic from 'next/dynamic'
import { testLocations } from '@/constants/test'
import { useEffect, useState } from 'react'
import BucketListDisplay from '@/components/BucketListPage/BucketListDisplay'


function bucketList(props: any) {
  const NavBar = dynamic(() => import('@/components/NavBar'))
  const BucketListDefault = dynamic(() => import('@/components/BucketListPage/BucketListDefault'))

  const [locationData, setLocationData] = useState({})
  const [display, setDisplay] = useState(false)
  const testData = testLocations

  useEffect(() => {
   if(testData){
    setLocationData(testData)
    setDisplay(true)
  }
  }, [])
  

  return (
    <div className={styles.mainContainer}>
      <header className={styles.header}>
        <h1 className={styles.headerCaption}>My Bucketlist:</h1>
      </header>

      {display ?
        <BucketListDisplay locationsDetails={locationData}/>
        :
        <BucketListDefault />
      }
      <NavBar bucketList={true} map={false} trips={false} profile={false} />
    </div>
  )
}

export default bucketList
