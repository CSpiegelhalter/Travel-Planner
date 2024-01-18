'use client'

import Head from 'next/head'
import styles from './mapTool.module.css'
import { useState, useEffect } from 'react'
import { useLoadScript } from '@react-google-maps/api'
import FindLocation from '@/hooks/FindLocation'
import Map from '@/components/Mappage/MapComponent/MapComponent'
import { libraries, sessionStoragePlacesKey } from '@/constants/constants'
import { UserProvider, useUser } from '@auth0/nextjs-auth0/client'
import { Location } from '@/Types/types'
import LoadingComponent from '@/components/Loading/LoadingComponent/LoadingComponent'
import dynamic from 'next/dynamic'
//DELETE ME I AM FOR TESTING
import { testLocations } from '@/constants/test'
import Link from 'next/link'
import Image from 'next/image'
import HomeHeader from '@/components/Mappage/HomeHeader/HomeHeader'

export default function Home() {
  const [modalDisplay, setModalDisplay] = useState(false) //CHANGE TO FALSE\

  //These are the two states used to get our location for centering
  const [location, setLocation] = useState({ lat: 51.5072, lng: 0.1276 })

  const [hasLoaded, setHasLoaded] = useState<boolean>(false)
  //This state is used to show (or not show) the information sidebar
  const [showInfo, setShowInfo] = useState<boolean>(false)
  // this is to hold onto our data that we get from our api call
  const [places, setPlaces] = useState()

  const [offset, setOffset] = useState(0)

  const { user, isLoading } = useUser()
  const userId: number | any = process.env.NEXT_PUBLIC_AUTH0_USER_ID
    ? user?.[process.env.NEXT_PUBLIC_AUTH0_USER_ID]
    : null

  //State for the Modal
  const [isOpen, setIsOpen] = useState(false)

  async function setUserLocation(location: any) {
    // Reset the storage when we lookup a new place
    sessionStorage.removeItem(sessionStoragePlacesKey)

    if (!!location) {
      setLocation({ lat: location.lat, lng: location.lng })
      return
    }
    const userLocation = await FindLocation()
    if (!!userLocation) {
      setLocation({ lat: userLocation.lat, lng: userLocation.lng })
      return
    }
    //this is a default location that we chose
    setLocation({ lat: 51.5072, lng: 0.1276 })
  }

  const updatePlaces = (data: any) => {
    setPlaces(data)
    setShowInfo(true)
  }

  useEffect(() => {
    if (!!places) return

    // Get saved places if we do not already have places (ex. we navigated to another page and back)
    const storageData = sessionStorage.getItem(sessionStoragePlacesKey)
    if (!storageData) return

    const savedData = JSON.parse(storageData)
    const savedPlaces = savedData.places
    const savedOffset = Number(savedData.offset)

    setPlaces(savedPlaces)
    setOffset(savedOffset)
  }, [])

  useEffect(() => {
    if (!location) return

    // Gets places near the set location
    const queryParams = new URLSearchParams({
      lat: location.lat.toString(),
      lng: location.lng.toString(),
      offset: offset.toString(),
    })
    fetch(`api/getPlaces/${queryParams}`).then((res) => {
      console.log(res.ok)

      if (!res.ok) return

      res.json().then((data) => {
        const placesResults = data.places
        const newOffset = data.offset + data.limit

        setOffset(newOffset)
        updatePlaces(placesResults)

        const storageObject = {
          offset: newOffset,
          places: placesResults,
        }
        const currentSessionStorage = sessionStorage.getItem(sessionStoragePlacesKey)

        // Combine what is in there now with what we just retrieved
        if (!!currentSessionStorage) {
          const currentStorageData = JSON.parse(currentSessionStorage)
          storageObject.places = [...currentStorageData.places, ...storageObject.places]
        }

        sessionStorage.setItem(sessionStoragePlacesKey, JSON.stringify(storageObject))
      })
    })
  }, [location])

  //This is a useEffect used to make sure that the users location is grabbed only once when the page is rendered
  useEffect(() => {
    // TODO: Change how we store in session storage to include lat and long.
    // Do a check here for session storage, if we have it just call setLocation here
    // with the lat and lng from session storage
    if (!hasLoaded) {
      setUserLocation(null)
      setHasLoaded(true)
    }
    console.log(user)
  }, [isLoading, user])

  // this is our key and how we load in our google maps api
  const key: any = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
    libraries: libraries,
  })
  //sets the space where the map should be to loading... if it is not yet rendered
  if (!isLoaded) {
    return <LoadingComponent />
  }

  const Modal = dynamic(() => import('@/components/Modal/Modal'))
  const SideBar = dynamic(() => import('@/components/Mappage/SideBar/SideBar'))

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Head>
        <title>Discover Locations</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className={styles.mapScreenContainer}>
          <div className={styles.mapContents}>
            <Map location={location} />
            <div className={styles.infoContainer}>
              <HomeHeader isLoaded={isLoaded} user={user} setUserLocation={setUserLocation} />
              {showInfo && (
                <SideBar
                  /*we to change this back changed for testing below*/
                  placesInfo={testLocations}
                  setIsOpen={setIsOpen}
                  setShowInfo={setShowInfo}
                  setModalDisplay={setModalDisplay}
                />
              )}
            </div>
          </div>
          <div className={styles.logo}>
            <Link href={'/'}>
              <Image src="/Logo.webp" alt="Logo" width={60} height={60} />
            </Link>
          </div>
        </div>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
      </main>
    </>
  )
}
