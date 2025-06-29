"use client";

import { H1, P } from "@/components/ui/typography";
import {
  IconChevronRight,
  IconChartBar,
  IconCloudDownload,
  IconShield,
  IconShieldCheck,
  IconRefresh,
  IconCheck,
  IconBrandGithub,
  IconBrandYoutube,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandPinterest,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { lazy, Suspense } from "react";

// Lazy load heavy animation components
const LazyMotionSection = lazy(() => import("@/components/ui/motion-section").then(mod => ({ default: mod.MotionSection })));

// Simplified motion for critical path
const HeroSection = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-[75vh] flex items-center w-full pt-20">
    {children}
  </div>
);

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero Section - Critical path, no animations initially */}
        <HeroSection>
          <div className="max-w-7xl mx-auto w-full px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div className="max-w-xl flex flex-col justify-center">
                {/* What's new badge */}
                <div className="inline-flex items-center gap-3 mb-8 bg-muted rounded-full px-2 py-2 pr-4 w-fit">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Fresh drop
                  </span>
                  <span className="text-foreground text-sm font-medium">
                    Mind-bending features inside
                  </span>
                  <IconChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>

                <H1 className="text-foreground mb-8 text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                  Turn wild ideas into digital magic
                </H1>

                <P className="text-muted-foreground text-xl mb-10 leading-relaxed">
                  Where creativity meets code and impossible becomes
                  inevitable. Build products that don't just work—they spark
                  joy and change how people see the world.
                </P>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="px-8 py-4 text-lg">
                    Get started
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="px-8 py-4 text-lg group"
                  >
                    Learn more
                    <IconChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Right Column - Dashboard Image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-muted/50 to-muted rounded-2xl p-8 shadow-2xl border border-border">
                  <div className="aspect-[4/3] bg-card rounded-xl border border-border flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <IconChartBar className="w-16 h-16 mx-auto mb-4" />
                      <span className="text-sm font-medium">
                        Dashboard Interface
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeroSection>

        {/* Rest of content with lazy-loaded animations */}
        <Suspense fallback={<div className="h-[75vh] flex items-center justify-center">Loading...</div>}>
          <LazyMotionSection className="min-h-[75vh] flex items-center py-24 px-8 lg:px-16">
            <div className="max-w-7xl mx-auto w-full">
              {/* Features Section Content - reduced DOM complexity */}
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 mb-8">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Features
                  </span>
                </div>
                <H1 className="text-foreground mb-8 text-4xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
                  Tools that think ahead of you
                </H1>
                <P className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
                  Stop wrestling with complexity. Our platform anticipates your
                  needs and handles the heavy lifting while you focus on what
                  matters: creating something extraordinary.
                </P>
              </div>

              {/* Simplified features grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                {[
                  {
                    icon: IconCloudDownload,
                    title: "Deploy with a thought",
                    description: "Code travels from your fingertips to the world in seconds. No pipelines to configure, no servers to babysit—just pure, unfiltered deployment bliss."
                  },
                  {
                    icon: IconShield,
                    title: "Fort Knox security",
                    description: "Your data sleeps soundly behind walls of encryption. Military-grade protection that's so seamless, you'll forget security was ever a concern."
                  },
                  {
                    icon: IconRefresh,
                    title: "Intelligent workflows",
                    description: "Tasks flow like water finding its path. Our smart queues learn your patterns and optimize themselves, turning chaos into choreographed perfection."
                  },
                  {
                    icon: IconShieldCheck,
                    title: "Psychic monitoring",
                    description: "We spot problems before they happen. Our AI-powered sentinel watches over your applications like a guardian angel with really good WiFi."
                  }
                ].map((feature, index) => (
                  <div key={index} className="text-left">
                    <div className="mb-6">
                      <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </LazyMotionSection>
        </Suspense>

        {/* Remaining sections - keeping only essential content for now */}
        <section className="min-h-[75vh] flex items-center py-24 px-8 lg:px-16 bg-background">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Pricing
                </span>
              </div>
              <H1 className="text-foreground mb-8 text-4xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
                Investment in your digital empire
              </H1>
              <P className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
                Stop thinking costs, start thinking returns. Every plan is
                designed to multiply your success faster than you can count the
                profits.
              </P>
            </div>

            {/* Simplified pricing cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Solo Creator */}
              <div className="bg-card rounded-xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Solo Creator
                </h3>
                <p className="text-muted-foreground mb-6">
                  Everything you need to turn your bedroom into a creative empire.
                </p>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-foreground">$19</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {["5 products", "Up to 1,000 subscribers", "Basic analytics", "48-hour support response time"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <IconCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Buy plan
                </button>
              </div>

              {/* Growth Machine */}
              <div className="bg-card rounded-xl border-2 border-blue-600 p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most popular
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3 mt-2">
                  Growth Machine
                </h3>
                <p className="text-muted-foreground mb-6">
                  For teams ready to break the internet (in the best way possible).
                </p>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-foreground">$49</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {["25 products", "Up to 10,000 subscribers", "Advanced analytics", "24-hour support response time", "Marketing automations"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <IconCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Buy plan
                </button>
              </div>

              {/* Digital Dynasty */}
              <div className="bg-card rounded-xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Digital Dynasty
                </h3>
                <p className="text-muted-foreground mb-6">
                  When you're ready to rule the digital realm without limits.
                </p>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-foreground">$99</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {["Unlimited products", "Unlimited subscribers", "Advanced analytics", "1-hour, dedicated support response time", "Marketing automations"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <IconCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Buy plan
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background py-16 px-8 lg:px-16 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 bg-background rounded opacity-90"></div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Turning wild ideas into digital magic, one line of code at a time.
                </p>
                <div className="flex items-center gap-4">
                  <a href="#" className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors">
                    <IconBrandTwitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors">
                    <IconBrandLinkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors">
                    <IconBrandPinterest className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors">
                    <IconBrandGithub className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors">
                    <IconBrandYoutube className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="text-foreground font-semibold mb-4">Solutions</h3>
                <ul className="space-y-3">
                  {["Marketing", "Analytics", "Automation", "Commerce", "Insights"].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-foreground font-semibold mb-4">Support</h3>
                <ul className="space-y-3">
                  {["Submit ticket", "Documentation", "Guides"].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-foreground font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  {["About", "Blog", "Jobs", "Press"].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-foreground font-semibold mb-4">Legal</h3>
                <ul className="space-y-3">
                  {["Terms of service", "Privacy policy", "License"].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm">
                © 2024 Your Company, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}