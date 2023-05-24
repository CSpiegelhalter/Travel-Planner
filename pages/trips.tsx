import { useEffect, useState } from 'react'
import styles from '../styles/pageStyles/trips.module.css'
import Image from 'next/image'
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
        description: "Could be bigger",
        lat: "1.232",
        lng: "1.232",
        attractionType: "Tourist",
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

      }
    ],
    Germany: [
      {
        name: "BrandenBurg Gate",
        address: "123 berlin",
        rating: "4",
        reviewCount: "34",
        description: "A gate",
        lat: "4.44",
        lng: "5.55",
        attractionType: "Gate",

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
      }
    ]
  }

  const TripDisplay = dynamic(() => import('@/components/TripDisplay'))
  const NavBar = dynamic(() => import('@/components/NavBar'))
  const Modal = dynamic(() => import('@/components/Modal'))
  const Button = dynamic(() => import('@/components/Button'))
  const [modalDisplay, setModalDisplay] = useState()
  const [tripData, setTripData] = useState({})

  useEffect(() => {
    //we will call the api to check localStorage and if not then ping DB here
    if (testData) {
      setTripData(testData)
    }
    else setTripData(false)
  }, [])


  return (
    <div className={styles.mainContainer}>
      <header className={styles.tripHeader}>
        <h1>My Trips:</h1>
      </header>
      {tripData ? 
        <TripDisplay data={tripData}/>
        : 
        <section className={styles.mainContent}>
          <div className={styles.contentContainer}>
            <div className={styles.imageContainer}>
              <Image src="/walkingUpStairsIllustration.webp" alt="walking up stairs" fill />
            </div>
            <div className={styles.captionContainer}>
              <p className={styles.imageCaption}>You don't have any trips saved. Create a trip to get started!</p>
            </div>
          </div>
          <div className={styles.btnContainer}>
            <Button name="createTripBtn" value="Create New Trip" disabled handler={setModalDisplay} params={true} />
          </div>
        </section>
      }

      {modalDisplay && <Modal setIsOpen={setModalDisplay} />}
      {/* <NavBar trips={true} map={false} bucketList={false} profile={false} /> */}
    </div>
  )
}

export default trips
