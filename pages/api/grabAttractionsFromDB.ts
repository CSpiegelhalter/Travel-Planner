import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const awsLink = process.env.NEXT_PUBLIC_AWS_GET_USERS_ATTRACTIONS

   const data = await fetch(awsLink as string, {
        method: 'POST',
        body: req.body,
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })

    const returnedData = await data.json()

    res.status(200).send(returnedData)
}
