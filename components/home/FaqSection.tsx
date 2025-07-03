'use client'

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { H1, P } from "@/components/ui/typography"
import { useState } from 'react'
import { IconChevronDown } from "@/components/icons"
import type { FaqData } from '@/app/page'

export function FaqSection({ data }: { data: FaqData | null }) {
  if (!data) return null
  
  const faqData = {
    sectionTitle: data.sectionTitle || 'Frequently Asked Questions',
    sectionSubtitle: data.sectionSubtitle || 'Everything you need to know',
    badge: data.badge || 'FAQ',
    faqList: data.faqList || []
  }

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <motion.section 
      className="py-24 px-8 lg:px-16"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              {faqData.badge}
            </span>
          </div>
          <H1 className="text-foreground mb-8 text-4xl lg:text-6xl font-bold leading-tight">
            {faqData.sectionTitle}
          </H1>
          <P className="text-muted-foreground text-xl leading-relaxed">
            {faqData.sectionSubtitle}
          </P>
        </div>

        <motion.div 
          className="space-y-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqData.faqList.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden"
              variants={fadeInUp}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <IconChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}