import Fuse from 'fuse.js'

import { ServiceDetail, QueryAllServicesArgs } from '@generated/index'
import { Resolver } from '@/graphql-api/interfaces'
import { convertPriceToMonthly, handleFilterAndSort } from '@/graphql-api/util'

import { ec2InstanceDetails } from '@/graphql-api/resolvers/ec2/data'
import { postgresRdsInstances } from '@/graphql-api/resolvers/rds/data'

const allHourlyServiceDetails = [...ec2InstanceDetails, ...postgresRdsInstances]
const allServiceDetails: ServiceDetail[] = convertPriceToMonthly(allHourlyServiceDetails)
const DetailsSearch = new Fuse(allServiceDetails, { keys: ['service'], includeScore: true })

export const allServices: Resolver<ServiceDetail[], QueryAllServicesArgs> = async ({
  service,
  sortDirection,
  sortKey,
}) => {
  return handleFilterAndSort({
    baseList: allServiceDetails,
    searchTerm: service,
    sortDirection,
    sortKey,
    FuseSearch: DetailsSearch,
  })
}
