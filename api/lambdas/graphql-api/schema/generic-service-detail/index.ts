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

  enum ServiceDetailSort {
    name
    pricePerMonth
  }
  type ServiceDetail {
    service: Service!
    name: String!
    pricePerMonth: Float
  }
`

export const ServiceDetailQueries = `#graphql
allServices(service: Service, name: String, sortKey: ServiceDetailSort, sortDirection: SortDirection): [ServiceDetail]
`
