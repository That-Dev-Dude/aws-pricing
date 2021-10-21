export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type EntireFieldWrapper<T> = T | (() => T | Promise<T>);
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
  __typename?: 'Ec2Detail';
  name: EntireFieldWrapper<Scalars['String']>;
  pricePerMonth: EntireFieldWrapper<Scalars['Float']>;
  ram: EntireFieldWrapper<Scalars['Int']>;
  vCpu: EntireFieldWrapper<Scalars['Int']>;
};

export enum Ec2DetailsSort {
  Name = 'name',
  PricePerMonth = 'pricePerMonth',
  Ram = 'ram',
  VCpu = 'vCpu'
}

export type ElasticacheDetail = {
  __typename?: 'ElasticacheDetail';
  name: EntireFieldWrapper<Scalars['String']>;
  pricePerMonth: EntireFieldWrapper<Scalars['Float']>;
  ram: EntireFieldWrapper<Scalars['Int']>;
  vCpu: EntireFieldWrapper<Scalars['Int']>;
  networkPerformance: EntireFieldWrapper<Scalars['String']>;
};

export type MutationResult = {
  __typename?: 'MutationResult';
  status: EntireFieldWrapper<Scalars['Int']>;
  message?: EntireFieldWrapper<Maybe<Scalars['String']>>;
};

export type Query = {
  __typename?: 'Query';
  allServices?: EntireFieldWrapper<Maybe<Array<Maybe<ServiceDetail>>>>;
  ec2: EntireFieldWrapper<Array<Ec2Detail>>;
  elasticache: EntireFieldWrapper<Array<ElasticacheDetail>>;
  rdsPostgres: EntireFieldWrapper<Array<RdsDetail>>;
  rdsPostgresStorage: EntireFieldWrapper<Array<RdsStorageDetail>>;
};


export type QueryAllServicesArgs = {
  service?: Maybe<Service>;
  name?: Maybe<Scalars['String']>;
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
  __typename?: 'RdsDetail';
  name: EntireFieldWrapper<Scalars['String']>;
  pricePerMonth: EntireFieldWrapper<Scalars['Float']>;
};

export enum RdsDetailSort {
  Name = 'name',
  PricePerMonth = 'pricePerMonth'
}

export type RdsStorageDetail = {
  __typename?: 'RdsStorageDetail';
  name: EntireFieldWrapper<Scalars['String']>;
  service: EntireFieldWrapper<Service>;
  price: EntireFieldWrapper<Scalars['Float']>;
  billingInterval: EntireFieldWrapper<BillingInterval>;
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
  __typename?: 'ServiceDetail';
  name: EntireFieldWrapper<Scalars['String']>;
  pricePerMonth: EntireFieldWrapper<Scalars['Int']>;
};

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc'
}
