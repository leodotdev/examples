import { defineLive } from '@sanity/react-loader'
import { client } from './client'

export const { sanityFetch, SanityLive } = defineLive({
  client,
  browserToken: process.env.NEXT_PUBLIC_SANITY_BROWSER_TOKEN,
  serverToken: process.env.SANITY_API_READ_TOKEN,
})