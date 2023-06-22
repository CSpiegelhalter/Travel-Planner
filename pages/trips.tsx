import { useEffect, useState } from 'react'
import styles from '@/styles/pageStyles/trips.module.css'
import dynamic from 'next/dynamic'
import { testTrips } from '@/constants/test'
import { useUser } from '@auth0/nextjs-auth0/client'
import ProfileDefault from '@/components/Profilepage/ProfileDefault'
import { grabDataToDisplay } from '@/helperFunctions/grabDataToDisplay'

function trips(props: any) {
  const TripDisplay = dynamic(() => import('@/components/Tripspage/TripDisplay'))
  const NavBar = dynamic(() => import('@/components/NavBar'))
  const Modal = dynamic(() => import('@/components/Modal'))
  const TripsDefault = dynamic(() => import('@/components/Tripspage/TripsDefault'))
  const CreateTrip = dynamic(() => import('@/components/Tripspage/CreateTrip'))
  const { user } = useUser()
  const userId: number | any = process.env.NEXT_PUBLIC_AUTH0_USER_ID ? user?.[process.env.NEXT_PUBLIC_AUTH0_USER_ID] : null
  // console.log(process.env.NEXT_PUBLIC_AUTH0_USER_ID)
  // const userId: number = user?.['https://example.com/id'] as number
  console.log(userId, typeof userId)

  const [modalDisplay, setModalDisplay] = useState(false)
  const [tripData, setTripData] = useState({})
  const [tripDisplay, setTripDisplay] = useState(false)

  useEffect(() => {
    if (!!user) {
      grabDataToDisplay(userId, 'trips').then((val) => {
        setTripData(val)
      })
      if(Object.keys(tripData).length > 0 ){
        setTripDisplay(true)
      }
    }
  }, [])


  return (
    <>
      {user ? (
        <div className={styles.mainContainer}>
          <div className={styles.topContainer}>
            <header className={styles.tripHeader}>
              <p className={styles.header}>My Trips:</p>
              <CreateTrip setModalDisplay={setModalDisplay} />
            </header>
            {tripDisplay ? (
              <div className={styles.cardContainer}>
                {Object.entries(tripData).map(([key, value]: any, index) => (
                  <TripDisplay key={index} name={key} value={value} length={value.length} tripdata={tripData} />
                ))}
              </div>
            ) : (
              <TripsDefault setModalDisplay={setModalDisplay} />
            )}
          </div>
          {modalDisplay && <Modal setIsOpen={setModalDisplay} />}
          <div className={styles.bottomContainer}>
            <button onClick={() => setModalDisplay(true)} className={styles.createTripBtn}>
              Create Trip
            </button>
          </div>
        </div>
      ) : (
        <ProfileDefault />
      )}
      <NavBar trips={true} map={false} bucketList={false} profile={false} />
    </>
  )
}

export default trips
