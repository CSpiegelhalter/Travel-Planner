import { useEffect, useState } from 'react'
import styles from '@/styles/pageStyles/trips.module.css'
import dynamic from 'next/dynamic'

function trips(props: any) {
  const testData =
  {
    Paris: [
      {
        name: "Eiffel Tower",
        address: "123 somewhere in Paris",
        rating: "4",
        reviewCount: "123",
        descriptionShort: "Could be bigger",
        descritptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        lat: "1.232",
        lng: "1.232",
        attractionType: "Tourist",
        imageUrl: "https://lh5.googleusercontent.com/p/AF1QipOnJHzIOu1VUvkTX0GKjmqK-NdgXWJEUa8m2YPd=s549-k-no"
      },
      {
        name: "Louve",
        address: "321 somewhere in Paris",
        rating: "4.5",
        reviewCount: "123",
        description: "Art Art Art",
        lat: "2.123",
        lng: "2.123",
        attractionType: "Museum",
        imageUrl: "https://lh5.googleusercontent.com/p/AF1QipOnJHzIOu1VUvkTX0GKjmqK-NdgXWJEUa8m2YPd=s549-k-no"


      },
      {
        name: "NotreDam",
        address: "456 Somewhere in paris",
        rating: "2",
        reviewCount: "123",
        description: "Big building",
        lat: "4.32",
        lng: "4.34",
        attractionType: "Building",
        imageUrl: "https://lh5.googleusercontent.com/p/AF1QipOnJHzIOu1VUvkTX0GKjmqK-NdgXWJEUa8m2YPd=s549-k-no"
      }
    ],
    abcdefghijklmno: [
      {
        name: "BrandenBurg Gate",
        address: "123 berlin",
        rating: "4",
        reviewCount: "34",
        description: "A gate",
        lat: "4.44",
        lng: "5.55",
        attractionType: "Gate",
        imageUrl: "https://lh5.googleusercontent.com/p/AF1QipOnJHzIOu1VUvkTX0GKjmqK-NdgXWJEUa8m2YPd=s549-k-no"


      },
      {
        name: "Video Game Museum",
        address: "123 pewpew Dr",
        rating: "5",
        reviewCount: "420",
        description: "Cool videogames",
        lat: "4.20",
        lng: "6.9",
        attractionType: "Museum",
        imageUrl: "https://lh5.googleusercontent.com/p/AF1QipOnJHzIOu1VUvkTX0GKjmqK-NdgXWJEUa8m2YPd=s549-k-no"
      }
    ]
  }

  const TripDisplay = dynamic(() => import('@/components/Tripspage/TripDisplay'))
  const NavBar = dynamic(() => import('@/components/NavBar'))
  const Modal = dynamic(() => import('@/components/Modal'))
  const TripInfoCard = dynamic(() => import('@/components/Tripspage/TripInfoModal'))
  const TripsDefault = dynamic(() => import('@/components/Tripspage/TripsDefault'))
  const CreateTrip = dynamic(() => import('@/components/Tripspage/CreateTrip'))


  const [modalDisplay, setModalDisplay] = useState()
  const [tripData, setTripData] = useState({})


  useEffect(() => {
    // we will call the api to check localStorage and if not then ping DB here
    if (testData) {
      setTripData(testData)
    }
    else setTripData(false)
    // setTripData(false)
  }, [])

  return (
    <div className={styles.mainContainer}>
      <header className={styles.tripHeader}>
        <h1>My Trips:</h1>
        <CreateTrip setModalDisplay={setModalDisplay} />

      </header>
      {tripData ?
        <div className={styles.cardContainer}>
          {Object.entries(tripData).map(([key, value]: any, index) => (
            <TripDisplay key={index} name={key} value={value} length={value.length} tripdata={tripData} />
          ))}
        </div>
        :
        <TripsDefault setModalDisplay={setModalDisplay} />
      }
      {modalDisplay && <Modal setIsOpen={setModalDisplay} />}
      <NavBar trips={true} map={false} bucketList={false} profile={false} />
    </div>
  )
}

export default trips
