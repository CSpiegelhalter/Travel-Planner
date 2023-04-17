import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const options = {
    method: 'POST',
    body: req.body,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }

  const data = await fetch(process.env.NEXT_PUBLIC_AWS_API_SIGNUP_LINK as any, options)

  const responseText = await data.json()
  await res.status(200).send(responseText)
}
