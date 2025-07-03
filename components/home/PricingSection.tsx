'use client'

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { H1, P } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { IconCheck } from "@/components/icons"
import type { PricingData } from '@/app/page'

export function PricingSection({ data }: { data: PricingData | null }) {
  if (!data) return null
  
  const pricingData = {
    sectionTitle: data.sectionTitle || 'Pricing Plans',
    sectionSubtitle: data.sectionSubtitle || 'Choose the perfect plan for your needs',
    badge: data.badge || 'Pricing',
    plans: data.plans || []
  }

  return (
    <motion.section 
      className="py-24 px-8 lg:px-16 bg-muted/30"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
              {pricingData.badge}
            </span>
          </div>
          <H1 className="text-foreground mb-8 text-4xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            {pricingData.sectionTitle}
          </H1>
          <P className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
            {pricingData.sectionSubtitle}
          </P>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pricingData.plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted 
                  ? 'bg-primary text-primary-foreground shadow-2xl scale-105' 
                  : 'bg-card border border-border'
              }`}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className={`mb-6 ${plan.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                {plan.description}
              </p>
              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`${plan.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  /{plan.period}
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <IconCheck className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'text-primary-foreground' : 'text-primary'
                    }`} />
                    <span className={plan.highlighted ? 'text-primary-foreground/90' : ''}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full" 
                variant={plan.highlighted ? "secondary" : "default"}
                asChild
              >
                <a href={plan.buttonUrl}>{plan.buttonText}</a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}