import Fuse from 'fuse.js'

import { RdsStorageDetail, QueryRdsPostgresArgs } from '@generated/index'
import { Resolver } from '@/graphql-api/interfaces'
import { handleSearchResults } from '@/graphql-api/util'
import { rdsStorageDetails } from '../data'

const DetailsSearch = new Fuse(rdsStorageDetails, { keys: ['name'], includeScore: true })

export const rdsPostgresStorage: Resolver<RdsStorageDetail[], QueryRdsPostgresArgs> = async ({ name }) => {
  return handleSearchResults(DetailsSearch, name || '', rdsStorageDetails)
}
