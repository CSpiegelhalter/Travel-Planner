import { LocalStorageKeyType } from '@/Types/types'
import { LocalStorageService } from '@/lib/localStorage'

export const grabDataToDisplay = async (userId: number, pageType: LocalStorageKeyType) => {
  const params = {
    userId: userId,
  }
  const options = {
    method: 'POST',
    body: JSON.stringify(params),
  }
  const service = new LocalStorageService(`${userId}`)

  const data = await service.fetchStorageData(
    async () => await fetch('/api/grabAttractionsFromDB', options),
    pageType,
  )
  return data
}
