import { latLng, Location } from "@/Types/types"

const FindLocation = async () => {

  // Creating a promise out of the function
  let getLocationPromise: Promise<latLng> = new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position?.coords?.latitude
        const lng = position?.coords?.longitude

        // Resolving the values which I need
        resolve({
          lat,
          lng,
        })
      })
    } else {
      reject("your browser doesn't support geolocation API")
    }
  })

  // this sets the center ot the lat and lng of the user that gets returned at the end to center the map
  const center: any = async () => {
    let location: latLng = await getLocationPromise
    let center = {
      lat: location?.lat,
      lng: location?.lng,
    }
    return center
  }

  // this is a function that uses reverse geocoding in order to get the city name for the parameter in the pointsOfInterest api
  const cityLocator = async (latLng: Location) => {
    //setting the lat and long that we will pass into the reverse geocoding api
    const lat = latLng?.lat
    const lng = latLng?.lng
    //reverse geocoding api used to return an array with all the information on the location of the coordinates given
    const reverseGeoCodeApi = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    const cityInformation = await fetch(reverseGeoCodeApi)
    const locationInfo = await cityInformation.json()
    //this is the variable that we will store the city name in
    let city: string = ''
    //pass the first position of the array (which is an array) into a forEach function to check each of the address_components properties
    locationInfo?.results?.[0]?.address_components?.forEach(function (element: any) {
      //this first if is to check for the postal_town value that a lot of countries use for their city but not all of them
      if (element?.types?.[0] === 'postal_town') {
        city = element?.long_name
        return
      }
      //this should catch all cities that do not have the postal_town attribute
      else if (element?.types?.[0] == 'locality' && element?.types?.[1] == 'political') {
        city = element?.long_name
        return
      }
    })
    //if the city is not found it will give an error and also an alert that we were unable to locate the city
    if (!city) {
      console.error('City name not found')
    }

    return city
  }

  //setting the variables that we will use in order to build the object that is returned
  const userLatLng = await center()
  const userCity = await cityLocator(userLatLng)

  //final returned object
  return { lat: userLatLng?.lat, lng: userLatLng?.lng, city: userCity }
}

export default FindLocation
