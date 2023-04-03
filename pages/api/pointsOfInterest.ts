import { locationLabels } from "@/constants/constants"


export default async function handler(req: any, res: any){
    const body = JSON.parse(req.body)
    let city = body['city']
    let pointOfInterest = body['point']
    
    const runThroughKeys = async () => {
        let keyArr: string[] = []
        for(let key of Object.keys(locationLabels)){
            if (key === pointOfInterest ){
            keyArr.push(locationLabels[key])        
            }
        }
        keyArr = keyArr.flat()
        
         let promiseArr = []
         for (let i of keyArr){
            promiseArr.push(fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${i}{+in+${city}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`).then(function(response){
                return response.json()
            }))
         }
        return Promise.all(promiseArr)
    }
    

    console.log( await runThroughKeys())
    const placesApi = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${pointOfInterest}{+in+${city}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    const results = await fetch(placesApi)


    await res.status(200).send(JSON.stringify(await results.json()))
}
