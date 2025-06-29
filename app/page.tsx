"use client";

import { H1, P } from "@/components/ui/typography";
import {
  IconWorld,
  IconChevronRight,
  IconChartBar,
  IconCloudDownload,
  IconShield,
  IconShieldCheck,
  IconRefresh,
  IconSearch,
  IconBuilding,
  IconUsers,
  IconCheck,
  IconPhoto,
  IconBrandGithub,
  IconBrandYoutube,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandPinterest,
} from "@/components/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

// Simple wrapper for critical sections (no animations initially) 
const SimpleSection = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);

// Optimized section wrapper using reveal-on-scroll
const RevealSection = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <section className={`${className} reveal-on-scroll`}>
    {children}
  </section>
);

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero Section - Critical path, minimal animations */}
        <SimpleSection className="min-h-[75vh] flex items-center w-full pt-20">
          <div className="max-w-7xl mx-auto w-full px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div className="max-w-xl flex flex-col justify-center">
                {/* What's new badge */}
                <div className="inline-flex items-center gap-3 mb-8 bg-muted rounded-full px-2 py-2 pr-4 w-fit hero-animate">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Fresh drop
                  </span>
                  <span className="text-foreground text-sm font-medium">
                    Mind-bending features inside
                  </span>
                  <IconChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>

                <H1 className="text-foreground mb-8 text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight hero-animate delay-1">
                  Turn wild ideas into digital magic
                </H1>

                <P className="text-muted-foreground text-xl mb-10 leading-relaxed hero-animate delay-2">
                  Where creativity meets code and impossible becomes
                  inevitable. Build products that don't just work—they spark
                  joy and change how people see the world.
                </P>

                <div className="flex flex-col sm:flex-row gap-4 hero-animate delay-3">
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
              <div className="relative hero-animate delay-4">
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
        </SimpleSection>

        {/* Features Section */}
        <RevealSection className="min-h-[75vh] flex items-center py-24 px-8 lg:px-16">
          <div className="max-w-7xl mx-auto w-full">
            {/* Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Features
                </span>
              </div>
              <H1 className="text-foreground mb-8 text-4xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
                Tools that think
                <br />
                ahead of you
              </H1>
              <P className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
                Stop wrestling with complexity. Our platform anticipates your
                needs and handles the heavy lifting while you focus on what
                matters: creating something extraordinary.
              </P>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              {/* Feature 1 */}
              <div className="text-left reveal-on-scroll stagger-1">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                    <IconCloudDownload className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Deploy with a thought
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Code travels from your fingertips to the world in seconds. No
                  pipelines to configure, no servers to babysit—just pure,
                  unfiltered deployment bliss.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-left reveal-on-scroll stagger-2">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                    <IconShield className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Fort Knox security
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Your data sleeps soundly behind walls of encryption.
                  Military-grade protection that's so seamless, you'll forget
                  security was ever a concern.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-left reveal-on-scroll stagger-3">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                    <IconRefresh className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Intelligent workflows
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Tasks flow like water finding its path. Our smart queues learn
                  your patterns and optimize themselves, turning chaos into
                  choreographed perfection.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="text-left reveal-on-scroll stagger-4">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                    <IconShieldCheck className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Psychic monitoring
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We spot problems before they happen. Our AI-powered sentinel
                  watches over your applications like a guardian angel with
                  really good WiFi.
                </p>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Dashboard Section */}
        <RevealSection className="min-h-[75vh] bg-muted/50 flex items-center py-24 px-8 lg:px-16">
          <div className="max-w-7xl mx-auto w-full">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Dashboard
                </span>
              </div>
              <H1 className="text-foreground mb-8 text-4xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
                Data that tells
                <br />
                your story
              </H1>
            </div>

            {/* Dashboard Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              {/* Main Dashboard Panel */}
              <div className="lg:col-span-2 bg-card rounded-xl border border-border overflow-hidden reveal-on-scroll">
                {/* Dashboard Image Placeholder */}
                <div className="h-64 bg-muted/50 border-b border-border flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <IconChartBar className="w-16 h-16 mx-auto mb-4" />
                    <span className="text-sm">Dashboard Interface</span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Blue Label */}
                  <div className="mb-3">
                    <span className="text-blue-600 text-sm font-medium">
                      Shopping
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Smart recommendations
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    AI-powered suggestions based on your style preferences and
                    purchase history.
                  </p>
                </div>
              </div>

              {/* Activity Feed */}
              <div className="bg-card rounded-xl border border-border overflow-hidden reveal-on-scroll stagger-1">
                {/* Activity Feed Image Placeholder */}
                <div className="h-64 bg-muted/50 border-b border-border flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <IconWorld className="w-16 h-16 mx-auto mb-4" />
                    <span className="text-sm">Activity Timeline</span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Blue Label */}
                  <div className="mb-3">
                    <span className="text-blue-600 text-sm font-medium">
                      Network
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Globally distributed CDN
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Aenean vulputate justo commodo auctor vehicula in malesuada
                    semper.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Feature Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Shopping Section */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                {/* Smart Search Image Placeholder */}
                <div className="h-64 bg-muted/50 border-b border-border flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <IconSearch className="w-16 h-16 mx-auto mb-4" />
                    <span className="text-sm">Smart Search</span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Blue Label */}
                  <div className="mb-3">
                    <span className="text-blue-600 text-sm font-medium">
                      Search
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Mind-reading search
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Our search engine understands intent better than you do.
                    Find what you need before you know you need it.
                  </p>
                </div>
              </div>

              {/* Brands Section */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                {/* Brand Partners Image Placeholder */}
                <div className="h-64 bg-muted/50 border-b border-border flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <IconBuilding className="w-16 h-16 mx-auto mb-4" />
                    <span className="text-sm">Brand Partners</span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Blue Label */}
                  <div className="mb-3">
                    <span className="text-blue-600 text-sm font-medium">
                      Partners
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Curated excellence
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Every partner is handpicked by our taste-makers. Quality so
                    high, mediocrity isn't even invited to the party.
                  </p>
                </div>
              </div>

              {/* Community Section */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                {/* Social Network Image Placeholder */}
                <div className="h-64 bg-muted/50 border-b border-border flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <IconUsers className="w-16 h-16 mx-auto mb-4" />
                    <span className="text-sm">Social Network</span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Blue Label */}
                  <div className="mb-3">
                    <span className="text-blue-600 text-sm font-medium">
                      Community
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Tribe of tastemakers
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Join a community where great taste is contagious. Share
                    discoveries and influence the cultural zeitgeist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Pricing Section */}
        <RevealSection className="min-h-[75vh] flex items-center py-24 px-8 lg:px-16 bg-background">
          <div className="max-w-7xl mx-auto w-full">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Pricing
                </span>
              </div>
              <H1 className="text-foreground mb-8 text-4xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
                Investment in
                <br />
                your digital empire
              </H1>
              <P className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
                Stop thinking costs, start thinking returns. Every plan is
                designed to multiply your success faster than you can count the
                profits.
              </P>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Freelancer Plan */}
              <div className="bg-card rounded-xl p-8 reveal-on-scroll stagger-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Solo Creator
                </h3>
                <p className="text-muted-foreground mb-6">
                  Everything you need to turn your bedroom into a creative
                  empire.
                </p>

                <div className="mb-8">
                  <span className="text-5xl font-bold text-foreground">
                    $19
                  </span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">5 products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Up to 1,000 subscribers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Basic analytics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      48-hour support response time
                    </span>
                  </li>
                </ul>

                <button className="w-full py-3 px-6 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Buy plan
                </button>
              </div>

              {/* Startup Plan */}
              <div className="bg-card rounded-xl border-2 border-blue-600 p-8 relative reveal-on-scroll stagger-2">
                {/* Most Popular Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most popular
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-blue-600 mb-3 mt-2">
                  Growth Machine
                </h3>
                <p className="text-muted-foreground mb-6">
                  For teams ready to break the internet (in the best way
                  possible).
                </p>

                <div className="mb-8">
                  <span className="text-5xl font-bold text-foreground">
                    $49
                  </span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">25 products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Up to 10,000 subscribers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Advanced analytics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      24-hour support response time
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Marketing automations
                    </span>
                  </li>
                </ul>

                <button className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Buy plan
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-card rounded-xl p-8 reveal-on-scroll stagger-3">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Digital Dynasty
                </h3>
                <p className="text-muted-foreground mb-6">
                  When you're ready to rule the digital realm without limits.
                </p>

                <div className="mb-8">
                  <span className="text-5xl font-bold text-foreground">
                    $99
                  </span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Unlimited products
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Unlimited subscribers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Advanced analytics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      1-hour, dedicated support response time
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Marketing automations
                    </span>
                  </li>
                </ul>

                <button className="w-full py-3 px-6 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Buy plan
                </button>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Newsletter Section */}
        <RevealSection className="min-h-[75vh] flex items-center py-24 px-8 lg:px-16 bg-muted/50">
          <div className="max-w-4xl mx-auto w-full text-center">
            <H1 className="text-foreground mb-8 text-4xl lg:text-6xl font-bold leading-tight">
              Join the rebellion
              <br />
              against boring updates.
            </H1>

            <form className="flex flex-col sm:flex-row gap-4 mb-8 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email (we promise not to spam)"
                className="flex-1 px-6 py-4 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-foreground placeholder-muted-foreground text-lg"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-colors shadow-lg shadow-blue-600/25"
              >
                Subscribe
              </button>
            </form>

            <p className="text-muted-foreground text-lg">
              Your data is safer than your grandmother's secret recipe. Read our{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                privacy policy
              </a>
              .
            </p>
          </div>
        </RevealSection>

        {/* Statistics Section */}
        <RevealSection className="min-h-[75vh] flex items-center py-24 px-8 lg:px-16 bg-background">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] bg-gradient-to-br from-muted/50 to-muted rounded-2xl overflow-hidden shadow-2xl border border-border">
                  <div className="w-full h-full bg-card m-4 rounded-xl border border-border flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <IconPhoto className="w-16 h-16 mx-auto mb-4" />
                      <span className="text-sm font-medium">
                        Team Collaboration
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <div className="mb-8">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Our track record
                  </span>
                </div>

                <H1 className="text-foreground mb-8 text-4xl lg:text-5xl font-bold leading-tight">
                  Where digital dreams
                  <br />
                  become reality
                </H1>

                <P className="text-muted-foreground text-xl leading-relaxed mb-16">
                  Thousands of creators, dreamers, and digital rebels have
                  chosen us as their launchpad to greatness. Your turn to join
                  the league of extraordinary.
                </P>

                {/* Statistics Grid */}
                <div className="grid grid-cols-2 gap-8">
                  {/* Stat 1 */}
                  <div className="reveal-on-scroll stagger-1">
                    <div className="text-4xl font-bold text-foreground mb-2">
                      8,000+
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Creators on the platform
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="reveal-on-scroll stagger-2">
                    <div className="text-4xl font-bold text-foreground mb-2">
                      3%
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Flat platform fee
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="reveal-on-scroll stagger-3">
                    <div className="text-4xl font-bold text-foreground mb-2">
                      99.9%
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Uptime guarantee
                    </div>
                  </div>

                  {/* Stat 4 */}
                  <div className="reveal-on-scroll stagger-4">
                    <div className="text-4xl font-bold text-foreground mb-2">
                      $70M
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Paid out to creators
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Testimonials Section */}
        <RevealSection className="min-h-[75vh] flex items-center py-24 px-8 lg:px-16 bg-muted/30">
          <div className="max-w-7xl mx-auto w-full">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Testimonials
                </span>
              </div>
              <H1 className="text-foreground mb-8 text-4xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
                Love letters from
                <br />
                our digital family
              </H1>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <p className="text-foreground mb-6 leading-relaxed">
                  "This platform doesn't just solve problems—it anticipates
                  them. It's like having a crystal ball for my business."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-red-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">LA</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Leslie Alexander
                    </div>
                    <div className="text-muted-foreground text-sm">
                      @lesliealexander
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 - Larger featured testimonial */}
              <div className="bg-card rounded-xl p-8 shadow-sm lg:col-span-1 lg:row-span-2 flex flex-col justify-center">
                <p className="text-foreground mb-8 leading-relaxed text-lg">
                  "I've tried every platform out there, but this one reads my
                  mind. It's not just a tool—it's like having a digital
                  extension of my brain that happens to be way smarter than me."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">BG</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-lg">
                      Brenna Goyette
                    </div>
                    <div className="text-muted-foreground">@brennagoyette</div>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">S</span>
                  </div>
                  <span className="font-semibold text-foreground">
                    SavvyCal
                  </span>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <p className="text-foreground mb-6 leading-relaxed">
                  "Finally, a platform that gets it. My productivity has tripled
                  and my stress has vanished into thin air."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">LK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Leonard Krasner
                    </div>
                    <div className="text-muted-foreground text-sm">
                      @leonardkrasner
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <p className="text-foreground mb-6 leading-relaxed">
                  "I was skeptical at first, but this changed everything. My
                  clients think I'm a wizard now."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">MF</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Michael Foster
                    </div>
                    <div className="text-muted-foreground text-sm">
                      @michaelfoster
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <p className="text-foreground mb-6 leading-relaxed">
                  "The learning curve? What learning curve? I was up and running
                  in minutes, creating like never before."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">FM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Floyd Miles
                    </div>
                    <div className="text-muted-foreground text-sm">
                      @floydmiles
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional testimonials */}
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <p className="text-foreground mb-6 leading-relaxed">
                  "My competition is still figuring out what hit them. This
                  platform is my secret weapon."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">DV</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Dries Vincent
                    </div>
                    <div className="text-muted-foreground text-sm">
                      @driesvincent
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-sm">
                <p className="text-foreground mb-6 leading-relaxed">
                  "Three words: game absolutely changed. This is the future and
                  I'm living in it."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">LW</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Lindsay Walton
                    </div>
                    <div className="text-muted-foreground text-sm">
                      @lindsaywalton
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-sm">
                <p className="text-foreground mb-6 leading-relaxed">
                  &quot;This isn&apos;t just a tool—it&apos;s like having a
                  digital genius as your creative partner. Pure magic.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">TC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Tom Cook
                    </div>
                    <div className="text-muted-foreground text-sm">
                      @tomcook
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-sm">
                <p className="text-foreground mb-6 leading-relaxed">
                  &quot;I&apos;ve never felt more confident about my digital
                  strategy. This platform makes the impossible feel
                  inevitable.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">ES</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Emily Selman
                    </div>
                    <div className="text-muted-foreground text-sm">
                      @emilyselman
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-sm">
                <p className="text-foreground mb-6 leading-relaxed">
                  "ROI through the roof. This investment paid for itself in the
                  first week. Best decision I've made this year."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">CH</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Courtney Henry
                    </div>
                    <div className="text-muted-foreground text-sm">
                      @courtneyhenry
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-sm">
                <p className="text-foreground mb-6 leading-relaxed">
                  "The support team is incredible. They solved my problem before
                  I even knew I had one. Mind readers!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-400 to-purple-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">WF</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Whitney Francis
                    </div>
                    <div className="text-muted-foreground text-sm">
                      @whitneyfrancis
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Contact Form Section */}
        <RevealSection className="min-h-[75vh] bg-background flex items-center py-24 px-8 lg:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Left Column - Form */}
              <div className="order-2 lg:order-1">
                <div className="max-w-xl">
                  <H1 className="text-foreground mb-6 text-4xl lg:text-6xl font-bold leading-tight">
                    Let's work
                    <br />
                    together
                  </H1>
                  <P className="text-muted-foreground text-xl leading-relaxed mb-12">
                    Proin volutpat consequat portitor cras nullam gravida at
                    orci molestie a eu arcu sed ut tincidunt magna.
                  </P>

                  <form className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone
                        <span className="text-muted-foreground ml-2">
                          Optional
                        </span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        How can we help you?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Max 500 characters"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                      />
                    </div>

                    {/* Budget Selection */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-4">
                        Expected budget
                      </label>
                      <div className="space-y-3">
                        {[
                          { value: "less-than-25k", label: "Less than $25K" },
                          { value: "25k-50k", label: "$25K – $50K" },
                          { value: "50k-100k", label: "$50K – $100K" },
                          { value: "100k-plus", label: "$100K+" },
                        ].map(({ value, label }) => (
                          <label key={value} className="flex items-center">
                            <input
                              type="radio"
                              name="budget"
                              value={value}
                              className="w-4 h-4 text-blue-600 bg-muted border-border focus:ring-blue-500 focus:ring-2"
                            />
                            <span className="ml-3 text-foreground">
                              {label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Send message
                    </button>
                  </form>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] bg-muted rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-muted/80 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <IconUsers className="w-16 h-16 mx-auto mb-4" />
                      <span className="text-sm">Office Workspace Image</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Team Leadership Section */}
        <RevealSection className="min-h-[75vh] flex items-center py-24 px-8 lg:px-16 bg-muted/50">
          <div className="max-w-7xl mx-auto w-full">
            {/* Section Header */}
            <div className="mb-20">
              <H1 className="text-foreground mb-8 text-4xl lg:text-6xl font-bold leading-tight">
                Meet our
                <br />
                leadership
              </H1>
              <P className="text-muted-foreground text-xl leading-relaxed max-w-2xl">
                We're a dynamic group of individuals who are passionate about
                what we do and dedicated to delivering the best results for our
                clients.
              </P>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {/* Leslie Alexander */}
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-xl">LA</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-xl mb-1">
                    Leslie Alexander
                  </h3>
                  <p className="text-blue-600 font-medium">Co-Founder / CEO</p>
                </div>
              </div>

              {/* Michael Foster */}
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-xl">MF</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-xl mb-1">
                    Michael Foster
                  </h3>
                  <p className="text-blue-600 font-medium">Co-Founder / CTO</p>
                </div>
              </div>

              {/* Dries Vincent */}
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-xl">DV</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-xl mb-1">
                    Dries Vincent
                  </h3>
                  <p className="text-blue-600 font-medium">
                    Business Relations
                  </p>
                </div>
              </div>

              {/* Lindsay Walton */}
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-xl">LW</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-xl mb-1">
                    Lindsay Walton
                  </h3>
                  <p className="text-blue-600 font-medium">
                    Front-end Developer
                  </p>
                </div>
              </div>

              {/* Courtney Henry */}
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-xl">CH</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-xl mb-1">
                    Courtney Henry
                  </h3>
                  <p className="text-blue-600 font-medium">Designer</p>
                </div>
              </div>

              {/* Tom Cook */}
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-xl">TC</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-xl mb-1">
                    Tom Cook
                  </h3>
                  <p className="text-blue-600 font-medium">
                    Director of Product
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Trusted Companies Section */}
        <RevealSection className="py-20 px-8 lg:px-16 bg-background">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-foreground mb-16">
              In good company with digital pioneers
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-60">
              {/* CloudFlow */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-muted-foreground rounded"></div>
                </div>
                <span className="text-xl font-semibold text-foreground">
                  CloudFlow
                </span>
              </div>

              {/* DataSync */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-muted-foreground rounded"></div>
                </div>
                <span className="text-xl font-semibold text-foreground">
                  DataSync
                </span>
              </div>

              {/* FlexCore */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-muted-foreground rounded"></div>
                </div>
                <span className="text-xl font-semibold text-foreground">
                  FlexCore
                </span>
              </div>

              {/* NextGen */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-muted-foreground rounded"></div>
                </div>
                <span className="text-xl font-semibold text-foreground">
                  NextGen
                </span>
              </div>

              {/* StreamTech */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-muted-foreground rounded"></div>
                </div>
                <span className="text-xl font-semibold text-foreground">
                  StreamTech
                </span>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* FAQ Section */}
        <RevealSection className="min-h-[75vh] flex items-center py-24 px-8 lg:px-16 bg-muted/50">
          <div className="max-w-4xl mx-auto w-full">
            <H1 className="text-foreground mb-20 text-4xl lg:text-6xl font-bold leading-tight text-center">
              Questions that keep
              <br />
              you up at night
            </H1>

            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="w-full"
            >
              <AccordionItem value="item-1" className="border-border">
                <AccordionTrigger className="text-xl font-semibold text-foreground py-8 hover:no-underline">
                  Is this too good to be true?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-8 pr-12">
                  We get it—it sounds like magic. But thousands of creators are
                  already living proof that sometimes the impossible is just
                  innovation in disguise.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-border">
                <AccordionTrigger className="text-xl font-semibold text-foreground py-8 hover:no-underline">
                  Will this replace my entire team?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-8 pr-12">
                  Not replace—supercharge. Your team will become unstoppable
                  when they're armed with tools that think as fast as they do.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-border">
                <AccordionTrigger className="text-xl font-semibold text-foreground py-8 hover:no-underline">
                  How fast can I see results?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-8 pr-12">
                  Most creators see improvements within 24 hours. Some see magic
                  happen in minutes. It depends how ready you are to embrace the
                  future.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-border">
                <AccordionTrigger className="text-xl font-semibold text-foreground py-8 hover:no-underline">
                  What if I'm not technical?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-8 pr-12">
                  Perfect! Our platform was designed for humans, not robots. If
                  you can use a smartphone, you can build digital empires with
                  us.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-border">
                <AccordionTrigger className="text-xl font-semibold text-foreground py-8 hover:no-underline">
                  Can I cancel anytime?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-8 pr-12">
                  Absolutely. Though we're confident you'll be too busy counting
                  your success to think about leaving.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-border">
                <AccordionTrigger className="text-xl font-semibold text-foreground py-8 hover:no-underline">
                  Is my data really safe?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-8 pr-12">
                  Safer than a secret in a vault guarded by ninjas. We use
                  military-grade encryption and our security team never sleeps
                  (seriously, they're vampires).
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </RevealSection>

        {/* Footer */}
        <footer className="bg-background py-16 px-8 lg:px-16 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Logo and Description */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 bg-background rounded opacity-90"></div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Turning wild ideas into digital magic, one line of code at a
                  time.
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <IconBrandTwitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <IconBrandLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <IconBrandPinterest className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <IconBrandGithub className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <IconBrandYoutube className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="text-foreground font-semibold mb-4">
                  Solutions
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Analytics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Automation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Commerce
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Insights
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-foreground font-semibold mb-4">Support</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Submit ticket
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Guides
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-foreground font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Press
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-foreground font-semibold mb-4">Legal</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Terms of service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      License
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Copyright */}
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