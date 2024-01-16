import { LocalStorageKeyType, locationObj } from "@/Types/types"
import { timeStampValidator } from "@/helperFunctions/helperFunction"

// const setLocalStorage = async (userId, data) => {
//     await grabUserAttractions()
//     localStorage.setItem(userId, data)
// }

//   const grabUserAttractions = async () => {
//     const params = {
//       userId: user?.['https://example.com/id']
//     }
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(params)
//     }
//     const data = await fetch('/api/grabAttractionsFromDB', options)
//     const attractionsArray = await data.json()
//     setAttractions(attractionsArray)
//   }

export class LocalStorageService {
    //Storage is a value that is provided by the localStorage API
    storage: Storage
    key: string
    data?: string

    constructor(key: string, data?: string) {
        this.key = key
        this.data = data
        this.storage = localStorage
    }

    setItem(key: string, value: any) {
        
        if(value){
            this.storage.setItem(key, JSON.stringify(value));
        }
    }

    getItem(key: string): any {
        const value = this.storage.getItem(key);

        if (value) {
            return JSON.parse(value);
        }
        return null;
    }

    /**
     * @param callback pass it an api to be called if the data is is not found in local storage
     * @param keyType  whichever data table needs to be hit (either trips or bucketList as of 6/21/23)
     */ 
    public async fetchStorageData(callback: () => Promise<Response>, keyType: LocalStorageKeyType) {
        const formattedKey = `${this.key}-${keyType}`
        const data = this.getItem(formattedKey)
        const currentTime = new Date().getTime()

        if (!!data && !!timeStampValidator(currentTime, data.timeStamp)) {
            return data.locationData
        }
        //this is the data that we are getting from our DB
        const fetchedData = await callback()
        const dataToStore = await fetchedData.json()
        //this is the object with the timeStamp for us to refer to
        const stampedData = {
            locationData: dataToStore,
            timestamp: new Date().getTime()
        }
        this.setItem(this.key, stampedData)
        return stampedData.locationData
    }

    /**
     * @param data Location data we want to save to local storage
     * @returns Boolean to determine to save to database or not
     */ 
    public async saveToBucketList(data: locationObj): Promise<boolean> {
        const formattedKey = `${this.key}-bucketList`
        const currentData = this.getItem(formattedKey)
        
        if (!currentData) {
            const newBucketList = {
                locationData : [data],
                timeStamp: new Date().getTime()
            }
            this.setItem(formattedKey, newBucketList)
            return true
        } else {
            // Find any duplicate locations. We do NOT want to add if we already have it
            let foundDuplicate = false
            currentData.locationData.map((location: locationObj) => {if(location.name === data.name) foundDuplicate = true })
            
            // We only write to local storage if data is not already in it
            if (!foundDuplicate) {
                currentData.locationData.push(data)
                this.setItem(formattedKey, currentData)
                return true
            }
            return false
        }
    }

    /**
     * @param data Location data we want to save to local storage
     * @param tripName Name of the trip you want to save the data to
     * @returns Boolean to determine to save to database or not
     */ 
     public async saveToTrip(data: locationObj, tripName: string): Promise<boolean> {
        const formattedKey = `${this.key}-trips`
        const currentData = this.getItem(formattedKey)
        const timeStamp = new Date().getTime()
        
        if (!currentData) {
            const newTripObject: Record<string, locationObj[] | number> = {}
            newTripObject[tripName] = [data]
            newTripObject["timeStamp"] = timeStamp;
            this.setItem(formattedKey, newTripObject)
            return true
        } else if (!currentData[tripName]) {
            currentData[tripName] = [data]
            this.setItem(formattedKey, currentData)
            return true
        } else {
            // Find any duplicate locations. We do NOT want to add if we already have it
            let foundDuplicate = false
            currentData[tripName].map((location: locationObj) => {if(location.name === data.name) foundDuplicate = true })
            
            // We only write to local storage if data is not already in it
            if (!foundDuplicate) {
                currentData[tripName].push(data)
                this.setItem(formattedKey, currentData)
                return true
            }
            return false
        }
            
        }
    

}
//check if there is a user logged in and if so then check if the ID is a key in our local storage
//^ in our useEffect
//If there is an ID as a key in local storage do nothing
//^no extra action needed
//If there is not, call the saved_attractions api to aquire the data
//set the data with the key of userId to localStorage 
