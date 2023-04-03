import { locationLabels } from "@/constants/constants"

const runThroughKeys = async () => {
    for(let key of Object.keys(locationLabels)){
        console.log(key)
    }
    return "I have been returned"
}

export default async function handler(req: any, res: any){
    const body = JSON.parse(req.body)
    let city = body['city']
    let pointOfInterest = body['point']
    
    console.log( await runThroughKeys())
    const placesApi = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${pointOfInterest}{+in+${city}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    const results = await fetch(placesApi)


    await res.status(200).send(JSON.stringify(await results.json()))
}
