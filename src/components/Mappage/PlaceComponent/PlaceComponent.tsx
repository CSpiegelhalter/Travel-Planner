import { useEffect, useRef } from 'react'
import { StandaloneSearchBox } from '@react-google-maps/api'
import styles from './PlaceSearchInput.module.css'

const PlaceComponent = ({ setUserLocation, isLoaded }: any) => {
  //useRef that holds the value of the searched itmes even if the page re-renders
  const inputRef: any = useRef()
  //This handles if the place has changed meaning that you have selected one of the suggestions.It currently just console.logs out the information that it is given
  const handlePlaceChanged = () => {
    // Grabs the whole array not destructered so that we can do an if statement on it
    const placeArr = inputRef?.current?.getPlaces()
    if (placeArr?.[0]) {
      const [place] = placeArr
      const location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        city: place.formated_address,
      }
      setUserLocation(location)
    }
  }

  useEffect(() => {
    handlePlaceChanged()
  }, [isLoaded])

  if (!isLoaded) return <div></div>

  return (
    <StandaloneSearchBox onLoad={(ref) => (inputRef.current = ref)} onPlacesChanged={handlePlaceChanged}>
      <input type="text" className={styles.formControl} placeholder="What are you searching for?" />
    </StandaloneSearchBox>
  )
}

export default PlaceComponent
