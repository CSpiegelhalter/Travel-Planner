import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import FindLocation, { Location } from '@/hooks/FindLocation'
import Map from '@/components/Map'
import Button from '@/components/Button'
import SideBar from '@/components/SideBar'
import PlaceComponent from '@/components/PlaceComponent'
import { locationLabels } from '@/constants/constants'

export default function Home() {
  //These are the two states used to get our location for centering
  const [location, setLocation] = useState({ lat: 51.5072, lng: 0.1276 })
  const [city, setCity] = useState('london')
  const [hasLoaded, setHasLoaded] = useState(false)
  //This state is used to show (or not show) the information sidebar
  const [showInfo, setShowInfo] = useState(false)

  // this is to hold onto our data that we get from our api call
  const [placesInfo, setPlacesInfo] = useState()

  // this sets our location State using this function
  async function setUserLocation() {
    const value: Location = await FindLocation()
    console.log(value)
    setLocation({ lat: value.lat, lng: value.lng })
    setCity(value.city)
    return value
  }

  //This is a useEffect used to make sure that the users location is grabbed only once when the page is rendered
  useEffect(() => {
    if (!hasLoaded) {
      setUserLocation()
      setHasLoaded(true)
    }
  }, [])

  // this is our key and how we load in our google maps api
  const key: any = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
  })

  //sets the space where the map should be to loading... if it is not yet rendered
  if (!isLoaded) return <div>Loading...</div>

  // Sidebar handler
  //This is the function that calls the PointsOfInterest api and flips the state to show or not show the information sidebar

  const callPointsOfInterestsApi = async (typeOfInterest: string) => {
    const params = {
      city: city,
      point: typeOfInterest,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(params),
    }
    const data = await fetch('/api/pointsOfInterest', options)
    setPlacesInfo(await data.json())
    setShowInfo(true)
  }

  //our final return for home
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavBar />
        <div className="info-container">
          <div className="pointsOfInterest-filter-container">
            <div className="pointsOfInterest-btn-container">
              {Object.keys(locationLabels).map((point, index) => (
                <Button key={index} name="here" handler={callPointsOfInterestsApi} value={point} />
              ))}
            </div>
            <PlaceComponent />
          </div>
          {showInfo && <SideBar placesInfo={placesInfo} />}
          {location ? <Map location={location} /> : <Map location={{ lat: 51.5072, lng: 0.1276 }} />}
        </div>
      </main>
    </>
  )
}
