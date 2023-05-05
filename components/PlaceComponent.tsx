import React, { useRef } from 'react'
import { StandaloneSearchBox, useLoadScript } from '@react-google-maps/api'

const PlaceComponent = () => {
  // storing the libraries and the keys into variable so that they have the correct types
  const libraries: Array<'places'> = ['places']
  const key: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!

  //useRef that holds the value of the searched itmes even if the page re-renders
  const inputRef: any = useRef()

  //This is a google Hook that will allow us to ping the api easier, pass in the key and libraries, and also tell us whether the api is loaded
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: key,
    libraries: libraries,
  })

  //This handles if the place has changed meaning that you have selected one of the suggestions.It currently just console.logs out the information that it is given
  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces()
    if (place) {
      console.log(place.formatted_address)
      console.log(place.geometry.location.lat())
      console.log(place.geometry.location.lng())
    }
  }

  //The final return that checks if isLoaded is true and if so renders the searchBox  and inputs.
  return isLoaded ? (
    <StandaloneSearchBox onLoad={(ref) => (inputRef.current = ref)} onPlacesChanged={handlePlaceChanged}>
      <input type="text" className="formControl" placeholder="Enter Location" />
    </StandaloneSearchBox>
  ) : (
    <div>Loading...</div>
  )
}

export default PlaceComponent
