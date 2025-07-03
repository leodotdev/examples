import { defineField, defineType } from 'sanity'

export const pricing = defineType({
  name: 'pricing',
  title: 'Pricing Section',
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
      initialValue: 'Pricing',
    }),
    defineField({
      name: 'plans',
      title: 'Pricing Plans',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'plan',
          title: 'Pricing Plan',
          fields: [
            defineField({
              name: 'name',
              title: 'Plan Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Plan Description',
              type: 'string',
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'period',
              title: 'Billing Period',
              type: 'string',
              initialValue: 'month',
            }),
            defineField({
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'highlighted',
              title: 'Popular Plan',
              type: 'boolean',
              initialValue: false,
            }),
            defineField({
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              initialValue: 'Get started',
            }),
            defineField({
              name: 'buttonUrl',
              title: 'Button URL',
              type: 'string',
              initialValue: '#',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'price',
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
        title: 'Pricing Section',
        subtitle: selection.title,
      }
    },
  },
})