export const instanceDetails: InstanceDetails[] = [
  {
    name: 't3.nano',
    pricePerHour: 0.0052,
    ram: 0.5,
    vCpu: 2,
  },
  {
    name: 't3.micro',
    pricePerHour: 0.0104,
    ram: 1,
    vCpu: 2,
  },
  {
    name: 't3.small',
    pricePerHour: 0.0208,
    ram: 2,
    vCpu: 2,
  },
  {
    name: 't3.medium',
    pricePerHour: 0.0416,
    ram: 4,
    vCpu: 2,
  },
  {
    name: 't3.large',
    pricePerHour: 0.0832,
    ram: 8,
    vCpu: 2,
  },
  {
    name: 't3.xlarge',
    pricePerHour: 0.1664,
    ram: 16,
    vCpu: 4,
  },
  {
    name: 't3.2xlarge',
    pricePerHour: 0.3328,
    ram: 32,
    vCpu: 4,
  },
  {
    name: 't4g.nano',
    pricePerHour: 0.0042,
    ram: 0.5,
    vCpu: 2,
  },
  {
    name: 't4g.micro',
    pricePerHour: 0.0084,
    ram: 1,
    vCpu: 2,
  },
  {
    name: 't4g.small',
    pricePerHour: 0.0168,
    ram: 2,
    vCpu: 2,
  },
  {
    name: 't4g.medium',
    pricePerHour: 0.0336,
    ram: 4,
    vCpu: 2,
  },
  {
    name: 't4g.large',
    pricePerHour: 0.0672,
    ram: 8,
    vCpu: 2,
  },
  {
    name: 't4g.xlarge',
    pricePerHour: 0.1344,
    ram: 16,
    vCpu: 4,
  },
  {
    name: 't4g.2xlarge',
    pricePerHour: 0.2688,
    ram: 32,
    vCpu: 8,
  },
]

interface InstanceDetails {
  name: string
  pricePerHour: number
  ram: number
  vCpu: number
}
