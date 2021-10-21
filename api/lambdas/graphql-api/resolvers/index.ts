import * as allServicesResolvers from './all-services'
import * as ec2Resolvers from './ec2'
import * as rdsResolvers from './rds'
import { DateScalar } from './date'

export const resolvers = {
  ...allServicesResolvers,
  ...ec2Resolvers,
  ...rdsResolvers,
  Date: DateScalar,
}
