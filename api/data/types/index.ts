export interface BaseServiceDetails {
  name: string
  pricePerHour: number
}

export interface StorageDetails {
  service: string
  name: string
  price: number
  billingInterval: 'hour' | 'day' | 'week' | 'month'
}