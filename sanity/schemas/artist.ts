import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: r => r.required() }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'portrait', title: 'Portrait Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bio', title: 'Bio', type: 'text' }),
    defineField({ name: 'instagramUrl', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'tiktokUrl', title: 'TikTok URL', type: 'url' }),
    defineField({ name: 'photos', title: 'Photo Gallery', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
    defineField({
      name: 'videos',
      title: 'YouTube Videos',
      type: 'array',
      of: [defineType({ name: 'video', type: 'object', fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'url', type: 'url' }),
      ]})],
    }),
    defineField({
      name: 'shows',
      title: 'Upcoming Shows',
      type: 'array',
      of: [defineType({ name: 'show', type: 'object', fields: [
        defineField({ name: 'date', type: 'date' }),
        defineField({ name: 'venue', type: 'string' }),
        defineField({ name: 'city', type: 'string' }),
      ]})],
    }),
  ],
})
