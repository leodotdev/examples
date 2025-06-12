import { H1, P } from "@/components/ui/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <div className="min-h-[75vh] flex items-center w-full pt-20">
          <div className="max-w-7xl mx-auto w-full px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div className="max-w-xl">
                {/* Logo */}
                <div className="mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full opacity-90"></div>
                  </div>
                </div>

                {/* What's new badge */}
                <div className="inline-flex items-center gap-3 mb-8 bg-muted rounded-full px-4 py-2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Fresh drop
                  </span>
                  <span className="text-foreground text-sm font-medium">
                    Mind-bending features inside
                  </span>
                  <svg
                    className="w-4 h-4 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <H1 className="text-foreground mb-8 text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                  Turn wild ideas into
                  <br />
                  digital magic
                </H1>

                <P className="text-muted-foreground text-xl mb-10 leading-relaxed">
                  Where creativity meets code and impossible becomes inevitable.
                  Build products that don't just work—they spark joy and change
                  how people see the world.
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
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Button>
                </div>
              </div>

              {/* Right Column - Dashboard Image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-muted/50 to-muted rounded-2xl p-8 shadow-2xl border border-border">
                  <div className="aspect-[4/3] bg-card rounded-xl border border-border flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <svg
                        className="w-16 h-16 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                      <span className="text-sm font-medium">
                        Dashboard Interface
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="min-h-[75vh] flex items-center py-24 px-8 lg:px-16">
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
              <div className="text-left">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Deploy with a thought
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Code travels from your fingertips to the world in seconds.
                  No pipelines to configure, no servers to babysit—just pure,
                  unfiltered deployment bliss.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-left">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
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
              <div className="text-left">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Intelligent workflows
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Tasks flow like water finding its path. Our smart queues
                  learn your patterns and optimize themselves, turning chaos
                  into choreographed perfection.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="text-left">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
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
        </section>

        {/* Dashboard Section */}
        <section className="min-h-[75vh] bg-muted/50 flex items-center py-24 px-8 lg:px-16">
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
              <div className="lg:col-span-2 bg-card rounded-xl border border-border overflow-hidden">
                {/* Dashboard Image Placeholder */}
                <div className="h-64 bg-muted/50 border-b border-border flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <svg
                      className="w-16 h-16 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
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
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                {/* Activity Feed Image Placeholder */}
                <div className="h-64 bg-muted/50 border-b border-border flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <svg
                      className="w-16 h-16 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0-8H5a2 2 0 00-2 2v6a2 2 0 002 2h6m0-8v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2h6V5z"
                      />
                    </svg>
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
                    <svg
                      className="w-16 h-16 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
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
                    <svg
                      className="w-16 h-16 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
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
                    Every partner is handpicked by our taste-makers. Quality
                    so high, mediocrity isn't even invited to the party.
                  </p>
                </div>
              </div>

              {/* Community Section */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                {/* Social Network Image Placeholder */}
                <div className="h-64 bg-muted/50 border-b border-border flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <svg
                      className="w-16 h-16 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
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
                    Join a community where great taste is contagious.
                    Share discoveries and influence the cultural zeitgeist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="min-h-[75vh] flex items-center py-24 px-8 lg:px-16 bg-background">
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
                designed to multiply your success faster than you can count
                the profits.
              </P>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Freelancer Plan */}
              <div className="bg-card rounded-xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Solo Creator
                </h3>
                <p className="text-muted-foreground mb-6">
                  Everything you need to turn your bedroom into a creative empire.
                </p>

                <div className="mb-8">
                  <span className="text-5xl font-bold text-foreground">
                    $19
                  </span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">5 products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">
                      Up to 1,000 subscribers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">
                      Basic analytics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
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
              <div className="bg-card rounded-xl border-2 border-blue-600 p-8 relative">
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
                  For teams ready to break the internet (in the best way possible).
                </p>

                <div className="mb-8">
                  <span className="text-5xl font-bold text-foreground">
                    $49
                  </span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">25 products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">
                      Up to 10,000 subscribers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">
                      Advanced analytics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">
                      24-hour support response time
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
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
              <div className="bg-card rounded-xl p-8">
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
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">
                      Unlimited products
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">
                      Unlimited subscribers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">
                      Advanced analytics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">
                      1-hour, dedicated support response time
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
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
        </section>

        {/* Newsletter Section */}
        <section className="min-h-[75vh] flex items-center py-24 px-8 lg:px-16 bg-muted/50">
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
        </section>

        {/* Statistics Section */}
        <section className="min-h-[75vh] flex items-center py-24 px-8 lg:px-16 bg-background">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] bg-gradient-to-br from-muted/50 to-muted rounded-2xl overflow-hidden shadow-2xl border border-border">
                  <div className="w-full h-full bg-card m-4 rounded-xl border border-border flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <svg
                        className="w-16 h-16 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
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
                  chosen us as their launchpad to greatness. Your turn to
                  join the league of extraordinary.
                </P>

                {/* Statistics Grid */}
                <div className="grid grid-cols-2 gap-8">
                  {/* Stat 1 */}
                  <div>
                    <div className="text-4xl font-bold text-foreground mb-2">
                      8,000+
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Creators on the platform
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div>
                    <div className="text-4xl font-bold text-foreground mb-2">
                      3%
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Flat platform fee
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div>
                    <div className="text-4xl font-bold text-foreground mb-2">
                      99.9%
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Uptime guarantee
                    </div>
                  </div>

                  {/* Stat 4 */}
                  <div>
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
        </section>

        {/* Testimonials Section */}
        <section className="min-h-[75vh] flex items-center py-24 px-8 lg:px-16 bg-muted/30">
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
                  "This platform doesn't just solve problems—it anticipates them.
                  It's like having a crystal ball for my business."
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
                  "I've tried every platform out there, but this one reads my mind.
                  It's not just a tool—it's like having a digital extension of my brain
                  that happens to be way smarter than me."
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
                  "Finally, a platform that gets it. My productivity has
                  tripled and my stress has vanished into thin air."
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
                  "I was skeptical at first, but this changed everything.
                  My clients think I'm a wizard now."
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
                  "The learning curve? What learning curve? I was up and
                  running in minutes, creating like never before."
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

              {/* Testimonial 6 */}
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <p className="text-foreground mb-6 leading-relaxed">
                  "My competition is still figuring out what hit them.
                  This platform is my secret weapon."
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

              {/* Additional testimonials for the right column */}
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <p className="text-foreground mb-6 leading-relaxed">
                  "Three words: game absolutely changed. This is the future
                  and I'm living in it."
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
                  &quot;This isn&apos;t just a tool—it&apos;s like having a digital genius
                  as your creative partner. Pure magic.&quot;
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
                  &quot;I&apos;ve never felt more confident about my digital strategy.
                  This platform makes the impossible feel inevitable.&quot;
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
                  "ROI through the roof. This investment paid for itself
                  in the first week. Best decision I've made this year."
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
                  "The support team is incredible. They solved my problem
                  before I even knew I had one. Mind readers!"
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
        </section>

        {/* Contact Form Section */}
        <section className="min-h-[75vh] bg-background flex items-center py-24 px-8 lg:px-16">
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
                      <svg
                        className="w-16 h-16 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="text-sm">Office Workspace Image</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Leadership Section */}
        <section className="min-h-[75vh] flex items-center py-24 px-8 lg:px-16 bg-muted/50">
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
        </section>

        {/* Trusted Companies Section */}
        <section className="py-20 px-8 lg:px-16 bg-background">
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
        </section>

        {/* FAQ Section */}
        <section className="min-h-[75vh] flex items-center py-24 px-8 lg:px-16 bg-muted/50">
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
                <AccordionContent className="text-muted-foreground leading-relaxed pb-8">
                  We get it—it sounds like magic. But thousands of creators
                  are already living proof that sometimes the impossible
                  is just innovation in disguise.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-border">
                <AccordionTrigger className="text-xl font-semibold text-foreground py-8 hover:no-underline">
                  Will this replace my entire team?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-8">
                  Not replace—supercharge. Your team will become unstoppable
                  when they're armed with tools that think as fast as they do.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-border">
                <AccordionTrigger className="text-xl font-semibold text-foreground py-8 hover:no-underline">
                  How fast can I see results?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-8">
                  Most creators see improvements within 24 hours. Some see
                  magic happen in minutes. It depends how ready you are
                  to embrace the future.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-border">
                <AccordionTrigger className="text-xl font-semibold text-foreground py-8 hover:no-underline">
                  What if I'm not technical?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-8">
                  Perfect! Our platform was designed for humans, not robots.
                  If you can use a smartphone, you can build digital empires
                  with us.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-border">
                <AccordionTrigger className="text-xl font-semibold text-foreground py-8 hover:no-underline">
                  Can I cancel anytime?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-8">
                  Absolutely. Though we're confident you'll be too busy
                  counting your success to think about leaving.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-border">
                <AccordionTrigger className="text-xl font-semibold text-foreground py-8 hover:no-underline">
                  Is my data really safe?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-8">
                  Safer than a secret in a vault guarded by ninjas.
                  We use military-grade encryption and our security team
                  never sleeps (seriously, they're vampires).
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

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
                  Turning wild ideas into digital magic, one line of code
                  at a time.
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
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
