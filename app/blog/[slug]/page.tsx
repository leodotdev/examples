import { client } from '@/sanity/lib/client'
import { postQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface SanityImageAsset {
  _id: string
  url: string
  alt?: string
  metadata?: {
    dimensions: {
      width: number
      height: number
    }
  }
  [key: string]: unknown
}

type PortableTextBlock = {
  _type: string
  _key?: string
  children?: Array<{
    _type: string
    _key: string
    text?: string
    marks?: string[]
  }>
  markDefs?: Array<{
    _type: string
    _key: string
    [key: string]: unknown
  }>
  style?: string
  level?: number
  listItem?: string
  [key: string]: unknown
}

interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  featuredImage?: SanityImageAsset
  content: PortableTextBlock[]
  publishedAt: string
  author: {
    name: string
    image?: SanityImageAsset
    bio?: PortableTextBlock[]
    socialLinks?: {
      twitter?: string
      linkedin?: string
      website?: string
    }
  }
  category: {
    title: string
    color: string
    description?: string
  }
  tags?: string[]
}

async function getPost(slug: string): Promise<Post | null> {
  return await client.fetch(postQuery, { slug })
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

const portableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImageAsset }) => (
      <div className="my-8">
        <Image
          src={urlForImage(value)?.width(800).height(600).url() || ''}
          alt={value.alt || ''}
          width={800}
          height={600}
          className="rounded-xl"
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-4xl font-bold mb-6 mt-12">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-3xl font-bold mb-4 mt-10">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-2xl font-bold mb-4 mt-8">{children}</h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-lg leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-primary pl-6 italic text-lg my-8">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: { children?: React.ReactNode; value?: { href: string } }) => (
      <a
        href={value?.href || '#'}
        className="text-primary hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => <em className="italic">{children}</em>,
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside mb-6 space-y-2">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside mb-6 space-y-2">{children}</ol>
    ),
  },
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(post.category.color)}`}>
                {post.category.title}
              </span>
              <span className="text-muted-foreground">
                {formatDate(post.publishedAt)}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {post.excerpt}
              </p>
            )}

            {/* Author */}
            <div className="flex items-center gap-4 mb-8">
              {post.author.image && (
                <Image
                  src={urlForImage(post.author.image)?.width(64).height(64).url() || ''}
                  alt={post.author.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              )}
              <div>
                <p className="font-medium text-lg">{post.author.name}</p>
                {post.author.bio && (
                  <div className="text-muted-foreground">
                    <PortableText value={post.author.bio} />
                  </div>
                )}
              </div>
            </div>

            {/* Featured Image */}
            {post.featuredImage && (
              <div className="relative aspect-[2/1] mb-12 rounded-2xl overflow-hidden">
                <Image
                  src={urlForImage(post.featuredImage)?.width(1200).height(600).url() || ''}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.content} components={portableTextComponents} />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-lg font-medium mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <Button variant="outline" asChild>
                <Link href="/blog">← Back to Blog</Link>
              </Button>
              
              {post.author.socialLinks && (
                <div className="flex gap-4">
                  {post.author.socialLinks.twitter && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={post.author.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter
                      </a>
                    </Button>
                  )}
                  {post.author.socialLinks.linkedin && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={post.author.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </article>
      </main>
    </>
  )
}