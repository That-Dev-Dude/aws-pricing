import * as allServicesResolvers from './all-services'
import { DateScalar } from './date'

export const resolvers = {
  ...allServicesResolvers,
  Date: DateScalar,
}
