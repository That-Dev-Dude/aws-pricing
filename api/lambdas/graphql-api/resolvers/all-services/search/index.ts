import { Resolver } from '@/graphql-api/interfaces'

export const allServices: Resolver<{ message: string }> = async () => {
  return {
    message: '',
  }
}
