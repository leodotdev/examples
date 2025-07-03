import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

const imageBuilder = projectId && dataset 
  ? createImageUrlBuilder({ projectId, dataset })
  : null

export const urlForImage = (source: Image | undefined) => {
  if (!source || !imageBuilder) return null
  return imageBuilder.image(source).auto('format').fit('max')
}