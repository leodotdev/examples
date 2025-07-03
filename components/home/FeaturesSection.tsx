'use client'

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { H1, P } from "@/components/ui/typography"
import {
  IconCloudDownload,
  IconShield,
  IconRefresh,
  IconSearch,
  IconBuilding,
  IconUsers,
  IconCheck,
  IconPhoto,
} from "@/components/icons"

const iconMap: { [key: string]: any } = {
  IconCloudDownload,
  IconShield,
  IconRefresh,
  IconSearch,
  IconBuilding,
  IconUsers,
  IconCheck,
  IconPhoto,
}

import type { FeaturesData } from '@/app/page'

export function FeaturesSection({ data }: { data: FeaturesData | null }) {
  if (!data) return null
  
  // Provide default values
  const featuresData = {
    sectionTitle: data.sectionTitle || 'Features',
    sectionSubtitle: data.sectionSubtitle || 'Discover our powerful features',
    badge: data.badge || 'Features',
    featuresList: data.featuresList || []
  }

  return (
    <motion.section 
      className="min-h-[75vh] flex items-center py-24 px-8 lg:px-16"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              {featuresData.badge}
            </span>
          </div>
          <H1 className="text-foreground mb-8 text-4xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            {featuresData.sectionTitle}
          </H1>
          <P className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
            {featuresData.sectionSubtitle}
          </P>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuresData.featuresList.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || IconCloudDownload
            return (
              <motion.div key={index} className="text-left" variants={fadeInUp}>
                <div className="mb-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}