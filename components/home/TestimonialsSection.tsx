'use client'

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { H1, P } from "@/components/ui/typography"
import { IconStar } from "@/components/icons"
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import type { TestimonialsData } from '@/app/page'

export function TestimonialsSection({ data }: { data: TestimonialsData | null }) {
  if (!data) return null
  
  const testimonialsData = {
    sectionTitle: data.sectionTitle || 'What Our Customers Say',
    sectionSubtitle: data.sectionSubtitle || 'Hear from those who have transformed their business with us',
    badge: data.badge || 'Testimonials',
    testimonialsList: data.testimonialsList || []
  }

  return (
    <motion.section 
      className="py-24 px-8 lg:px-16"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              {testimonialsData.badge}
            </span>
          </div>
          <H1 className="text-foreground mb-8 text-4xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            {testimonialsData.sectionTitle}
          </H1>
          <P className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
            {testimonialsData.sectionSubtitle}
          </P>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonialsData.testimonialsList.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border"
              variants={fadeInUp}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <IconStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating 
                        ? 'text-yellow-500 fill-yellow-500' 
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              
              <blockquote className="text-lg mb-6 text-foreground">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                {testimonial.authorAvatar ? (
                  (() => {
                    const urlBuilder = urlForImage(testimonial.authorAvatar)
                    const imageUrl = urlBuilder ? urlBuilder.width(48).height(48).url() : null
                    return imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={testimonial.authorName}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-muted rounded-full" />
                    )
                  })()
                ) : (
                  <div className="w-12 h-12 bg-muted rounded-full" />
                )}
                <div>
                  <div className="font-semibold text-foreground">{testimonial.authorName}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.authorTitle} at {testimonial.authorCompany}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}