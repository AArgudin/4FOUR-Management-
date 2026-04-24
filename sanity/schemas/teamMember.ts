import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'photo', title: 'Profile Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'instagramUrl', title: 'Instagram URL', type: 'url' }),
  ],
})
