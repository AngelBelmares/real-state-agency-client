import { API_URL } from '../constants/api'
import type { House, HouseFilter } from '../types/houses'

export async function getHouses (houseFilter: HouseFilter): Promise<House[]> {
  const response = await fetch(`${API_URL}/Houses?HouseId=${houseFilter?.house_id ?? ''}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  return data
}
