
const FindLocation = async () => {
    interface Location {
        lat: number,
        lng: number
    }

    let lat
    let lng

    // Creating a promise out of the function
    let getLocationPromise: Promise<Location> = new Promise((resolve, reject) => {
        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(function (position) {

                lat = position.coords.latitude
                lng = position.coords.longitude

                // Resolving the values which I need
                resolve({
                    lat,
                    lng
                })
            })

        } else {
            reject("your browser doesn't support geolocation API")
        }
    })


   
    const center: any = async () => {
        let location: Location = await getLocationPromise
        let center = {
            lat: location.lat,
            lng: location.lng
        }
        return center
    }

    const cityLocator = async (latLng: Location) => {
        const lat = latLng.lat
        const lng = latLng.lng
        const reverseGeoCodeApi = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
        const city = await fetch(reverseGeoCodeApi)
        console.log(city)
        console.log(await city.json())
    }

    const userLatLng = await center()
    await cityLocator(userLatLng)
    const userCity = 'paris'
    
    return {lat: userLatLng.lat, long: userLatLng.lng, city: userCity}

}

export default FindLocation
