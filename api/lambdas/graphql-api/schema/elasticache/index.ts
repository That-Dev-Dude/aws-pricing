export const ElasticacheSchema = `#graphql
  type ElasticacheDetail {
    name: String!
    pricePerMonth: Float!
    ram: Int!
    vCpu: Int!
    networkPerformance: String!
  }
`

export const ElasticacheQueries = `#graphql
elasticache(name: String, ram: Int, vCpu: Int, networkPerformance: String): [ElasticacheDetail!]!
`
