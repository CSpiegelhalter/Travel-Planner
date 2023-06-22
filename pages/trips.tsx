import { useEffect, useState } from 'react'
import styles from '@/styles/pageStyles/trips.module.css'
import dynamic from 'next/dynamic'
import { testTrips } from '@/constants/test'
import { useUser } from '@auth0/nextjs-auth0/client'
import ProfileDefault from '@/components/Profilepage/ProfileDefault'

function trips(props: any) {
  const TripDisplay = dynamic(() => import('@/components/Tripspage/TripDisplay'))
  const NavBar = dynamic(() => import('@/components/NavBar'))
  const Modal = dynamic(() => import('@/components/Modal'))
  const TripsDefault = dynamic(() => import('@/components/Tripspage/TripsDefault'))
  const CreateTrip = dynamic(() => import('@/components/Tripspage/CreateTrip'))
  const { user } = useUser()

  const [modalDisplay, setModalDisplay] = useState(false)
  const [tripData, setTripData] = useState({})

  useEffect(() => {
    // we will call the api to check localStorage and if not then ping DB here
    if (testTrips) {
      setTripData(testTrips)
    } else setTripData(false)
    // setTripData(false)
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
           {tripData ? (
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
 )}

export default trips
