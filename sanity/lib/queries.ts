import { groq } from 'next-sanity'

// Landing page sections
export const heroQuery = groq`*[_type == "hero"] | order(_updatedAt desc) [0]`

export const featuresQuery = groq`*[_type == "features"][0]{
  ...,
  featuresList[]{
    icon,
    title,
    description
  }
}`

export const pricingQuery = groq`*[_type == "pricing"][0]{
  ...,
  plans[]{
    name,
    description,
    price,
    period,
    features,
    highlighted,
    buttonText,
    buttonUrl
  }
}`

export const testimonialsQuery = groq`*[_type == "testimonials"][0]{
  ...,
  testimonialsList[]{
    content,
    authorName,
    authorTitle,
    authorCompany,
    authorAvatar,
    rating
  }
}`

export const statsQuery = groq`*[_type == "stats"][0]{
  ...,
  statisticsList[]{
    number,
    label,
    description
  }
}`

export const faqQuery = groq`*[_type == "faq"][0]{
  ...,
  faqList[]{
    question,
    answer
  }
}`

// Blog queries
export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  publishedAt,
  featured,
  author->{
    name,
    image
  },
  category->{
    title,
    color
  }
}`

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  ...,
  author->{
    name,
    image,
    bio,
    socialLinks
  },
  category->{
    title,
    color,
    description
  }
}`

export const featuredPostsQuery = groq`*[_type == "post" && featured == true] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  publishedAt,
  author->{
    name,
    image
  },
  category->{
    title,
    color
  }
}`

export const categoriesQuery = groq`*[_type == "category"] | order(title asc)`

export const postsByCategoryQuery = groq`*[_type == "post" && category->slug.current == $category] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  publishedAt,
  author->{
    name,
    image
  },
  category->{
    title,
    color
  }
}`