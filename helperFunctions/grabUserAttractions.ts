import { LocalStorageService } from '@/lib/localStorage'

export const grabUserAttractions = async (userId: number) => {
  const params = {
    userId: userId,
  }
  const options = {
    method: 'POST',
    body: JSON.stringify(params),
  }
  const service = new LocalStorageService(`${userId}`)

  const data = await service.fetchStorageData(async () => await fetch('/api/grabAttractionsFromDB', options))
  return data
}
