import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const options = {
        method: 'POST',
        body: req.body,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }
      
         res.status(200).send('I worked')
  }
  