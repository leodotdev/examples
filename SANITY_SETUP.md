# Sanity.io CMS Integration

## 🎯 Overview

This project now includes full Sanity.io CMS integration with:
- **Editable Homepage Sections**: Hero, Features, Pricing, Testimonials, Stats, FAQ
- **Blog System**: Posts, Authors, Categories
- **Sanity Studio**: Content management interface at `/studio`
- **Type-safe Content**: Full TypeScript integration

## 🚀 Setup Instructions

### 1. Install Dependencies

The required packages are already added to `package.json`. Install them:

```bash
pnpm install
```

Or run the installation script:

```bash
./install-sanity.sh
```

Key packages:
- `next-sanity` - Next.js integration
- `sanity` - Core Sanity functionality
- `@sanity/client` - Sanity client
- `@sanity/image-url` - Image URL builder
- `@portabletext/react` - Rich text rendering
- `groq` - Query language

### 2. Create Sanity Project

1. Go to [sanity.io](https://sanity.io) and create an account
2. Create a new project
3. Note your **Project ID** and **Dataset** (usually "production")

### 3. Environment Variables

Create `.env.local` file in the root directory:

```bash
# Copy from .env.local.example and fill in your values
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

To get an API token:
1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Select your project
3. Go to API → Tokens
4. Create a new token with "Editor" permissions

### 4. Initialize Sanity Studio

The Studio is already configured at `/studio`. After setting up environment variables:

1. Start the development server: `pnpm dev`
2. Navigate to `http://localhost:3000/studio`
3. Login with your Sanity account
4. Start creating content!

## 📚 Content Schemas

### Homepage Sections

#### Hero Section
```typescript
{
  badge: string           // "Fresh drop"
  badgeDescription: string // "Mind-bending features inside"
  title: string          // Main headline
  subtitle: string       // Description text
  primaryButtonText: string
  primaryButtonUrl: string
  secondaryButtonText: string
  secondaryButtonUrl: string
  image?: Image          // Optional hero image
}
```

#### Features Section
```typescript
{
  sectionTitle: string
  sectionSubtitle: string
  badge: string
  featuresList: [
    {
      icon: string       // Tabler icon name
      title: string
      description: string
    }
  ]
}
```

#### Pricing Section
```typescript
{
  sectionTitle: string
  sectionSubtitle: string
  badge: string
  plans: [
    {
      name: string
      description: string
      price: string
      period: string
      features: string[]
      highlighted: boolean // Popular plan
      buttonText: string
      buttonUrl: string
    }
  ]
}
```

#### Testimonials Section
```typescript
{
  sectionTitle: string
  sectionSubtitle: string
  badge: string
  testimonialsList: [
    {
      content: string
      authorName: string
      authorTitle: string
      authorCompany: string
      authorAvatar?: Image
      rating: number (1-5)
    }
  ]
}
```

#### Statistics Section
```typescript
{
  sectionTitle: string
  sectionSubtitle: string
  statisticsList: [
    {
      number: string     // "99%", "1M+", etc.
      label: string      // "Uptime"
      description: string
    }
  ]
}
```

#### FAQ Section
```typescript
{
  sectionTitle: string
  sectionSubtitle: string
  badge: string
  faqList: [
    {
      question: string
      answer: string
    }
  ]
}
```

### Blog System

#### Blog Post
```typescript
{
  title: string
  slug: Slug             // Auto-generated from title
  excerpt: string        // Summary
  featuredImage?: Image
  content: PortableText  // Rich text with images
  author: Reference      // Link to Author
  category: Reference    // Link to Category
  tags: string[]
  publishedAt: DateTime
  featured: boolean      // Show in featured section
}
```

#### Author
```typescript
{
  name: string
  slug: Slug
  image?: Image
  bio: PortableText
  socialLinks: {
    twitter?: URL
    linkedin?: URL
    website?: URL
  }
}
```

#### Category
```typescript
{
  title: string
  slug: Slug
  description: string
  color: string          // blue, green, purple, red, orange, yellow
}
```

## 🔄 Using Sanity Content

### Option 1: Replace Current Homepage

To use Sanity content on the homepage, replace the content in `app/page.tsx` with the Sanity-integrated version from `app/page-sanity.tsx`.

### Option 2: Gradual Integration

Integrate sections one by one by importing the query functions:

```typescript
import { client } from '@/sanity/lib/client'
import { heroQuery } from '@/sanity/lib/queries'

export default async function Page() {
  const heroData = await client.fetch(heroQuery)
  
  return (
    <div>
      <h1>{heroData?.title || 'Default Title'}</h1>
      {/* Rest of your component */}
    </div>
  )
}
```

## 📝 Content Management Workflow

### 1. Content Creation
1. Go to `/studio`
2. Create content for each section
3. Fill in all required fields
4. Save and publish

### 2. Content Structure
- **Single Documents**: Hero, Features, Pricing, Testimonials, Stats, FAQ (one per site)
- **Multiple Documents**: Blog Posts, Authors, Categories (many per site)

### 3. Content Guidelines

#### Homepage Sections
- Create one document for each section type
- Use descriptive titles and content
- For features, use Tabler icon names (e.g., "IconCloudDownload")
- Keep text concise and engaging

#### Blog Content
- Write engaging headlines and excerpts
- Use featured images for better visual appeal
- Categorize posts appropriately
- Add relevant tags for discoverability
- Set featured posts to highlight important content

## 🎨 Available Icons

The following Tabler icons are available for features:
- `IconCloudDownload` - Deployment/Cloud
- `IconShield` - Security
- `IconRefresh` - Updates/Sync
- `IconSearch` - Search/Discovery
- `IconBuilding` - Enterprise
- `IconUsers` - Team/Collaboration
- `IconCheck` - Success/Validation
- `IconPhoto` - Media/Images
- `IconWorld` - Global/Web
- `IconChartBar` - Analytics/Data
- `IconShieldCheck` - Verified Security

## 🚀 Going Live

### 1. Deploy to Production
1. Deploy your Next.js app to Vercel/Netlify
2. Add environment variables to your hosting platform
3. Update CORS origins in Sanity project settings

### 2. Content Management
1. Share Studio URL with content editors: `yoursite.com/studio`
2. Create author accounts for team members
3. Set up content workflows and review processes

## 🔧 Advanced Features

### Preview Mode (Optional)
Implement draft preview functionality for content editors to see changes before publishing.

### Webhooks (Optional)
Set up webhooks to trigger revalidation when content changes in Sanity.

### Performance Optimization
- Use ISR (Incremental Static Regeneration) for better performance
- Implement proper caching strategies
- Optimize images through Sanity's CDN

## 📁 File Structure

```
/
├── sanity/
│   ├── lib/
│   │   ├── client.ts          # Sanity client configuration
│   │   ├── image.ts           # Image URL builder
│   │   └── queries.ts         # GROQ queries
│   └── schemas/
│       ├── index.ts           # Schema exports
│       ├── hero.ts            # Hero section schema
│       ├── features.ts        # Features section schema
│       ├── pricing.ts         # Pricing section schema
│       ├── testimonials.ts    # Testimonials section schema
│       ├── stats.ts           # Statistics section schema
│       ├── faq.ts            # FAQ section schema
│       ├── post.ts           # Blog post schema
│       ├── author.ts         # Author schema
│       └── category.ts       # Category schema
├── app/
│   ├── studio/[[...tool]]/
│   │   └── page.tsx          # Sanity Studio
│   ├── blog/
│   │   ├── page.tsx          # Blog listing
│   │   └── [slug]/page.tsx   # Individual post
│   ├── page.tsx              # Current homepage
│   └── page-sanity.tsx       # Sanity-integrated homepage
├── sanity.config.ts          # Sanity configuration
└── .env.local.example        # Environment variables template
```

The CMS integration is now complete and ready for content management! 🎉