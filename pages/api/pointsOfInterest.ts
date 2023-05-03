import { locationLabels } from '@/constants/constants'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('GOT CALLED BABY')
  setTimeout(() => {
    console.log('Timer done')
    res.status(200).send(JSON.stringify([{'name': 'hey'}]))

  }, 100)

}


// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const body = JSON.parse(req.body)
//   const city = body['city']
//   const pointOfInterest = body['point']

//   //creating an array of promises
//   const promiseArr = []
//   for (let keyword of locationLabels[pointOfInterest]) {
//     promiseArr.push(
//       fetch(
//         `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${keyword}{+in+${city}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
//       ),
//     )
//   }
//   // assigning the now fullfilled promises to a variable
//   const googleResults = await Promise.all(promiseArr)

//   //makes the raw data into json
//   const jsonPromises = []
//   for (let obj of googleResults) {
//     jsonPromises.push(obj.json())
//   }
//   const returnedData = await Promise.all(jsonPromises)

//   //lastly we get the information that we want from the object that is returned for each item in the array
//   let resultsArr: any = []
//   for (let data of returnedData) {
//     resultsArr.push(data.results)
//   }

//   //use .flat() to get rid of any extra brackets
//   resultsArr = resultsArr.flat()

//   //set the results and send it
//   const results = resultsArr
//   await res.status(200).send(JSON.stringify(results))
// }
