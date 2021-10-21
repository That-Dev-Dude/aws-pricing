export const RdsSchema = `#graphql

  enum BillingInterval {
    month
    week
    day
    hour
  }

  enum RdsDetailSort {
    name
    pricePerMonth
  }
  type RdsDetail {
    name: String!
    pricePerMonth: Float!
  }
  
  enum RdsStorageDetailSort {
    name
    price
    billingInterval
  }
  type RdsStorageDetail {
    name: String!
    service: Service!
    price: Float!
    billingInterval: BillingInterval!
  }
`

export const RdsQueries = `#graphql
rdsPostgres(name: String, sortKey: RdsDetailSort, sortDirection: SortDirection): [RdsDetail!]!
rdsPostgresStorage(name: String, sortKey: RdsStorageDetailSort, sortDirection: SortDirection): [RdsStorageDetail!]!
`
