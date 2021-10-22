export const ElasticacheSchema = `#graphql
  type ElasticacheDetail {
    name: String!
    service: Service!
    pricePerMonth: Float
    ram: Int!
    vCpu: Int!
    networkPerformance: String!
  }
`

export const ElasticacheQueries = `#graphql
elasticache(name: String, ram: Int, vCpu: Int, networkPerformance: String): [ElasticacheDetail!]!
`
