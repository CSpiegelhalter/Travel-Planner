import { testLocations } from '@/constants/test'
import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// TODO: Actually hit endpoint that will grab data for this user
export const GET = async (req: NextRequest, context: { params: any }) => {
  const limit = 15
  const params = new URLSearchParams(context.params.params)

  const lat = params.get('lat')
  const lng = params.get('lng')
  const offsetParam = params.get('offset')

  let offset: number | undefined

  if (!lat || !lng) return NextResponse.json({ message: 'Missing lat or lng parameters' }, { status: 400 })

  offsetParam ? (offset = Number(offsetParam)) : (offset = 0)

  // Hard code for testning
  return NextResponse.json({ places: [testLocations[0]], offset, limit }, { status: 200 })
}
