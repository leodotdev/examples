import { stegaClean } from '@sanity/client/stega'

export function cleanStega<T>(value: T): T {
  return stegaClean(value) as T
}