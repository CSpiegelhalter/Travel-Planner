import { LocalStorageKeyType } from "@/Types/types"

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
        this.storage = localStorage;
    }

    setItem(key: string, value: any) {
        this.storage.setItem(key, JSON.stringify(value));
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
        if (!!data) {
            console.log(typeof data)
            // return JSON.parse(data)
            return data
        }
        const fetchedData = await callback()
        const dataToStore = await fetchedData.json()
        this.setItem(this.key, dataToStore)
        return dataToStore
    }

}
//check if there is a user logged in and if so then check if the ID is a key in our local storage
//^ in our useEffect
//If there is an ID as a key in local storage do nothing
//^no extra action needed
//If there is not, call the saved_attractions api to aquire the data
//set the data with the key of userId to localStorage 
