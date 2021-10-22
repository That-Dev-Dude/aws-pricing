import Fuse from 'fuse.js'

import { Ec2Detail, QueryEc2Args } from '@generated/index'
import { Resolver } from '@/graphql-api/interfaces'
import { convertPriceToMonthly, handleFilterAndSort } from '@/graphql-api/util'
import { ec2InstanceDetails } from './data'

const details: Ec2Detail[] = convertPriceToMonthly(ec2InstanceDetails)
const DetailsSearch = new Fuse(details, { keys: ['name'], includeScore: true })

export const ec2: Resolver<Ec2Detail[], QueryEc2Args> = async ({ name, sortKey, sortDirection }) => {
  return handleFilterAndSort({ baseList: details, sortDirection, sortKey, searchTerm: name, FuseSearch: DetailsSearch })
}
