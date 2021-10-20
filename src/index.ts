import { instanceDetails } from './ec2/instances'

const calculatePricePerMonth = (pricePerHour: number): string => {
  const pricePerDay = pricePerHour * 24
  return (pricePerDay * 30).toFixed(2)
}

instanceDetails.forEach(({ name, pricePerHour, ram }) => {
  const pricePerMonth = calculatePricePerMonth(pricePerHour)
  console.log(`[${name}]: $${pricePerMonth} / mo - ${ram} GB of RAM`)
})
