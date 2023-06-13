import { PointsOfInterestApiParams } from '@/Types/types';


export function handleStateChange(event: any, param: any) {
    param(event.target.value)
}

export const callPointsOfInterestsApi = async (args: PointsOfInterestApiParams) => {
    console.log('HERE ARE THE ARGS')
    console.log(args)
    const { city, typeOfInterest, callback } = args
    const params = {
        city: city,
        point: typeOfInterest,
    }
    const options = {
        method: 'POST',
        body: JSON.stringify(params),
    }
    const data = await fetch('/api/pointsOfInterest', options)
    const dataJson = await data.json()
    console.log('bouta hit callback')
    console.log('Here is the POI data')
    console.log(dataJson)

    if (!!callback) {
        callback(dataJson)
    }
    // setPlacesInfo(await data.json())
    // setShowInfo(true)
}


//   async function setUserLocation(setLocation, setCity,FindLocation ) {
//     const value: Location | undefined= await FindLocation
//     if (!!value) {
//       setLocation({ lat: value.lat, lng: value.lng })
//       setCity(value.city)
//     }
//     else{
//       setLocation({ lat: 51.5072, lng: 0.1276 })
//     }
//   }

