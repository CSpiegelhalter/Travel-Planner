export default async function handler(req: any, res: any) {

  console.log(req.body)
  const options = {
    method: 'POST',
    body: req.body,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }

  const data = await fetch(process.env.NEXT_PUBLIC_AWS_API_SIGNUP_LINK as any, options)

  // const apiReponseData = await data.json()
  console.log(await data.text())
  // res.send('whoot')
  await res.status(200).send(JSON.stringify(data))
}
