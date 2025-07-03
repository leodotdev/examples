'use client'

import { enableVisualEditing } from '@sanity/visual-editing'
import { useEffect } from 'react'

export default function VisualEditing() {
  useEffect(() => {
    // Only enable visual editing in development or when draft mode is enabled
    if (process.env.NODE_ENV === 'development') {
      enableVisualEditing({
        studioUrl: '/studio',
      })
    }
  }, [])

  return null
}