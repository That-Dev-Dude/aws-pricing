export const calculatePricePerMonth = (pricePerHour: number): string => {
  const pricePerDay = pricePerHour * 24
  return (pricePerDay * 30).toFixed(2)
}

interface BasePricePerMonth {
  name: string
  pricePerMonth: number | string
}
export const logPricePerMonth = ({
  name,
  pricePerMonth,
}: BasePricePerMonth) => {
  console.log(`[${name}]: $${pricePerMonth} / mo`)
}
