import { defineField, defineType } from 'sanity'

export const testimonials = defineType({
  name: 'testimonials',
  title: 'Testimonials Section',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionSubtitle',
      title: 'Section Subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      initialValue: 'Testimonials',
    }),
    defineField({
      name: 'testimonialsList',
      title: 'Testimonials List',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'testimonial',
          title: 'Testimonial',
          fields: [
            defineField({
              name: 'content',
              title: 'Testimonial Content',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'authorName',
              title: 'Author Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'authorTitle',
              title: 'Author Title',
              type: 'string',
            }),
            defineField({
              name: 'authorCompany',
              title: 'Author Company',
              type: 'string',
            }),
            defineField({
              name: 'authorAvatar',
              title: 'Author Avatar',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'rating',
              title: 'Rating',
              type: 'number',
              validation: (Rule) => Rule.min(1).max(5),
              initialValue: 5,
            }),
          ],
          preview: {
            select: {
              title: 'authorName',
              subtitle: 'content',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'sectionTitle',
    },
    prepare(selection) {
      return {
        title: 'Testimonials Section',
        subtitle: selection.title,
      }
    },
  },
})