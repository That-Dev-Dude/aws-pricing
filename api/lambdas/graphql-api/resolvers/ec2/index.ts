import Fuse from 'fuse.js'

import { Ec2Detail, QueryEc2Args } from '@generated/index'
import { Resolver } from '@/graphql-api/interfaces'
import { calculatePricePerMonth, handleFilterAndSort } from '@/graphql-api/util'
import { ec2InstanceDetails } from './data'

const details: Ec2Detail[] = ec2InstanceDetails.map(({ pricePerHour, ...rest }) => ({
  pricePerMonth: calculatePricePerMonth(pricePerHour),
  ...rest,
}))
const DetailsSearch = new Fuse(details, { keys: ['name'], includeScore: true })

export const ec2: Resolver<Ec2Detail[], QueryEc2Args> = async ({ name, sortKey, sortDirection }) => {
  return handleFilterAndSort({ baseList: details, sortDirection, sortKey, searchTerm: name, FuseSearch: DetailsSearch })
}
