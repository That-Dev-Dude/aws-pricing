import { SortDirection } from '@/../generated'
import Fuse from 'fuse.js'

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
  const numericSortDetermination = sortDirection === SortDirection.Desc ? -1 : 1
  if (searchTerm) results = handleSearchResults(FuseSearch, searchTerm, baseList)
  if (sortKey) {
    results = [...results].sort((a, b) =>
      a[sortKey] < b[sortKey] ? numericSortDetermination : numericSortDetermination * -1
    )
  }
  return results
}

export * from './responder'
export * from './prices'
