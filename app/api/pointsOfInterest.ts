import { LocationLabels } from '@/Types/types'
import { locationLabels } from '@/constants/constants'
import type { NextApiRequest, NextApiResponse } from 'next'

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   console.log('GOT CALLED BABY')
//   setTimeout(() => {
//     console.log('Timer done')
//     res.status(200).send(JSON.stringify([{'name': 'hey'}]))

//   }, 100)

// }
//TODO:
//make it to where it hits our DB first and if there are not atleast 25 locations and if not then
//Limit api request so that we only get 25 locations at a time, and add a load more that would make it to where you can load 25 more
//

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body)
  const city: string = body['city']
  const pointOfInterest: keyof LocationLabels = body['point']

  const hardCode = ['cafe']
  //creating an array of promises
  const promiseArr = []
  for (let keyword of hardCode) {
    promiseArr.push(
      fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${keyword}%20in%20${city}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
      ),
    )
  }

  // assigning the now fullfilled promises to a variable
  const googleResults = await Promise.all(promiseArr)

  //makes the raw data into json
  const jsonPromises = []
  for (let obj of googleResults) {
    jsonPromises.push(obj.json())
  }
  const returnedData = await Promise.all(jsonPromises)

  //lastly we get the information that we want from the object that is returned for each item in the array
  let resultsArr: any = []
  for (let data of returnedData) {
    resultsArr.push(data.results)
  }

  //use .flat() to get rid of any extra brackets
  resultsArr = resultsArr.flat()

  //set the results and send it
  const results = resultsArr
  res.status(200).send(JSON.stringify(results))
}
