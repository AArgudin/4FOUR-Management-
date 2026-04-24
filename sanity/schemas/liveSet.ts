import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'liveSet',
  title: 'Live Set',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Set Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'youtubeUrl', title: 'YouTube URL', type: 'url', validation: r => r.required() }),
    defineField({ name: 'artistName', title: 'Artist Name', type: 'string' }),
    defineField({ name: 'date', title: 'Date', type: 'date' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
