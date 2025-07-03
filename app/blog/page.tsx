import { client } from '@/sanity/lib/client'
import { postsQuery, featuredPostsQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { H1, P } from '@/components/ui/typography'
import Image from 'next/image'
import Link from 'next/link'

interface SanityImageAsset {
  _id: string
  url: string
  metadata?: {
    dimensions: {
      width: number
      height: number
    }
  }
  [key: string]: unknown
}

interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  featuredImage?: SanityImageAsset
  publishedAt: string
  featured: boolean
  author: {
    name: string
    image?: SanityImageAsset
  }
  category: {
    title: string
    color: string
  }
}

async function getPosts(): Promise<Post[]> {
  return await client.fetch(postsQuery)
}

async function getFeaturedPosts(): Promise<Post[]> {
  return await client.fetch(featuredPostsQuery)
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function getCategoryColor(color: string) {
  const colors = {
    blue: 'bg-blue-100 text-blue-800 border-blue-200',
    green: 'bg-green-100 text-green-800 border-green-200',
    purple: 'bg-purple-100 text-purple-800 border-purple-200',
    red: 'bg-red-100 text-red-800 border-red-200',
    orange: 'bg-orange-100 text-orange-800 border-orange-200',
    yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  }
  return colors[color as keyof typeof colors] || colors.blue
}

function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <article className={`group ${featured ? 'lg:col-span-2' : ''}`}>
      <Link href={`/blog/${post.slug.current}`}>
        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
          {post.featuredImage && (
            <div className={`relative ${featured ? 'aspect-[2/1]' : 'aspect-[4/3]'} overflow-hidden`}>
              <Image
                src={urlForImage(post.featuredImage)?.width(800).height(400).url() || ''}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category.color)}`}>
                {post.category.title}
              </span>
              <span className="text-sm text-muted-foreground">
                {formatDate(post.publishedAt)}
              </span>
            </div>
            
            <h2 className={`font-bold mb-3 group-hover:text-primary transition-colors ${featured ? 'text-2xl' : 'text-xl'}`}>
              {post.title}
            </h2>
            
            {post.excerpt && (
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {post.excerpt}
              </p>
            )}
            
            <div className="flex items-center gap-3">
              {post.author.image && (
                <Image
                  src={urlForImage(post.author.image)?.width(40).height(40).url() || ''}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <div>
                <p className="text-sm font-medium">{post.author.name}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default async function BlogPage() {
  const [posts, featuredPosts] = await Promise.all([
    getPosts(),
    getFeaturedPosts(),
  ])

  const regularPosts = posts.filter(post => !post.featured)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                Blog
              </span>
            </div>
            <H1 className="text-4xl lg:text-6xl font-bold mb-6">
              Insights & Stories
            </H1>
            <P className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the latest trends, insights, and stories from our team. 
              Dive deep into technology, design, and innovation.
            </P>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Featured Posts</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <PostCard key={post._id} post={post} featured />
                ))}
              </div>
            </section>
          )}

          {/* All Posts */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Latest Posts</h2>
              <Button variant="outline">
                View All Categories
              </Button>
            </div>
            
            {regularPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-4">No posts yet</h3>
                <p className="text-muted-foreground mb-8">
                  Check back soon for our latest insights and stories.
                </p>
                <Button asChild>
                  <Link href="/">Return to Home</Link>
                </Button>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  )
}