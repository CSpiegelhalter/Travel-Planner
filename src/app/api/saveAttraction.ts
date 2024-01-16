import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const awsLink = process.env.NEXT_PUBLIC_AWS_SAVE_ATTRACTION_TO_DB
    console.log('I was here')
   const data = await fetch(awsLink as string, {
        method: 'POST',
        body: req.body,
        headers: {
            'Content-Type': 'application/json'
        },
    })
    console.log(data)
    res.status(200).send("I worked")
}
