import { buildSchema } from 'graphql'
import { DateTypeDefinition } from 'graphql-scalars'

import { stitchSchema } from '@/graphql-api/util'

import { MutationResultSchema } from './shared'
import { ServiceDetailSchema, ServiceDetailQueries } from './generic-service-detail'

const schemas = stitchSchema(MutationResultSchema, ServiceDetailSchema, DateTypeDefinition)
const queries = `#graphql
  type Query {
    ${stitchSchema(ServiceDetailQueries)}
  }
`
// const mutations = `#graphql
//   type Mutation {
//     ${stitchSchema('')}
//   }
// `

export const schema = buildSchema(stitchSchema(schemas, queries))

export * from '../resolvers'
