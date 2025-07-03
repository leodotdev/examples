import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool } from 'sanity/presentation'
import { schemaTypes } from './sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  name: 'default',
  title: 'Digital Magic CMS',
  basePath: '/studio',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items(S.documentTypeListItems()),
    }),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: '/api/draft',
        },
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    productionUrl: async (prev, context) => {
      const { document } = context
      
      if (document._type === 'post') {
        const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'
        return `${baseUrl}/blog/${document.slug?.current}`
      }
      
      // For homepage sections, just return the homepage
      if (['hero', 'features', 'pricing', 'testimonials', 'stats', 'faq'].includes(document._type)) {
        const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'
        return baseUrl
      }
      
      return prev
    },
  },
})