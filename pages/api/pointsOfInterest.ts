export default async function handler(req: any, res: any){
    // const poi = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=todo+in+paris&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`, {
    //     method: 'GET',
    // })
    // console.log(poi)
    // res.status(200).json(poi)
    const placesApi = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=todo+in+paris&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    const results = await fetch(placesApi)
    // const data = await results
    console.log("IN HERE")
    console.log(results)
    console.log("=-=-=-=-=-=-=-")

    await res.status(200).send(await results.json())
}

