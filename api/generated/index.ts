export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export enum BillingInterval {
  Month = 'month',
  Week = 'week',
  Day = 'day',
  Hour = 'hour'
}


export type Ec2Detail = {
  name: Scalars['String'];
  service: Service;
  pricePerMonth?: Maybe<Scalars['Float']>;
  ram: Scalars['Int'];
  vCpu: Scalars['Int'];
};

export enum Ec2DetailsSort {
  Name = 'name',
  PricePerMonth = 'pricePerMonth',
  Ram = 'ram',
  VCpu = 'vCpu'
}

export type ElasticacheDetail = {
  name: Scalars['String'];
  service: Service;
  pricePerMonth?: Maybe<Scalars['Float']>;
  ram: Scalars['Int'];
  vCpu: Scalars['Int'];
  networkPerformance: Scalars['String'];
};

export type MutationResult = {
  status: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
};

export type Query = {
  allServices?: Maybe<Array<Maybe<ServiceDetail>>>;
  ec2: Array<Ec2Detail>;
  elasticache: Array<ElasticacheDetail>;
  rdsPostgres: Array<RdsDetail>;
  rdsPostgresStorage: Array<RdsStorageDetail>;
};


export type QueryAllServicesArgs = {
  service?: Maybe<Service>;
  name?: Maybe<Scalars['String']>;
  sortKey?: Maybe<ServiceDetailSort>;
  sortDirection?: Maybe<SortDirection>;
};


export type QueryEc2Args = {
  name?: Maybe<Scalars['String']>;
  sortKey?: Maybe<Ec2DetailsSort>;
  sortDirection?: Maybe<SortDirection>;
};


export type QueryElasticacheArgs = {
  name?: Maybe<Scalars['String']>;
  ram?: Maybe<Scalars['Int']>;
  vCpu?: Maybe<Scalars['Int']>;
  networkPerformance?: Maybe<Scalars['String']>;
};


export type QueryRdsPostgresArgs = {
  name?: Maybe<Scalars['String']>;
  sortKey?: Maybe<RdsDetailSort>;
  sortDirection?: Maybe<SortDirection>;
};


export type QueryRdsPostgresStorageArgs = {
  name?: Maybe<Scalars['String']>;
  sortKey?: Maybe<RdsStorageDetailSort>;
  sortDirection?: Maybe<SortDirection>;
};

export type RdsDetail = {
  name: Scalars['String'];
  service: Service;
  pricePerMonth?: Maybe<Scalars['Float']>;
};

export enum RdsDetailSort {
  Name = 'name',
  PricePerMonth = 'pricePerMonth'
}

export type RdsStorageDetail = {
  name: Scalars['String'];
  service: Service;
  price: Scalars['Float'];
  billingInterval: BillingInterval;
};

export enum RdsStorageDetailSort {
  Name = 'name',
  Price = 'price',
  BillingInterval = 'billingInterval'
}

export enum Service {
  Rds = 'rds',
  Ec2 = 'ec2',
  Fargate = 'fargate',
  Elasticache = 'elasticache'
}

export type ServiceDetail = {
  service: Service;
  name: Scalars['String'];
  pricePerMonth?: Maybe<Scalars['Float']>;
};

export enum ServiceDetailSort {
  Name = 'name',
  PricePerMonth = 'pricePerMonth'
}

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc'
}
