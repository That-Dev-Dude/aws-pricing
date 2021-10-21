import { buildSchema } from 'graphql'
import { DateTypeDefinition } from 'graphql-scalars'

import { stitchSchema } from '@/graphql-api/util'

import { MutationResultSchema } from './shared'
import { ServiceDetailSchema, ServiceDetailQueries } from './generic-service-detail'
import { Ec2Schema, Ec2Queries } from './ec2'
import { ElasticacheSchema, ElasticacheQueries } from './elasticache'
import { RdsSchema, RdsQueries } from './rds'

const schemas = stitchSchema(
  MutationResultSchema,
  DateTypeDefinition,
  ServiceDetailSchema,
  Ec2Schema,
  ElasticacheSchema,
  RdsSchema
)
const queries = `#graphql
  type Query {
    ${stitchSchema(ServiceDetailQueries, Ec2Queries, ElasticacheQueries, RdsQueries)}
  }
`

export const schema = buildSchema(stitchSchema(schemas, queries))

export * from '../resolvers'
