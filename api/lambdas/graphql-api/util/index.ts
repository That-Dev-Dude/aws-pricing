import Fuse from 'fuse.js'
import arraySort from 'array-sort'

import { SortDirection } from '@generated/index'

export const stitchSchema = (...schemas: string[]): string => {
  return schemas.reduce((accumulator, currentValue) => accumulator + '\n' + currentValue, '')
}

export const waitForMs = (msToWait: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(resolve), msToWait
  })

export const handleSearchResults = function <TData>(
  FuseSearch: Fuse<TData>,
  searchTerm: string,
  originalSet: TData[]
): TData[] {
  if (searchTerm === '') return originalSet
  const rawResults = FuseSearch.search(searchTerm)
  const results: TData[] = []
  for (const rawResult of rawResults) {
    const { item, score = 0 } = rawResult
    if (!item) continue
    if (score > 0.4) continue
    results.push(item)
  }
  return results
}

interface HandleFilterAndSortArgs<TData> {
  baseList: TData[]
  sortDirection?: SortDirection | null
  FuseSearch: Fuse<TData>
  sortKey?: keyof TData | null
  searchTerm?: string | null
}
export const handleFilterAndSort = <TData>({
  baseList,
  sortDirection,
  FuseSearch,
  searchTerm,
  sortKey,
}: HandleFilterAndSortArgs<TData>) => {
  let results = baseList
  if (searchTerm) results = handleSearchResults(FuseSearch, searchTerm, baseList)
  if (sortKey) {
    results = arraySort(results, sortKey as string, { reverse: sortDirection === SortDirection.Desc })
  }
  return results
}

export const calculatePricePerMonth = (pricePerHour: number) => {
  const pricePerDay = pricePerHour * 24
  return Number((pricePerDay * 30).toFixed(2))
}

export const convertPriceToMonthly = <TData extends { pricePerHour?: number }>(details: TData[]) =>
  details.map(({ pricePerHour, ...rest }) => ({
    pricePerMonth: pricePerHour ? calculatePricePerMonth(pricePerHour) : null,
    ...rest,
  }))

export * from './responder'
