export default async function handler(req: any, res: any){

    const placesApi = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=resturants+in+paris&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    const results = await fetch(placesApi)


    await res.status(200).send(JSON.stringify(await results.json()))
}

