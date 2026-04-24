export const artistsQuery = `*[_type == "artist"] | order(_createdAt asc) {
  _id, name, slug, role, portrait, bio, instagramUrl, tiktokUrl, photos, videos, shows
}`

export const artistBySlugQuery = `*[_type == "artist" && slug.current == $slug][0] {
  _id, name, slug, role, portrait, bio, instagramUrl, tiktokUrl, photos, videos, shows
}`

export const liveSetsQuery = `*[_type == "liveSet"] | order(order asc, date desc) {
  _id, title, youtubeUrl, artistName, date
}`

export const teamQuery = `*[_type == "teamMember"] | order(_createdAt asc) {
  _id, name, title, photo, instagramUrl
}`

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  trackstackUrl, instagramUrl, soundcloudUrl, youtubeUrl, liveSetYoutubeUrl
}`
