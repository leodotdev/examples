'use client'

import { motion } from "framer-motion"
import { heroAnimation, staggerContainer } from "@/lib/animations"
import { H1, P } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { IconChevronRight, IconChartBar, IconPhoto } from "@/components/icons"
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { stegaClean } from '@sanity/client/stega'

import type { HeroData } from '@/app/page'

export function HeroSection({ data }: { data: HeroData | null }) {
  // Show a placeholder if data is null or undefined
  if (!data) {
    return (
      <section className="min-h-[75vh] flex items-center w-full pt-20">
        <div className="max-w-7xl mx-auto w-full px-8 lg:px-16">
          <div className="text-center">
            <p className="text-muted-foreground">Loading hero content...</p>
          </div>
        </div>
      </section>
    )
  }
  
  // Provide default values to prevent errors
  const heroData = {
    badge: data.badge || 'New',
    badgeDescription: data.badgeDescription || 'Check out our latest features',
    title: data.title || 'Welcome to Digital Magic',
    subtitle: data.subtitle || 'Experience the power of modern web development',
    primaryButtonText: data.primaryButtonText || 'Get Started',
    primaryButtonUrl: data.primaryButtonUrl || '#',
    secondaryButtonText: data.secondaryButtonText || 'Learn More',
    secondaryButtonUrl: data.secondaryButtonUrl || '#',
    image: data.image
  }

  return (
    <section className="min-h-[75vh] flex items-center w-full pt-20">
      <div className="max-w-7xl mx-auto w-full px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="max-w-xl flex flex-col justify-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* What's new badge */}
            <motion.div 
              className="inline-flex items-center gap-3 mb-8 bg-muted rounded-full px-2 py-2 pr-4 w-fit"
              variants={heroAnimation}
            >
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {heroData.badge}
              </span>
              <span className="text-foreground text-sm font-medium">
                {heroData.badgeDescription}
              </span>
              <IconChevronRight className="w-4 h-4 text-muted-foreground" />
            </motion.div>

            <motion.div variants={heroAnimation}>
              <H1 className="text-foreground mb-8 text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                {heroData.title}
              </H1>
            </motion.div>

            <motion.div variants={heroAnimation}>
              <P className="text-muted-foreground text-xl mb-10 leading-relaxed">
                {heroData.subtitle}
              </P>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={heroAnimation}
            >
              <Button size="lg" className="px-8 py-4 text-lg" asChild>
                <a href={heroData.primaryButtonUrl}>{heroData.primaryButtonText}</a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="px-8 py-4 text-lg group"
                asChild
              >
                <a href={heroData.secondaryButtonUrl}>
                  {heroData.secondaryButtonText}
                  <IconChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-gradient-to-br from-muted/50 to-muted rounded-2xl p-8 shadow-2xl border border-border">
              <div className="aspect-[4/3] bg-card rounded-xl border border-border flex items-center justify-center overflow-hidden">
                {heroData.image ? (
                  (() => {
                    const urlBuilder = urlForImage(heroData.image)
                    const imageUrl = urlBuilder ? urlBuilder.width(600).height(450).url() : null
                    return imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={heroData.title || 'Hero image'}
                        width={600}
                        height={450}
                        className="object-cover rounded-xl"
                        priority
                      />
                    ) : (
                      <div className="text-center text-muted-foreground">
                        <IconPhoto className="w-16 h-16 mx-auto mb-4" />
                        <span className="text-sm font-medium">
                          Image Loading...
                        </span>
                      </div>
                    )
                  })()
                ) : (
                  <div className="text-center text-muted-foreground">
                    <IconChartBar className="w-16 h-16 mx-auto mb-4" />
                    <span className="text-sm font-medium">
                      Dashboard Interface
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}