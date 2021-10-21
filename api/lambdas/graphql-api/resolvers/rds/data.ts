import { RdsStorageDetail, RdsDetail, Service, BillingInterval } from '@generated/index'
import { PricePerHourDetail } from '@/graphql-api/interfaces'

export const postgresRdsInstances: PricePerHourDetail<RdsDetail>[] = [
  {
    name: 'db.t4g.micro',
    pricePerHour: 0.016,
  },
  {
    name: 'db.t4g.small',
    pricePerHour: 0.032,
  },
  {
    name: 'db.t4g.medium',
    pricePerHour: 0.065,
  },
  {
    name: 'db.t4g.large',
    pricePerHour: 0.129,
  },
  {
    name: 'db.t4g.xlarge',
    pricePerHour: 0.258,
  },
  {
    name: 'db.t4g.2xlarge',
    pricePerHour: 0.517,
  },
  {
    name: 'db.t3.micro',
    pricePerHour: 0.018,
  },
  {
    name: 'db.t3.small',
    pricePerHour: 0.036,
  },
  {
    name: 'db.t3.medium',
    pricePerHour: 0.072,
  },
  {
    name: 'db.t3.large',
    pricePerHour: 0.145,
  },
  {
    name: 'db.t3.xlarge',
    pricePerHour: 0.29,
  },
  {
    name: 'db.t3.2xlarge',
    pricePerHour: 0.579,
  },
  {
    name: 'db.m6g.large',
    pricePerHour: 0.159,
  },
  {
    name: 'db.m6g.xlarge',
    pricePerHour: 0.318,
  },
  {
    name: 'db.m6g.2xlarge',
    pricePerHour: 0.636,
  },
  {
    name: 'db.m6g.4xlarge',
    pricePerHour: 1.272,
  },
  {
    name: 'db.m6g.8xlarge',
    pricePerHour: 2.544,
  },
  {
    name: 'db.m6g.12xlarge',
    pricePerHour: 3.816,
  },
  {
    name: 'db.m6g.16xlarge',
    pricePerHour: 5.088,
  },
  {
    name: 'db.m5.large',
    pricePerHour: 0.178,
  },
  {
    name: 'db.m5.xlarge',
    pricePerHour: 0.356,
  },
  {
    name: 'db.m5.2xlarge',
    pricePerHour: 0.712,
  },
  {
    name: 'db.m5.4xlarge',
    pricePerHour: 1.424,
  },
  {
    name: 'db.m5.8xlarge',
    pricePerHour: 2.848,
  },
  {
    name: 'db.m5.12xlarge',
    pricePerHour: 4.272,
  },
  {
    name: 'db.m5.16xlarge',
    pricePerHour: 5.696,
  },
  {
    name: 'db.m5.24xlarge',
    pricePerHour: 8.544,
  },
  {
    name: 'db.x2g.large',
    pricePerHour: 0.326,
  },
  {
    name: 'db.x2g.xlarge',
    pricePerHour: 0.652,
  },
  {
    name: 'db.x2g.2xlarge',
    pricePerHour: 1.304,
  },
  {
    name: 'db.x2g.4xlarge',
    pricePerHour: 2.608,
  },
  {
    name: 'db.x2g.8xlarge',
    pricePerHour: 5.216,
  },
  {
    name: 'db.x2g.12xlarge',
    pricePerHour: 7.824,
  },
  {
    name: 'db.x2g.16xlarge',
    pricePerHour: 10.432,
  },
  {
    name: 'db.r6g.large',
    pricePerHour: 0.225,
  },
  {
    name: 'db.r6g.xlarge',
    pricePerHour: 0.45,
  },
  {
    name: 'db.r6g.2xlarge',
    pricePerHour: 0.899,
  },
  {
    name: 'db.r6g.4xlarge',
    pricePerHour: 1.798,
  },
  {
    name: 'db.r6g.8xlarge',
    pricePerHour: 3.597,
  },
  {
    name: 'db.r6g.12xlarge',
    pricePerHour: 5.395,
  },
  {
    name: 'db.r6g.16xlarge',
    pricePerHour: 7.194,
  },
  {
    name: 'db.r5.large',
    pricePerHour: 0.25,
  },
  {
    name: 'db.r5.xlarge',
    pricePerHour: 0.5,
  },
  {
    name: 'db.r5.2xlarge',
    pricePerHour: 1.0,
  },
  {
    name: 'db.r5.4xlarge',
    pricePerHour: 2.0,
  },
  {
    name: 'db.r5.8xlarge',
    pricePerHour: 4.0,
  },
  {
    name: 'db.r5.12xlarge',
    pricePerHour: 6.0,
  },
  {
    name: 'db.r5.16xlarge',
    pricePerHour: 8.0,
  },
  {
    name: 'db.r5.24xlarge',
    pricePerHour: 12.0,
  },
  {
    name: 'db.r5b.large',
    pricePerHour: 0.296,
  },
  {
    name: 'db.r5b.xlarge',
    pricePerHour: 0.592,
  },
  {
    name: 'db.r5b.2xlarge',
    pricePerHour: 1.184,
  },
  {
    name: 'db.r5b.4xlarge',
    pricePerHour: 2.368,
  },
  {
    name: 'db.r5b.8xlarge',
    pricePerHour: 4.736,
  },
  {
    name: 'db.r5b.12xlarge',
    pricePerHour: 7.104,
  },
  {
    name: 'db.r5b.16xlarge',
    pricePerHour: 9.472,
  },
  {
    name: 'db.r5b.24xlarge',
    pricePerHour: 14.208,
  },
]

export const rdsStorageDetails: RdsStorageDetail[] = [
  {
    name: 'General Purpose (SSD) Storage',
    service: Service.Rds,
    price: 0.115,
    billingInterval: BillingInterval.Month,
  },
  {
    name: 'Provisioned IOPS (SSD) Storage',
    service: Service.Rds,
    price: 0.125,
    billingInterval: BillingInterval.Month,
  },
]
