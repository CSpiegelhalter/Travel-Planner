import { useEffect, useState } from "react"

const FindLocation = async () => {
    interface Location {
        latitude: number,
        longitude: number
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
                    latitude: lat,
                    longitude: lng
                })
            })

        } else {
            reject("your browser doesn't support geolocation API")
        }
    })


   
    const center: any = async () => {
        let location: Location = await getLocationPromise
        let center = {
            lat: location.latitude,
            lng: location.longitude
        }
        return center
    }

    const userLocation = await center()
    
    return userLocation

}

export default FindLocation
