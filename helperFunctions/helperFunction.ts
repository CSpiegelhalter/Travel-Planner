import { PointsOfInterestApiParams } from '@/Types/types'

export function handleStateChange(event: any, param: any) {
  param(event.target.value)
}
//WE NEED TO KILL THIS?
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

export const ratingsTrimmer = (reviewCount: string) => {
  try {
    if (reviewCount.includes(',')) {
      if (reviewCount.length > 3 && reviewCount.length <= 6) {
        let newCount = reviewCount.split(',')
        return newCount[0].trim() + 'K'
      } else {
        let newCount = reviewCount.split(',')
        console.log(newCount)
        return `${newCount[0]}${newCount[1]}K`
      }
    } else if (reviewCount.length > 3) {
      let newCount = ''
      for (let i = 0; i < reviewCount.length - 3; i++) {
        newCount += reviewCount[i]
      }
      return newCount + 'K'
    } else return reviewCount
  } catch {
    return null
  }
}

