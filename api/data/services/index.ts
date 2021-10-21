import { BaseServiceDetails } from '@/types'
import { ec2InstanceDetails } from './ec2'
import { elastiCacheInstances } from './elasticache'
import { fargatePricing } from './fargate'
import { rdsDetails } from './rds'

const serviceMap: Record<string, BaseServiceDetails[]> = {
  ec2: ec2InstanceDetails,
  elastiCache: elastiCacheInstances,
  fargate: fargatePricing,
  rds: [...rdsDetails.postgres],
}
