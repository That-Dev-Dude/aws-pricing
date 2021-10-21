export const Ec2Schema = `#graphql
  enum Ec2DetailsSort {
    name
    pricePerMonth
    ram
    vCpu
  }
  type Ec2Detail {
    name: String!
    pricePerMonth: Float!
    ram: Int!
    vCpu: Int!
  }
`

export const Ec2Queries = `#graphql
ec2(name: String, sortKey: Ec2DetailsSort, sortDirection: SortDirection): [Ec2Detail!]!
`
