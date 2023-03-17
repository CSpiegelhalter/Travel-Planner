export default async function handler(req: any, res: any){

    const placesApi = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=todo+in+paris&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    const results = await fetch(placesApi)


    await res.status(200).send(await results.json())
}

