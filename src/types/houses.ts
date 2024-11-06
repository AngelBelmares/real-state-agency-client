export interface House {
  houseId: number
  location: string
  price: number
  description: string
  image: string
  createdAt: Date
}

export interface HouseFilter {
  house_id?: number
}
