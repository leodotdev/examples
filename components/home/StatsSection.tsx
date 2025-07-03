'use client'

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { H1, P } from "@/components/ui/typography"
import type { StatsData } from '@/app/page'

export function StatsSection({ data }: { data: StatsData | null }) {
  if (!data) return null
  
  const statsData = {
    sectionTitle: data.sectionTitle || 'Our Impact',
    sectionSubtitle: data.sectionSubtitle || 'Numbers that speak for themselves',
    statisticsList: data.statisticsList || []
  }

  return (
    <motion.section 
      className="py-24 px-8 lg:px-16 bg-primary text-primary-foreground"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <H1 className="mb-8 text-4xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            {statsData.sectionTitle}
          </H1>
          <P className="text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
            {statsData.sectionSubtitle}
          </P>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {statsData.statisticsList.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={fadeInUp}
            >
              <div className="text-5xl lg:text-6xl font-bold mb-4">
                {stat.number}
              </div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <div className="opacity-80">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}