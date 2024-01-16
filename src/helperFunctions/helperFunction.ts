import { PointsOfInterestApiParams, locationObj } from '@/Types/types'
import { LocalStorageService } from '@/lib/localStorage'

export function handleStateChange(event: any, param: any) {
  param(event.target.value)
}
//WE NEED TO KILL THIS?
export const callPointsOfInterestsApi = async (args: PointsOfInterestApiParams) => {

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

export const addToBucketList = async (userId: string, locationObject: locationObj) => {
  try {
    const localStorageInstance = new LocalStorageService(`${userId}`)
    const shouldSaveToDatabase = await localStorageInstance.saveToBucketList(locationObject)

    if (shouldSaveToDatabase) {
      // TODO - Add save to database
    }
  } catch (e) {
    console.log('Failed to save to bucketlist... ', e)
  }
}

export const addToTrip = async (userId: string, locationObject: locationObj, tripName: string) => {
  try {
    const localStorageInstance = new LocalStorageService(`${userId}`)
    const shouldSaveToDatabase = await localStorageInstance.saveToTrip(locationObject, tripName)

      if (shouldSaveToDatabase) {
        // TODO - Add save to database
      }
    }
    //TODO - hit the database and update local storage
   catch (e) {
    console.log('Failed to save to trip... ', e)
  }
}

export const timeStampValidator = (currentTime: number, timeStamp: number) => {
  
  const difference = currentTime - timeStamp
  if (difference < 3600000) {
    return true
  }
  return false
}
