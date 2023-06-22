import Head from 'next/head'
import styles from '@/styles/pageStyles/mapTool.module.css'
import { useState, useEffect } from 'react'
import { useLoadScript } from '@react-google-maps/api'
import FindLocation from '@/hooks/FindLocation'
import Map from '@/components/Mappage/MapComponent'
import { libraries } from '@/constants/constants'
import { useUser } from '@auth0/nextjs-auth0/client'
import { Location } from '@/Types/types'
import LoadingPage from '@/components/LoadingPage'
import dynamic from 'next/dynamic'
//DELETE ME I AM FOR TESTING
import { testLocations } from '@/constants/test'

export default function Home() {
  const [modalDisplay, setModalDisplay] = useState(false) //CHANGE TO FALSE\
  const [locationDetails, setLocationDetails] = useState({})

  //These are the two states used to get our location for centering
  const [location, setLocation] = useState({ lat: 51.5072, lng: 0.1276 })
  const [city, setCity] = useState('london')
  const [hasLoaded, setHasLoaded] = useState<boolean>(false)
  //This state is used to show (or not show) the information sidebar
  const [showInfo, setShowInfo] = useState<boolean>(false)
  // this is to hold onto our data that we get from our api call
  const [placesInfo, setPlacesInfo] = useState()
  //auth0 user to allow us to know if we are logged in or not
  const { user, error, isLoading } = useUser()
  const userId =process.env.AUTH0_USER_ID ?  user?.[process.env.AUTH0_USER_ID] : null
  //State for the Modal
  const [isOpen, setIsOpen] = useState(false)
  // this sets our location State using this function
  async function setUserLocation(location: any) {
    const defaultLocation: Location | undefined = await FindLocation()
    if (!!location) {
      setLocation({ lat: location.lat, lng: location.lng })
      setCity(location.city)
    } else if (!!defaultLocation) {
      setLocation({ lat: defaultLocation.lat, lng: defaultLocation.lng })
      setCity(defaultLocation.city)
    } else {
      //this is a default location that we chose
      setLocation({ lat: 51.5072, lng: 0.1276 })
    }
  }
  //used to change the t/f for what the sidebar will show
  const handleSavedTripsDisplay = async () => {
    setShowInfo(true)
  }
  //This is a useEffect used to make sure that the users location is grabbed only once when the page is rendered
  useEffect(() => {
    if (!hasLoaded) {
      setUserLocation(null)
      setHasLoaded(true)
    }
  }, [])
  // this is our key and how we load in our google maps api
  const key: any = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
    libraries: libraries,
  })
  //sets the space where the map should be to loading... if it is not yet rendered
  if (!isLoaded) {
    return <LoadingPage />
  }

  const updatePlaces = (data: any) => {
    setPlacesInfo(data)
    setShowInfo(true)
  }

  const Modal = dynamic(() => import('@/components/Modal'))
  const SideBar = dynamic(() => import('@/components/Mappage/SideBar'))
  const HomeHeader = dynamic(() => import('@/components/Mappage/HomeHeader'))
  const NavBar = dynamic(() => import('@/components/NavBar'))
  const SideBarModal = dynamic(() => import('@/components/Mappage/SideBarModal'))

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Head>
        <title>Discover Locations</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        {modalDisplay && <SideBarModal locationDetails={locationDetails} modalDisplay={setModalDisplay} />}
        <div className={styles.mapScreenContainer}>
          <div className={styles.mapContents}>
            <Map location={location} />
            <div className={styles.infoContainer}>
              <HomeHeader
                isLoaded={isLoaded}
                handleSavedTripsDisplay={handleSavedTripsDisplay}
                user={user}
                callback={updatePlaces}
                city={city}
                locationHandler={setUserLocation}
                displayHandler={handleSavedTripsDisplay}
              />
              {showInfo && (
                <SideBar
                  /*we to change this back changed for testing below*/
                  placesInfo={testLocations}
                  setIsOpen={setIsOpen}
                  setShowInfo={setShowInfo}
                  setLocationDetails={setLocationDetails}
                  setModalDisplay={setModalDisplay}
                />
              )}
            </div>
          </div>
          <NavBar map={true} trips={false} bucketList={false} profile={false} />
        </div>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
      </main>
    </>
  )
}
