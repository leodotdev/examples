'use client'

import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"
import { H1, P } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { IconArrowRight } from "@/components/icons"

export function CtaSection() {
  return (
    <motion.section 
      className="py-24 px-8 lg:px-16 bg-muted/30"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="max-w-4xl mx-auto text-center">
        <H1 className="mb-8 text-4xl lg:text-6xl font-bold leading-tight text-foreground">
          Ready to transform your digital presence?
        </H1>
        <P className="text-xl leading-relaxed mb-10 text-muted-foreground max-w-2xl mx-auto">
          Join thousands of businesses that have already made the switch to a smarter, more efficient platform.
        </P>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8 py-4 text-lg group" asChild>
            <a href="/signup">
              Start free trial
              <IconArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-4 text-lg" asChild>
            <a href="/contact">Talk to sales</a>
          </Button>
        </div>
      </div>
    </motion.section>
  )
}