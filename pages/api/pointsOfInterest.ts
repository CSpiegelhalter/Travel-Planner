export default async function handler(req: any, res: any){
    const body = JSON.parse(req.body)
    let city = body['city']
    let pointOfInterest = body['typeOfInterest']

    console.log(req.body)
    console.log(city)
    console.log(pointOfInterest)
    const placesApi = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${pointOfInterest}{+in+'${city}'&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    const results = await fetch(placesApi)


    await res.status(200).send(JSON.stringify(await results.json()))
}
