export const ServiceDetailSchema = `#graphql
  enum Service {
    rds
    ec2
    fargate
    elasticache
  }

  enum SortDirection {
    asc
    desc
  }

  type ServiceDetail {
    name: String!
    pricePerMonth: Int!
  }
`

export const ServiceDetailQueries = `#graphql
allServices(service: Service, name: String): [ServiceDetail]
`
