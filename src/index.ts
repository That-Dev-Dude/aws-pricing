import { instanceDetails } from './services/ec2/instances'
import { calculatePricePerMonth, logPricePerMonth } from './util'

instanceDetails.forEach(({ name, pricePerHour, ram }) => {
  const pricePerMonth = calculatePricePerMonth(pricePerHour)
  logPricePerMonth({ name, pricePerMonth })
})
