export const calculatePricePerMonth = (pricePerHour: number) => {
  const pricePerDay = pricePerHour * 24
  return Number((pricePerDay * 30).toFixed(2))
}
