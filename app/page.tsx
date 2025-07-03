import { client } from '@/sanity/lib/client'
import { draftMode } from 'next/headers'
import { 
  heroQuery, 
  featuresQuery, 
  pricingQuery, 
  testimonialsQuery, 
  statsQuery, 
  faqQuery 
} from '@/sanity/lib/queries'
import { HeroSection } from '@/components/home/HeroSection'
import { FeaturesSection } from '@/components/home/FeaturesSection'
import { PricingSection } from '@/components/home/PricingSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { StatsSection } from '@/components/home/StatsSection'
import { FaqSection } from '@/components/home/FaqSection'
import { CtaSection } from '@/components/home/CtaSection'
import Header from "@/components/Header"

// Type definitions moved from component files

export interface HeroData {
  badge: string
  badgeDescription: string
  title: string
  subtitle: string
  primaryButtonText: string
  primaryButtonUrl: string
  secondaryButtonText: string
  secondaryButtonUrl: string
  image?: any
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface FeaturesData {
  sectionTitle: string
  sectionSubtitle: string
  badge: string
  featuresList: Feature[]
}

interface Plan {
  name: string
  description: string
  price: string
  period: string
  features: string[]
  highlighted: boolean
  buttonText: string
  buttonUrl: string
}

export interface PricingData {
  sectionTitle: string
  sectionSubtitle: string
  badge: string
  plans: Plan[]
}

interface Testimonial {
  content: string
  authorName: string
  authorTitle: string
  authorCompany: string
  authorAvatar?: any
  rating: number
}

export interface TestimonialsData {
  sectionTitle: string
  sectionSubtitle: string
  badge: string
  testimonialsList: Testimonial[]
}

interface Statistic {
  number: string
  label: string
  description: string
}

export interface StatsData {
  sectionTitle: string
  sectionSubtitle: string
  statisticsList: Statistic[]
}

interface FaqItem {
  question: string
  answer: string
}

export interface FaqData {
  sectionTitle: string
  sectionSubtitle: string
  badge: string
  faqList: FaqItem[]
}

async function getPageData() {
  const { isEnabled } = await draftMode()
  
  const [hero, features, pricing, testimonials, stats, faq] = await Promise.all([
    client.fetch<HeroData>(heroQuery, {}, { 
      perspective: isEnabled ? 'previewDrafts' : 'published'
    }),
    client.fetch<FeaturesData>(featuresQuery, {}, { 
      perspective: isEnabled ? 'previewDrafts' : 'published'
    }),
    client.fetch<PricingData>(pricingQuery, {}, { 
      perspective: isEnabled ? 'previewDrafts' : 'published'
    }),
    client.fetch<TestimonialsData>(testimonialsQuery, {}, { 
      perspective: isEnabled ? 'previewDrafts' : 'published'
    }),
    client.fetch<StatsData>(statsQuery, {}, { 
      perspective: isEnabled ? 'previewDrafts' : 'published'
    }),
    client.fetch<FaqData>(faqQuery, {}, { 
      perspective: isEnabled ? 'previewDrafts' : 'published'
    }),
  ])

  return { hero, features, pricing, testimonials, stats, faq }
}

// Components are now imported from separate client component files

export default async function HomePage() {
  const pageData = await getPageData()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        <HeroSection data={pageData.hero} />
        <FeaturesSection data={pageData.features} />
        <PricingSection data={pageData.pricing} />
        <TestimonialsSection data={pageData.testimonials} />
        <StatsSection data={pageData.stats} />
        <FaqSection data={pageData.faq} />
        <CtaSection />
      </main>
    </>
  )
}