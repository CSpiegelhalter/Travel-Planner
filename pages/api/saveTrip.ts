import type {NextApiRequest, NextApiResponse} from 'next'

export default async function handler (req: NextApiRequest, res: NextApiResponse){
    const awslink = process.env.NEXT_PUBLIC_AWS_SAVE_TRIP_TO_DB

    const data = await fetch(awslink as string, {
        method: 'POST',
        body: req.body,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    res.status(200).send('ahhh')
}