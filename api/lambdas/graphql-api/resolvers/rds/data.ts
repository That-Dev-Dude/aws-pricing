import { RdsStorageDetail, RdsDetail, Service, BillingInterval } from '@generated/index'
import { PricePerHourDetail } from '@/graphql-api/interfaces'

export const postgresRdsInstances: PricePerHourDetail<RdsDetail>[] = [
  {
    name: 'db.t4g.micro',
    pricePerHour: 0.016,
    service: Service.Rds,
  },
  {
    name: 'db.t4g.small',
    pricePerHour: 0.032,
    service: Service.Rds,
  },
  {
    name: 'db.t4g.medium',
    pricePerHour: 0.065,
    service: Service.Rds,
  },
  {
    name: 'db.t4g.large',
    pricePerHour: 0.129,
    service: Service.Rds,
  },
  {
    name: 'db.t4g.xlarge',
    pricePerHour: 0.258,
    service: Service.Rds,
  },
  {
    name: 'db.t4g.2xlarge',
    pricePerHour: 0.517,
    service: Service.Rds,
  },
  {
    name: 'db.t3.micro',
    pricePerHour: 0.018,
    service: Service.Rds,
  },
  {
    name: 'db.t3.small',
    pricePerHour: 0.036,
    service: Service.Rds,
  },
  {
    name: 'db.t3.medium',
    pricePerHour: 0.072,
    service: Service.Rds,
  },
  {
    name: 'db.t3.large',
    pricePerHour: 0.145,
    service: Service.Rds,
  },
  {
    name: 'db.t3.xlarge',
    pricePerHour: 0.29,
    service: Service.Rds,
  },
  {
    name: 'db.t3.2xlarge',
    pricePerHour: 0.579,
    service: Service.Rds,
  },
  {
    name: 'db.m6g.large',
    pricePerHour: 0.159,
    service: Service.Rds,
  },
  {
    name: 'db.m6g.xlarge',
    pricePerHour: 0.318,
    service: Service.Rds,
  },
  {
    name: 'db.m6g.2xlarge',
    pricePerHour: 0.636,
    service: Service.Rds,
  },
  {
    name: 'db.m6g.4xlarge',
    pricePerHour: 1.272,
    service: Service.Rds,
  },
  {
    name: 'db.m6g.8xlarge',
    pricePerHour: 2.544,
    service: Service.Rds,
  },
  {
    name: 'db.m6g.12xlarge',
    pricePerHour: 3.816,
    service: Service.Rds,
  },
  {
    name: 'db.m6g.16xlarge',
    pricePerHour: 5.088,
    service: Service.Rds,
  },
  {
    name: 'db.m5.large',
    pricePerHour: 0.178,
    service: Service.Rds,
  },
  {
    name: 'db.m5.xlarge',
    pricePerHour: 0.356,
    service: Service.Rds,
  },
  {
    name: 'db.m5.2xlarge',
    pricePerHour: 0.712,
    service: Service.Rds,
  },
  {
    name: 'db.m5.4xlarge',
    pricePerHour: 1.424,
    service: Service.Rds,
  },
  {
    name: 'db.m5.8xlarge',
    pricePerHour: 2.848,
    service: Service.Rds,
  },
  {
    name: 'db.m5.12xlarge',
    pricePerHour: 4.272,
    service: Service.Rds,
  },
  {
    name: 'db.m5.16xlarge',
    pricePerHour: 5.696,
    service: Service.Rds,
  },
  {
    name: 'db.m5.24xlarge',
    pricePerHour: 8.544,
    service: Service.Rds,
  },
  {
    name: 'db.x2g.large',
    pricePerHour: 0.326,
    service: Service.Rds,
  },
  {
    name: 'db.x2g.xlarge',
    pricePerHour: 0.652,
    service: Service.Rds,
  },
  {
    name: 'db.x2g.2xlarge',
    pricePerHour: 1.304,
    service: Service.Rds,
  },
  {
    name: 'db.x2g.4xlarge',
    pricePerHour: 2.608,
    service: Service.Rds,
  },
  {
    name: 'db.x2g.8xlarge',
    pricePerHour: 5.216,
    service: Service.Rds,
  },
  {
    name: 'db.x2g.12xlarge',
    pricePerHour: 7.824,
    service: Service.Rds,
  },
  {
    name: 'db.x2g.16xlarge',
    pricePerHour: 10.432,
    service: Service.Rds,
  },
  {
    name: 'db.r6g.large',
    pricePerHour: 0.225,
    service: Service.Rds,
  },
  {
    name: 'db.r6g.xlarge',
    pricePerHour: 0.45,
    service: Service.Rds,
  },
  {
    name: 'db.r6g.2xlarge',
    pricePerHour: 0.899,
    service: Service.Rds,
  },
  {
    name: 'db.r6g.4xlarge',
    pricePerHour: 1.798,
    service: Service.Rds,
  },
  {
    name: 'db.r6g.8xlarge',
    pricePerHour: 3.597,
    service: Service.Rds,
  },
  {
    name: 'db.r6g.12xlarge',
    pricePerHour: 5.395,
    service: Service.Rds,
  },
  {
    name: 'db.r6g.16xlarge',
    pricePerHour: 7.194,
    service: Service.Rds,
  },
  {
    name: 'db.r5.large',
    pricePerHour: 0.25,
    service: Service.Rds,
  },
  {
    name: 'db.r5.xlarge',
    pricePerHour: 0.5,
    service: Service.Rds,
  },
  {
    name: 'db.r5.2xlarge',
    pricePerHour: 1,
    service: Service.Rds,
  },
  {
    name: 'db.r5.4xlarge',
    pricePerHour: 2,
    service: Service.Rds,
  },
  {
    name: 'db.r5.8xlarge',
    pricePerHour: 4,
    service: Service.Rds,
  },
  {
    name: 'db.r5.12xlarge',
    pricePerHour: 6,
    service: Service.Rds,
  },
  {
    name: 'db.r5.16xlarge',
    pricePerHour: 8,
    service: Service.Rds,
  },
  {
    name: 'db.r5.24xlarge',
    pricePerHour: 12,
    service: Service.Rds,
  },
  {
    name: 'db.r5b.large',
    pricePerHour: 0.296,
    service: Service.Rds,
  },
  {
    name: 'db.r5b.xlarge',
    pricePerHour: 0.592,
    service: Service.Rds,
  },
  {
    name: 'db.r5b.2xlarge',
    pricePerHour: 1.184,
    service: Service.Rds,
  },
  {
    name: 'db.r5b.4xlarge',
    pricePerHour: 2.368,
    service: Service.Rds,
  },
  {
    name: 'db.r5b.8xlarge',
    pricePerHour: 4.736,
    service: Service.Rds,
  },
  {
    name: 'db.r5b.12xlarge',
    pricePerHour: 7.104,
    service: Service.Rds,
  },
  {
    name: 'db.r5b.16xlarge',
    pricePerHour: 9.472,
    service: Service.Rds,
  },
  {
    name: 'db.r5b.24xlarge',
    pricePerHour: 14.208,
    service: Service.Rds,
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
