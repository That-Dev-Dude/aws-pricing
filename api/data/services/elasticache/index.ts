import { BaseServiceDetails } from '@/../data/types'

export const elastiCacheInstances: ElastiCacheDetails[] = [
  {
    name: 'cache.t2.micro',
    vCpu: 1,
    ram: 0.555,
    networkPerformance: 'Low to Moderate',
    pricePerHour: 0.017,
  },
  {
    name: 'cache.t2.small',
    vCpu: 1,
    ram: 1.55,
    networkPerformance: 'Low to Moderate',
    pricePerHour: 0.034,
  },
  {
    name: 'cache.t2.medium',
    vCpu: 2,
    ram: 3.22,
    networkPerformance: 'Low to Moderate',
    pricePerHour: 0.068,
  },
  {
    name: 'cache.t3.micro',
    vCpu: 2,
    ram: 0.5,
    networkPerformance: 'Up to 5 Gigabit',
    pricePerHour: 0.017,
  },
  {
    name: 'cache.t3.small',
    vCpu: 2,
    ram: 1.37,
    networkPerformance: 'Up to 5 Gigabit',
    pricePerHour: 0.034,
  },
  {
    name: 'cache.t3.medium',
    vCpu: 2,
    ram: 3.09,
    networkPerformance: 'Up to 5 Gigabit',
    pricePerHour: 0.068,
  },
  {
    name: 'cache.m4.large',
    vCpu: 2,
    ram: 6.42,
    networkPerformance: 'Moderate',
    pricePerHour: 0.156,
  },
  {
    name: 'cache.m4.xlarge',
    vCpu: 4,
    ram: 14.28,
    networkPerformance: 'High',
    pricePerHour: 0.311,
  },
  {
    name: 'cache.m4.2xlarge',
    vCpu: 8,
    ram: 29.7,
    networkPerformance: 'High',
    pricePerHour: 0.623,
  },
  {
    name: 'cache.m4.4xlarge',
    vCpu: 16,
    ram: 60.78,
    networkPerformance: 'High',
    pricePerHour: 1.245,
  },
  {
    name: 'cache.m4.10xlarge',
    vCpu: 40,
    ram: 154.64,
    networkPerformance: '10 Gigabit',
    pricePerHour: 3.112,
  },
  {
    name: 'cache.m5.large',
    vCpu: 2,
    ram: 6.38,
    networkPerformance: 'Up to 10 Gigabit',
    pricePerHour: 0.156,
  },
  {
    name: 'cache.m5.xlarge',
    vCpu: 4,
    ram: 12.93,
    networkPerformance: 'Up to 10 Gigabit',
    pricePerHour: 0.311,
  },
  {
    name: 'cache.m5.2xlarge',
    vCpu: 8,
    ram: 26.04,
    networkPerformance: 'Up to 10 Gigabit',
    pricePerHour: 0.623,
  },
  {
    name: 'cache.m5.4xlarge',
    vCpu: 16,
    ram: 52.26,
    networkPerformance: 'Up to 10 Gigabit',
    pricePerHour: 1.245,
  },
  {
    name: 'cache.m5.12xlarge',
    vCpu: 48,
    ram: 157.12,
    networkPerformance: '12 Gigabit',
    pricePerHour: 3.744,
  },
  {
    name: 'cache.m5.24xlarge',
    vCpu: 96,
    ram: 314.32,
    networkPerformance: '25 Gigabit',
    pricePerHour: 7.488,
  },
  {
    name: 'cache.m6g.large',
    vCpu: 2,
    ram: 6.38,
    networkPerformance: 'Up to 10 Gigabit',
    pricePerHour: 0.149,
  },
  {
    name: 'cache.m6g.xlarge',
    vCpu: 4,
    ram: 12.94,
    networkPerformance: 'Up to 10 Gigabit',
    pricePerHour: 0.297,
  },
  {
    name: 'cache.m6g.2xlarge',
    vCpu: 8,
    ram: 26.05,
    networkPerformance: 'Up to 10 Gigabit',
    pricePerHour: 0.593,
  },
  {
    name: 'cache.m6g.4xlarge',
    vCpu: 166,
    ram: 52.26,
    networkPerformance: 'Up to 10 Gigabit',
    pricePerHour: 1.186,
  },
  {
    name: 'cache.m6g.8xlarge',
    vCpu: 32,
    ram: 103.68,
    networkPerformance: '12 Gigabit',
    pricePerHour: 2.372,
  },
  {
    name: 'cache.m6g.12xlarge',
    vCpu: 48,
    ram: 157.13,
    networkPerformance: '20 Gigabit',
    pricePerHour: 3.557,
  },
  {
    name: 'cache.m6g.16xlarge',
    vCpu: 64,
    ram: 209.55,
    networkPerformance: '25 Gigabit',
    pricePerHour: 4.743,
  },
  {
    name: 'cache.r4.large',
    vCpu: 2,
    ram: 12.3,
    networkPerformance: 'Up to 10 Gigabit',
    pricePerHour: 0.228,
  },
  {
    name: 'cache.r4.xlarge',
    vCpu: 4,
    ram: 25.05,
    networkPerformance: 'Up to 10 Gigabit',
    pricePerHour: 0.455,
  },
  {
    name: 'cache.r4.2xlarge',
    vCpu: 8,
    ram: 50.47,
    networkPerformance: 'Up to 10 Gigabit',
    pricePerHour: 0.91,
  },
  {
    name: 'cache.r4.4xlarge',
    vCpu: 16,
    ram: 101.38,
    networkPerformance: 'Up to 10 Gigabit',
    pricePerHour: 1.82,
  },
  {
    name: 'cache.r4.8xlarge',
    vCpu: 32,
    ram: 203.26,
    networkPerformance: '10 Gigabit',
    pricePerHour: 3.64,
  },
  {
    name: 'cache.r4.16xlarge',
    vCpu: 64,
    ram: 407,
    networkPerformance: '25 Gigabit',
    pricePerHour: 7.28,
  },
  {
    name: 'cache.r5.large',
    vCpu: 2,
    ram: 13.07,
    networkPerformance: 'Up to 10 Gigabit',
    pricePerHour: 0.216,
  },
  {
    name: 'cache.r5.xlarge',
    vCpu: 4,
    ram: 26.32,
    networkPerformance: 'Up to 10 Gigabit',
    pricePerHour: 0.431,
  },
  {
    name: 'cache.r5.2xlarge',
    vCpu: 8,
    ram: 52.82,
    networkPerformance: 'Up to 10 Gigabit',
    pricePerHour: 0.862,
  },
  {
    name: 'cache.r5.4xlarge',
    vCpu: 16,
    ram: 105.81,
    networkPerformance: 'Up to 10 Gigabit',
    pricePerHour: 1.724,
  },
  {
    name: 'cache.r5.12xlarge',
    vCpu: 48,
    ram: 317.77,
    networkPerformance: '12 Gigabit',
    pricePerHour: 5.184,
  },
  {
    name: 'cache.r5.24xlarge',
    vCpu: 96,
    ram: 635.61,
    networkPerformance: '25 Gigabit',
    pricePerHour: 10.368,
  },
  {
    name: 'cache.r6g.large',
    vCpu: 2,
    ram: 13.07,
    networkPerformance: 'Up to 10 Gigabit',
    pricePerHour: 0.206,
  },
  {
    name: 'cache.r6g.xlarge',
    vCpu: 4,
    ram: 26.32,
    networkPerformance: 'Up to 10 Gigabit',
    pricePerHour: 0.411,
  },
  {
    name: 'cache.r6g.2xlarge',
    vCpu: 8,
    ram: 52.82,
    networkPerformance: 'Up to 10 Gigabit',
    pricePerHour: 0.821,
  },
  {
    name: 'cache.r6g.4xlarge',
    vCpu: 16,
    ram: 105.81,
    networkPerformance: 'Up to 10 Gigabit',
    pricePerHour: 1.642,
  },
  {
    name: 'cache.r6g.8xlarge',
    vCpu: 32,
    ram: 209.55,
    networkPerformance: '12 Gigabit',
    pricePerHour: 3.284,
  },
  {
    name: 'cache.r6g.12xlarge',
    vCpu: 48,
    ram: 317.77,
    networkPerformance: '20 Gigabit',
    pricePerHour: 4.925,
  },
  {
    name: 'cache.r6g.16xlarge',
    vCpu: 64,
    ram: 419.1,
    networkPerformance: '25 Gigabit',
    pricePerHour: 6.567,
  },
]

export interface ElastiCacheDetails extends BaseServiceDetails {
  vCpu: number
  ram: number
  networkPerformance: string
}