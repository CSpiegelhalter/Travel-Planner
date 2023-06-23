import { useEffect, useState } from 'react'
import styles from '@/styles/pageStyles/trips.module.css'
import dynamic from 'next/dynamic'
import { testLocations, testTrips } from '@/constants/test'
import { useUser } from '@auth0/nextjs-auth0/client'
import ProfileDefault from '@/components/Profilepage/ProfileDefault'
import { grabDataToDisplay } from '@/helperFunctions/grabDataToDisplay'
import LoadingPage from '@/components/LoadingPage'
import { addToBucketList, addToTrip } from '@/helperFunctions/helperFunction'

function trips(props: any) {
  const TripDisplay = dynamic(() => import('@/components/Tripspage/TripDisplay'))
  const NavBar = dynamic(() => import('@/components/NavBar'))
  const Modal = dynamic(() => import('@/components/Modal'))
  const TripsDefault = dynamic(() => import('@/components/Tripspage/TripsDefault'))
  const CreateTrip = dynamic(() => import('@/components/Tripspage/CreateTrip'))
  const { user, isLoading } = useUser()
  // const userId: number | any = process.env.NEXT_PUBLIC_AUTH0_USER_ID
  //   ? user?.[process.env.NEXT_PUBLIC_AUTH0_USER_ID]
  //   : null

  //TESTING
  const userId = 3

  console.log(userId, typeof userId)

  const [modalDisplay, setModalDisplay] = useState(false)
  const [tripData, setTripData] = useState({})
  const [tripDisplay, setTripDisplay] = useState(false)

  useEffect(() => {
    // SET TO TRUE IF YOU ARE TESTING
    const testingComponent = true

    if (testingComponent) {
      setTripData(testTrips)
      setTripDisplay(true)
    } else {
      if (!!user) {
        grabDataToDisplay(userId, 'trips').then((val) => {
          setTripData(val)
        })
        if (Object.keys(tripData).length > 0) {
          setTripDisplay(true)
        }
      }
    }
  }, [isLoading, user, tripData])

  if (isLoading) {
    return <LoadingPage />
  }

  // ONLY FOR TESTING LOCAL STORAGE
  function testLocalStorage() {
    const randomIndex = Math.floor(Math.random() * (testLocations.length - 1))

    // addToBucketList(`${userId}`, testLocations[randomIndex])
    // addToTrip(`${userId}`, testLocations[randomIndex], 'Pariii2.0')

  }

  return (
    <>
      {user ? (
        <div className={styles.mainContainer}>
          <div className={styles.topContainer}>
            <header className={styles.tripHeader}>
              <p className={styles.header}>My Trips:</p>
              {/* <button onClick={() => testLocalStorage()}>TEST HERE BOI</button> */}

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
          {modalDisplay && <Modal setIsOpen={setModalDisplay} setSelectedValue={null} />}
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
