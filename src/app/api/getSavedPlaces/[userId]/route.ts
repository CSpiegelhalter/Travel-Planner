import { NextResponse } from 'next/server'

// TODO: Actually hit endpoint that will grab data for this user
export const GET = async (_req: Request, context: any) => {
  const userId = context.params.userId

  console.log(`Your id is: ${userId}`)
  return NextResponse.json({ message: 'woot' }, { status: 200 })
}
