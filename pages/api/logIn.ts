export default async function handler(req: any, res: any) {
    
  const options = {
    method: 'POST',
    body: req.body,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }
  
  const data = await fetch(process.env.NEXT_PUBLIC_AWS_API_LOGIN_LINK as any, options)

    const returnedData = await data.json()

    await res.status(200).send(JSON.stringify(returnedData))
  }
  