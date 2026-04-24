import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'trackstackUrl', title: 'Trackstack URL', type: 'url' }),
    defineField({ name: 'instagramUrl', title: 'Label Instagram URL', type: 'url' }),
    defineField({ name: 'soundcloudUrl', title: 'Label SoundCloud URL', type: 'url' }),
    defineField({ name: 'youtubeUrl', title: 'Label YouTube URL', type: 'url' }),
    defineField({ name: 'liveSetYoutubeUrl', title: 'Live Set Feature YouTube URL', type: 'url' }),
  ],
})
