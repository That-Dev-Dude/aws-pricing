import Fuse from 'fuse.js'

import { RdsDetail, QueryRdsPostgresArgs } from '@generated/index'
import { Resolver } from '@/graphql-api/interfaces'
import { calculatePricePerMonth, handleFilterAndSort } from '@/graphql-api/util'
import { postgresRdsInstances } from '../data'

const details: RdsDetail[] = postgresRdsInstances.map(({ pricePerHour, ...rest }) => ({
  pricePerMonth: calculatePricePerMonth(pricePerHour),
  ...rest,
}))
const DetailsSearch = new Fuse(details, { keys: ['name'], includeScore: true })

export const rdsPostgres: Resolver<RdsDetail[], QueryRdsPostgresArgs> = async ({ name, sortKey, sortDirection }) => {
  return handleFilterAndSort({ baseList: details, sortDirection, sortKey, searchTerm: name, FuseSearch: DetailsSearch })
}
