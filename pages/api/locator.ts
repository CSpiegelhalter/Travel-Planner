

export default async function handler(req: any, res: any) {
    const googleData = await fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`, {
        method: 'POST',
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json'
        },
      })
    console.log(googleData)
    res.status(200)
}