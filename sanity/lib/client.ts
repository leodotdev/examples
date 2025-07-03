import { createClient } from 'next-sanity'
import { draftMode } from 'next/headers'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false, // Set to false for authenticated requests
  perspective: 'published',
  stega: {
    enabled: false, // We'll enable this conditionally
    studioUrl: '/studio',
  },
})

// Create a client specifically for fetching with stega encoding
export function getClient(preview?: boolean) {
  return createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    useCdn: !preview,
    perspective: preview ? 'previewDrafts' : 'published',
    token: preview ? process.env.SANITY_API_READ_TOKEN : undefined,
    stega: preview
      ? {
          enabled: true,
          studioUrl: '/studio',
        }
      : undefined,
  })
}